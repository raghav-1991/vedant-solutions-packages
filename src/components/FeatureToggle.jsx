import { useState } from "react";
import { Check, X, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

export default function FeatureToggle({ pkg, collapsible = false, previewCount }) {
  const [tab, setTab] = useState("included");
  const [expanded, setExpanded] = useState(false);
  const hasExcluded = pkg.excluded.length > 0;

  const activeList = tab === "included" ? pkg.included : pkg.excluded;
  const canCollapse =
    collapsible && typeof previewCount === "number" && activeList.length > previewCount;
  const visibleList = canCollapse && !expanded ? activeList.slice(0, previewCount) : activeList;

  return (
    <div className="features">
      {hasExcluded ? (
        <div className="feature-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={tab === "included"}
            className={"feature-tab" + (tab === "included" ? " is-active is-included" : "")}
            onClick={() => {
              setTab("included");
              setExpanded(false);
            }}
          >
            Included ({pkg.included.length})
          </button>
          <button
            role="tab"
            aria-selected={tab === "excluded"}
            className={"feature-tab" + (tab === "excluded" ? " is-active" : "")}
            onClick={() => {
              setTab("excluded");
              setExpanded(false);
            }}
          >
            Not included ({pkg.excluded.length})
          </button>
        </div>
      ) : (
        <div className="all-included">
          <ShieldCheck size={16} aria-hidden="true" />
          Everything included — full end-to-end support
        </div>
      )}

      {tab === "included" && (
        <ul className="feature-list">
          {visibleList.map(([title, desc], i) => (
            <li key={i} className="feature-item">
              <span className="feature-icon feature-icon--yes" aria-hidden="true">
                <Check size={13} strokeWidth={3} />
              </span>
              <span className="feature-text">
                <span className="feature-title">{title}</span>
                {desc ? <span className="feature-desc">{desc}</span> : null}
              </span>
            </li>
          ))}
        </ul>
      )}

      {tab === "excluded" && hasExcluded && (
        <ul className="feature-list">
          {visibleList.map((item, i) => (
            <li key={i} className="feature-item">
              <span className="feature-icon feature-icon--no" aria-hidden="true">
                <X size={13} strokeWidth={3} />
              </span>
              <span className="feature-text feature-text--muted">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {canCollapse && (
        <button
          type="button"
          className="read-more-toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Read Less" : "Read More"}
          {expanded ? (
            <ChevronUp size={14} aria-hidden="true" />
          ) : (
            <ChevronDown size={14} aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}
