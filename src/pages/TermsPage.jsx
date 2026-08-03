import { useEffect, useState } from "react";
import { loadPackages } from "../services/packagesApi.js";
import TermsSection from "../components/TermsSection.jsx";

export default function TermsPage() {
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    let alive = true;
    loadPackages().then((data) => {
      if (alive) setTerms(data.terms);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <main className="page">
      <div className="container">
        <header className="page-header">
          <img className="page-logo" src="/assets/vedant-logo.png" alt="Vedant Solutions" />
          <span className="eyebrow">NEET UG Counselling</span>
          <h1 className="page-title">Payment terms &amp; conditions</h1>
          <a className="back-link" href="/">
            ← Back to packages
          </a>
        </header>

        {terms ? <TermsSection terms={terms} /> : <p className="loading">Loading…</p>}
      </div>
    </main>
  );
}
