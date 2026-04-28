import { useState } from 'react';
import { Base44 } from '../data/base44';

export function ClipPipelinePage() {
  const [clips, setClips] = useState(() => Base44.list('clips'));
  const posted = clips.filter((c) => c.posted).length;
  const totalViews = clips.reduce((sum, c) => sum + c.views, 0);

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Clip Pipeline</h1>
      <p className="text-sm text-slate-300">Track clip distribution across TikTok, YT Shorts, and X with ROI visibility.</p>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-xl bg-slate-800 p-3">Posted clips: <strong>{posted}</strong></div>
        <div className="rounded-xl bg-slate-800 p-3">Total views: <strong>{totalViews.toLocaleString()}</strong></div>
        <div className="rounded-xl bg-slate-800 p-3">ROI score: <strong>{Math.round(totalViews / Math.max(posted, 1))}</strong></div>
      </div>
      <div className="space-y-2">
        {clips.map((clip) => (
          <div key={clip.id} className="flex items-center justify-between rounded-lg bg-slate-800/80 p-3 text-sm">
            <div>
              <p className="font-semibold">{clip.title}</p>
              <p className="text-slate-400">{clip.platform} · {clip.views.toLocaleString()} views</p>
            </div>
            <button
              className="rounded bg-cyan-500/80 px-2 py-1 text-xs font-semibold text-slate-950"
              onClick={() => {
                const next = { ...clip, posted: true, postedAt: new Date().toISOString(), views: clip.views || 500 };
                Base44.upsert('clips', next);
                setClips(Base44.list('clips'));
              }}
            >
              {clip.posted ? 'Posted' : 'Mark Posted'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
