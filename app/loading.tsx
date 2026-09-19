// Shown automatically by Next.js while a route segment's data is loading
// (see app/*/page.tsx). Header and footer stay mounted from the root layout.
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-primary-light"
        style={{
          borderTopColor: "var(--primary)",
          borderRightColor: "var(--accent)",
          borderBottomColor: "var(--violet)",
        }}
      />
      <p className="text-sm text-foreground/60">Loading…</p>
    </div>
  );
}
