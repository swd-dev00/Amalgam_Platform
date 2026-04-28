import { useState } from 'react';
import { Base44 } from '../data/base44';

export function GrowthSystemPage() {
  const [entries, setEntries] = useState(() => Base44.list('growthEntries'));

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Growth System</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {entries.map((entry) => (
          <article key={entry.id} className="rounded-xl bg-slate-800/80 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">{entry.lever}</h3>
              <span className="text-xs text-slate-300">{entry.status}</span>
            </div>
            <p className="mb-2 text-sm text-slate-300">Weekly target: {entry.weeklyTarget} · This week: {entry.thisWeek}</p>
            <textarea
              className="w-full rounded bg-slate-900 p-2 text-sm"
              value={entry.notes}
              onChange={(e) => {
                const next = { ...entry, notes: e.target.value };
                Base44.upsert('growthEntries', next);
                setEntries(Base44.list('growthEntries'));
              }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
