import { inr } from "../utils/format.js";
import FeatureToggle from "./FeatureToggle.jsx";
import RazorpayButton from "./RazorpayButton.jsx";

export default function PackageCard({ pkg, collapsible = false, previewCount }) {
  return (
    <article className="card">
      {pkg.highlight && <div className="card-badge">Recommended</div>}

      <div className="card-head">
        <div className="card-name-row">
          <h3 className="card-name">{pkg.name}</h3>
          <span className="card-tier">Tier</span>
        </div>
        <p className="card-subtitle">{pkg.subtitle}</p>
        <p className="card-tagline">{pkg.tagline}</p>

        <div className="price">
          <span className="price-amount">{inr(pkg.base)}</span>
          <span className="price-gst">+ GST</span>
        </div>
        <p className="price-note">
          GST (18%) {inr(pkg.gst)} · Total payable{" "}
          <strong>{inr(pkg.total)}</strong>
        </p>
      </div>

      <div className="card-body">
        <FeatureToggle pkg={pkg} collapsible={collapsible} previewCount={previewCount} />

        <p className="terms-link-row">
          <a className="terms-link" href="/terms.html" target="_blank" rel="noopener noreferrer">
            Payment terms &amp; conditions
          </a>
        </p>

        <RazorpayButton paymentButtonId={pkg.paymentButtonId} label="Select" />

        <p className="pay-terms">50% before counselling · 50% after seat allotment</p>
      </div>
    </article>
  );
}
