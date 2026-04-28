import { useState } from 'react';
import { Base44 } from '../data/base44';

export function RaidNetworkPage() {
  const [partners] = useState(() => Base44.list('raidPartners'));

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Raid Network</h1>
      <div className="space-y-2">
        {partners.map((partner) => (
          <article key={partner.id} className="rounded-xl bg-slate-800/80 p-3 text-sm">
            <div className="flex justify-between">
              <h3 className="font-semibold">{partner.channelName}</h3>
              <span className="text-slate-300">{partner.status}</span>
            </div>
            <p className="text-slate-300">{partner.niche} · Avg CCV {partner.avgCCV}</p>
            <p className="text-slate-400">Last raid: {partner.lastRaidDate}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
