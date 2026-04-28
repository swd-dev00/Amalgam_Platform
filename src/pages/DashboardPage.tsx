import { LivePill } from '../components/LivePill';
import { PreFlightChecklist } from '../components/PreFlightChecklist';

export function DashboardPage() {
  return (
    <section className="space-y-4">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Creator Command Center</h1>
          <p className="text-sm text-slate-300">Manage live status, growth and stream operations from one resilient hub.</p>
        </div>
        <div className="flex items-center gap-3">
          <LivePill live />
          <button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400">Go Live</button>
        </div>
      </header>
      <div className="grid gap-3 md:grid-cols-3">
        {[
          ['Viewers', '1,284'],
          ['Followers (24h)', '+212'],
          ['Avg CCV', '96'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl bg-slate-800/80 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-400">{label}</p>
            <p className="text-2xl font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <PreFlightChecklist />
        <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">Activity Feed</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Clip posted to TikTok hit 12k views in 2h.</li>
            <li>Raid from NovaFPS delivered +46 followers.</li>
            <li>Bestie suggested 3 new opening hooks.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
