import { useState } from 'react';
import { Base44 } from '../data/base44';

function verdict(ratio: number) {
  if (ratio >= 10) return 'Tier 1' as const;
  if (ratio >= 5) return 'Tier 2' as const;
  return 'Tier 3' as const;
}

export function CategoryArbitragePage() {
  const [category, setCategory] = useState('');
  const [avgCCV, setAvgCCV] = useState(0);
  const [activeStreamers, setActiveStreamers] = useState(1);
  const [rows, setRows] = useState(() => Base44.list('categoryEntries'));

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Category Arbitrage</h1>
      <div className="grid gap-2 md:grid-cols-4">
        <input className="rounded bg-slate-800 px-3 py-2" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input className="rounded bg-slate-800 px-3 py-2" type="number" placeholder="Avg viewers" onChange={(e) => setAvgCCV(Number(e.target.value))} />
        <input className="rounded bg-slate-800 px-3 py-2" type="number" placeholder="Active streamers" onChange={(e) => setActiveStreamers(Number(e.target.value))} />
        <button
          className="rounded bg-cyan-500 px-3 py-2 font-semibold text-slate-900"
          onClick={() => {
            const ratio = Math.round((avgCCV / Math.max(activeStreamers, 1)) * 10) / 10;
            Base44.insert('categoryEntries', {
              id: crypto.randomUUID(),
              category,
              avgCCV,
              activeStreamers,
              ratio,
              verdict: verdict(ratio),
            });
            setRows(Base44.list('categoryEntries'));
          }}
        >
          Evaluate
        </button>
      </div>
      <div className="space-y-2 text-sm">
        {rows.map((row) => (
          <div key={row.id} className="rounded-lg bg-slate-800/80 p-3">
            <strong>{row.category}</strong> · Ratio {row.ratio} · <span className="text-cyan-300">{row.verdict}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
