import type { DistributionItem, EngagementLog, LongVideo, RetentionCheckpoint, ShortBlueprint, TimelineSection } from '../../types';

export function DistributionMatrix({ distribution }: { distribution: DistributionItem[] }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
      <h2 className="mb-3 text-lg font-semibold">Distribution Matrix</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-slate-400"><tr><th className="pb-2 pr-4">Enabled</th><th className="pb-2 pr-4">Status</th><th className="pb-2 pr-4">Type</th><th className="pb-2 pr-4">Platform</th><th className="pb-2">Hook Category</th></tr></thead>
          <tbody>{distribution.map((row) => <tr key={row.id} className="border-t border-slate-800"><td className="py-2 pr-4">{row.enabled ? 'Yes' : 'No'}</td><td className="py-2 pr-4 capitalize">{row.status}</td><td className="py-2 pr-4 uppercase">{row.type}</td><td className="py-2 pr-4">{row.platform}</td><td className="py-2">{row.hookCategory}</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

export function LongVideoTracker({ videos }: { videos: LongVideo[] }) {
  return <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4"><h2 className="mb-3 text-lg font-semibold">Long Video Tracker</h2>{videos.map((video) => <div key={video.id} className="mb-2 rounded-lg bg-slate-800/80 p-3 text-sm"><p><strong>{video.id}</strong> · {video.status}</p><p>{video.pillar} · {video.coreQuestion}</p><p className="text-slate-400">{video.location} · Stakes: {video.stakes}</p></div>)}</div>;
}

export function ShortsTables({ shorts }: { shorts: ShortBlueprint[] }) {
  return (
    <>
      <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4"><h2 className="mb-3 text-lg font-semibold">Short Tracker</h2><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead className="text-left text-slate-400"><tr><th className="pb-2 pr-3">Short ID</th><th className="pb-2 pr-3">Video ID</th><th className="pb-2 pr-3">Hook Text</th><th className="pb-2 pr-3">Category</th><th className="pb-2 pr-3">Posted</th><th className="pb-2">Link</th></tr></thead><tbody>{shorts.map((short) => <tr key={short.id} className="border-t border-slate-800"><td className="py-2 pr-3">{short.id}</td><td className="py-2 pr-3">{short.videoId}</td><td className="py-2 pr-3">{short.hookText}</td><td className="py-2 pr-3">{short.category}</td><td className="py-2 pr-3">{short.posted ? 'Yes' : 'No'}</td><td className="py-2">{short.link || '-'}</td></tr>)}</tbody></table></div></div>
      <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4"><h2 className="mb-3 text-lg font-semibold">Hook Beat Sheet</h2><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead className="text-left text-slate-400"><tr><th className="pb-2 pr-3">Short ID</th><th className="pb-2 pr-3">Motion 0-1s</th><th className="pb-2 pr-3">Hook 1-3s</th><th className="pb-2 pr-3">Interaction</th><th className="pb-2 pr-3">Cliffhanger</th><th className="pb-2">Captions</th></tr></thead><tbody>{shorts.map((short) => <tr key={`beats-${short.id}`} className="border-t border-slate-800 align-top"><td className="py-2 pr-3">{short.id}</td><td className="py-2 pr-3">{short.motionBeat}</td><td className="py-2 pr-3">{short.hookBeat}</td><td className="py-2 pr-3">{short.interactionBeat}</td><td className="py-2 pr-3">{short.cliffhangerBeat}</td><td className="py-2">{short.captions}</td></tr>)}</tbody></table></div></div>
      <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4"><h2 className="mb-3 text-lg font-semibold">Funnel + Pinned CTA Mapping</h2><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead className="text-left text-slate-400"><tr><th className="pb-2 pr-3">Short ID</th><th className="pb-2 pr-3">Funnel Line Used</th><th className="pb-2 pr-3">Pinned</th><th className="pb-2">Long Video ID</th></tr></thead><tbody>{shorts.map((short) => <tr key={`funnel-${short.id}`} className="border-t border-slate-800"><td className="py-2 pr-3">{short.id}</td><td className="py-2 pr-3">{short.funnelLine}</td><td className="py-2 pr-3">{short.pinned}</td><td className="py-2">{short.longVideoId}</td></tr>)}</tbody></table></div></div>
    </>
  );
}

export function TimelineCards({ timeline }: { timeline: TimelineSection[] }) {
  return <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4"><h2 className="mb-3 text-lg font-semibold">Edit Timeline Structure</h2><div className="space-y-2 text-sm">{timeline.map((row) => <div key={row.id} className="rounded-lg bg-slate-800/80 p-3"><p><strong>{row.timeStart} - {row.timeEnd}</strong> · {row.section}</p><p>{row.whatHappens}</p><p className="text-slate-400">Retention: {row.retentionWhy} · Notes: {row.notes}</p></div>)}</div></div>;
}

export function RetentionTable({ retention }: { retention: RetentionCheckpoint[] }) {
  return <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4"><h2 className="mb-3 text-lg font-semibold">Retention Diagnostics</h2><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead className="text-left text-slate-400"><tr><th className="pb-2 pr-4">Time (sec)</th><th className="pb-2 pr-4">Retention %</th><th className="pb-2 pr-4">Drop %</th><th className="pb-2 pr-4">Section</th><th className="pb-2 pr-4">Likely Problem</th><th className="pb-2">Fix Applied</th></tr></thead><tbody>{retention.map((row) => <tr key={row.id} className="border-t border-slate-800"><td className="py-2 pr-4">{row.timeSec}</td><td className="py-2 pr-4">{row.retentionPct}</td><td className="py-2 pr-4">{row.dropPct}</td><td className="py-2 pr-4">{row.section}</td><td className="py-2 pr-4">{row.likelyProblem || '-'}</td><td className="py-2">{row.fixApplied || '-'}</td></tr>)}</tbody></table></div></div>;
}

export function EngagementTable({ engagement }: { engagement: EngagementLog[] }) {
  return <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4"><h2 className="mb-3 text-lg font-semibold">Engagement Log</h2><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead className="text-left text-slate-400"><tr><th className="pb-2 pr-3">Date</th><th className="pb-2 pr-3">Type</th><th className="pb-2 pr-3">ID</th><th className="pb-2 pr-3">Platform</th><th className="pb-2 pr-3">Posted</th><th className="pb-2 pr-3">Question Asked</th><th className="pb-2 pr-3">Pinned</th><th className="pb-2">Replies</th></tr></thead><tbody>{engagement.map((row) => <tr key={row.id} className="border-t border-slate-800"><td className="py-2 pr-3">{row.date}</td><td className="py-2 pr-3">{row.type}</td><td className="py-2 pr-3">{row.videoId}</td><td className="py-2 pr-3">{row.platform}</td><td className="py-2 pr-3">{row.posted ? 'Yes' : 'No'}</td><td className="py-2 pr-3">{row.questionAsked}</td><td className="py-2 pr-3">{row.pinned}</td><td className="py-2">{row.replies}</td></tr>)}</tbody></table></div></div>;
}
