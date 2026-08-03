import { useEffect, useRef } from "react";

export default function RazorpayButton({ paymentButtonId, label }) {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form || form.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.dataset.payment_button_id = paymentButtonId;
    script.async = true;
    form.appendChild(script);
  }, [paymentButtonId]);

  useEffect(() => {
    const form = formRef.current;
    if (!form || !label) return;

    const applyLabel = () => {
      const textEl = form.querySelector(".PaymentButton-text");
      if (textEl && textEl.textContent !== label) {
        textEl.textContent = label;
        return true;
      }
      return false;
    };

    if (applyLabel()) return;

    const observer = new MutationObserver(() => {
      if (applyLabel()) observer.disconnect();
    });
    observer.observe(form, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [label]);

  return <form ref={formRef} className="razorpay-form" />;
}
