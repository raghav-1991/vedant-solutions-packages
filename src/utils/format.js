/** Format a number as Indian Rupees, e.g. 118000 -> "₹1,18,000". */
export function inr(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}
