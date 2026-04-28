const checks = [
  { label: 'Mic input stable', ok: true },
  { label: 'Camera feed detected', ok: true },
  { label: 'Bitrate > 6000 kbps', ok: true },
  { label: 'Safe Mode Live enabled', ok: true },
];

export function PreFlightChecklist() {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">Pre-flight Checklist</h3>
      <ul className="space-y-2">
        {checks.map((check) => (
          <li key={check.label} className="flex items-center justify-between rounded bg-slate-800/80 px-3 py-2 text-sm">
            <span>{check.label}</span>
            <span className={check.ok ? 'text-emerald-300' : 'text-amber-300'}>{check.ok ? 'Ready' : 'Review'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
