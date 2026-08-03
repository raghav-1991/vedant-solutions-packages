import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import PackageCard from "../components/PackageCard.jsx";
import { loadPackages } from "../services/packagesApi.js";

export default function PricingPlans() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    loadPackages().then((data) => {
      if (!alive) return;
      setPackages(data.packages);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <main className="page">
      <div className="container">
        <Header />

        {loading ? (
          <p className="loading">Loading packages…</p>
        ) : (
          <>
            <div className="cards-grid">
              {packages.map((pkg, index) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  collapsible={index !== 0}
                  previewCount={packages[0]?.included.length}
                />
              ))}
            </div>

            <p className="terms-link-row">
              <a className="terms-link" href="/terms.html">
                Payment terms &amp; conditions
              </a>
            </p>
          </>
        )}
      </div>
    </main>
  );
}
