import { useMemo, useState } from 'react';
import { Base44 } from '../data/base44';
import type { ScriptTone } from '../types';

const tones: ScriptTone[] = ['Hype', 'Sassy', 'Chill', 'Dramatic', 'Pro'];

const templates: Record<ScriptTone, string> = {
  Hype: 'CHAT, lock in! We are about to break the lobby in 3...2...1!',
  Sassy: 'If this build fails, we blame chat. If it wins, I am a genius.',
  Chill: 'Welcome in. Grab a drink and settle in for smooth climbs and clean vibes.',
  Dramatic: 'Tonight, destiny chooses whether we rise or get humbled on stream.',
  Pro: 'Today\'s objective: optimize rotations, tighten comms, and convert momentum.',
};

export function BestieAIPage() {
  const [tone, setTone] = useState<ScriptTone>('Hype');
  const [title, setTitle] = useState('Opening Hook');
  const [saved, setSaved] = useState(() => Base44.list('scripts'));

  const content = useMemo(() => templates[tone], [tone]);

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">AI Bestie Panel</h1>
      <div className="rounded-xl bg-slate-800/70 p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {tones.map((item) => (
            <button
              key={item}
              className={`rounded px-3 py-1 text-sm ${tone === item ? 'bg-cyan-500 text-slate-950' : 'bg-slate-700 text-slate-200'}`}
              onClick={() => setTone(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="rounded bg-slate-900 p-3 text-sm">{content}</p>
        <div className="mt-3 flex gap-2">
          <input className="w-full rounded bg-slate-900 px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button
            className="rounded bg-cyan-500 px-3 py-2 font-semibold text-slate-950"
            onClick={() => {
              Base44.insert('scripts', {
                id: crypto.randomUUID(),
                title,
                tone,
                content,
                savedAt: new Date().toISOString(),
              });
              setSaved(Base44.list('scripts'));
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div className="rounded-xl bg-slate-800/70 p-4">
        <h3 className="mb-2 font-semibold">Saved Scripts Library</h3>
        <ul className="space-y-2 text-sm">
          {saved.map((script) => (
            <li key={script.id} className="rounded bg-slate-900 p-2">{script.title} · {script.tone}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
