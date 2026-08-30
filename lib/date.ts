/** Parses a "YYYY-MM" (or "Present") label into a Date usable for sorting. */
export function parseDateLabel(label: string): Date {
  if (label === "Present") return new Date(8640000000000000)
  const [year, month] = label.split("-").map(Number)
  return new Date(year, (month || 1) - 1, 1)
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

function formatMonthYear(label: string): string {
  const [year, month] = label.split("-").map(Number)
  if (!month) return String(year)
  return `${MONTHS[month - 1]} ${year}`
}

/** Formats a { start, end } sortable date range into a display string like "Jun 2026 – Present". */
export function formatDateRange(start: string, end: string): string {
  const endLabel = end === "Present" ? "Present" : formatMonthYear(end)
  return `${formatMonthYear(start)} – ${endLabel}`
}
