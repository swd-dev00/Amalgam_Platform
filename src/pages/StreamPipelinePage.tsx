import { useMemo, useState } from 'react';
import { Base44 } from '../data/base44';
import type { StreamStatus } from '../types';

const statuses: StreamStatus[] = ['idea', 'recording', 'editing', 'published'];

export function StreamPipelinePage() {
  const [projects, setProjects] = useState(() => Base44.list('streamProjects'));
  const [title, setTitle] = useState('');

  const grouped = useMemo(
    () => statuses.map((status) => [status, projects.filter((p) => p.status === status)] as const),
    [projects],
  );

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Stream Pipeline</h1>
      <div className="flex gap-2">
        <input className="w-full rounded-lg bg-slate-800 px-3 py-2" placeholder="New stream project" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button
          className="rounded-lg bg-cyan-500 px-3 py-2 font-semibold text-slate-900"
          onClick={() => {
            if (!title.trim()) return;
            const next = {
              id: crypto.randomUUID(),
              title,
              status: 'idea' as StreamStatus,
              platformTargets: ['Twitch', 'YouTube', 'Kick', 'TikTok'],
              updatedAt: new Date().toISOString(),
            };
            Base44.insert('streamProjects', next);
            setProjects(Base44.list('streamProjects'));
            setTitle('');
          }}
        >
          Add
        </button>
      </div>
      <div className="grid gap-3 md:grid-cols-4">
        {grouped.map(([status, items]) => (
          <div key={status} className="rounded-xl bg-slate-800/70 p-3">
            <h3 className="mb-2 font-semibold capitalize">{status}</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <article key={item.id} className="rounded-lg border border-slate-700 bg-slate-900/80 p-2 text-sm">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-slate-400">Targets: {item.platformTargets.join(', ')}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
