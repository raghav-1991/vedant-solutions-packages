import { packages as localPackages, terms as localTerms } from "../data/packages.js";

/**
 * Loads packages + terms.
 * Tries the Express API first (/api/packages); if it isn't running
 * (e.g. you only started the Vite dev server), it falls back to the
 * bundled local data so the page always renders.
 */
export async function loadPackages() {
  try {
    const res = await fetch("/api/packages", { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`API responded ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.packages)) throw new Error("Malformed API payload");
    return { packages: data.packages, terms: data.terms ?? localTerms };
  } catch (err) {
    // Silent, expected fallback when the API server isn't up.
    return { packages: localPackages, terms: localTerms };
  }
}
