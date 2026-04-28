export function LivePill({ live }: { live: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        live ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-700 text-slate-200'
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${live ? 'animate-pulse bg-rose-400' : 'bg-slate-300'}`} />
      {live ? 'LIVE' : 'OFFLINE'}
    </span>
  );
}
