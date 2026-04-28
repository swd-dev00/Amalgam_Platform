import { useState } from 'react';

export function SettingsPage() {
  const [mode, setMode] = useState<'Starter' | 'Pro'>('Pro');
  const [safe, setSafe] = useState(true);
  const [shadow, setShadow] = useState(true);

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="rounded-xl bg-slate-800/80 p-4 text-sm">
        <label className="mb-3 block">
          Mode
          <select className="mt-1 w-full rounded bg-slate-900 p-2" value={mode} onChange={(e) => setMode(e.target.value as 'Starter' | 'Pro')}>
            <option>Starter</option>
            <option>Pro</option>
          </select>
        </label>
        <label className="flex items-center justify-between py-2">
          <span>Safe Mode Live</span>
          <input type="checkbox" checked={safe} onChange={(e) => setSafe(e.target.checked)} />
        </label>
        <label className="flex items-center justify-between py-2">
          <span>Shadow Mode</span>
          <input type="checkbox" checked={shadow} onChange={(e) => setShadow(e.target.checked)} />
        </label>
        <p className="mt-2 text-slate-400">Target devices: Twitch, YouTube, Kick, TikTok configured.</p>
      </div>
    </section>
  );
}
