/**
 * Minimal Express API for the pricing page.
 * Serves the package + terms data as JSON at GET /api/packages.
 *
 * Run standalone:  npm run api      (http://localhost:3001)
 * During dev, Vite proxies /api -> http://localhost:3001 (see vite.config.js),
 * so the React app can fetch("/api/packages") transparently.
 *
 * The frontend also falls back to bundled local data if this server
 * isn't running, so the page works either way.
 */
import express from "express";
import { packages, terms } from "../src/data/packages.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  next();
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/packages", (_req, res) => {
  res.json({ packages, terms });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}/api/packages`);
});
