import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accordion">
      <button
        className="accordion-head"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="accordion-title">{title}</span>
        {open ? <ChevronUp size={20} aria-hidden="true" /> : <ChevronDown size={20} aria-hidden="true" />}
      </button>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  );
}
