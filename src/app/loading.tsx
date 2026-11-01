export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--line)] border-t-accent" />
    </div>
  );
}
