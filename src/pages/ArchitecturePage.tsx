import { PreFlightChecklist } from '../components/PreFlightChecklist';

export function ArchitecturePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">System Architecture Status</h1>
      <div className="grid gap-3 md:grid-cols-3">
        {[
          ['Shadow Mode', 'Active'],
          ['Safe Mode Live', 'Armed'],
          ['Modular Engine', 'Healthy'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-slate-800 p-3">
            <p className="text-xs uppercase text-slate-400">{k}</p>
            <p className="text-lg font-semibold text-cyan-300">{v}</p>
          </div>
        ))}
      </div>
      <PreFlightChecklist />
    </section>
  );
}
