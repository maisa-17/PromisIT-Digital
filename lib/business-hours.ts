// Matches siteConfig.hours ("Mon – Sat, 9:00 AM – 6:00 PM") — kept separate
// since that string is for display and this needs machine-checkable values.
const OPEN_HOUR = 9;
const CLOSE_HOUR = 18;
const CLOSED_WEEKDAYS = new Set(["Sun"]);

export function isWithinBusinessHours(date: Date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");

  if (CLOSED_WEEKDAYS.has(weekday)) return false;
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
}
