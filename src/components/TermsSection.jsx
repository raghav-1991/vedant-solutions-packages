import { Check } from "lucide-react";
import Accordion from "./Accordion.jsx";

export default function TermsSection({ terms }) {
  return (
    <section className="terms">
      <h2 className="terms-title">Payment terms &amp; conditions</h2>

      <Accordion title="Payment schedule" defaultOpen>
        <ul className="terms-list">
          {terms.schedule.map((line, i) => (
            <li key={i} className="terms-line">
              <Check size={16} className="terms-check" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>
      </Accordion>

      <Accordion title="What each package covers">
        <p>{terms.coverage}</p>
      </Accordion>

      <Accordion title="Refund policy">
        <p>{terms.refund}</p>
      </Accordion>

      <div className="disclaimer">
        <p className="disclaimer-title">Disclaimer</p>
        <p>{terms.disclaimer}</p>
      </div>
    </section>
  );
}
