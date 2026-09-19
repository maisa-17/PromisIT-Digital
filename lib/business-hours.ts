// Matches siteConfig.hours ("Mon – Sat, 9:30 AM – 6:00 PM") — kept separate
// since that string is for display and this needs machine-checkable values.
// Expressed in minutes since midnight so the :30 open time compares cleanly.
const OPEN_MINUTES = 9 * 60 + 30;
const CLOSE_MINUTES = 18 * 60;
const CLOSED_WEEKDAYS = new Set(["Sun"]);

export function isWithinBusinessHours(date: Date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");
  const minutesSinceMidnight = hour * 60 + minute;

  if (CLOSED_WEEKDAYS.has(weekday)) return false;
  return minutesSinceMidnight >= OPEN_MINUTES && minutesSinceMidnight < CLOSE_MINUTES;
}
