import {
  DistributionMatrix,
  EngagementTable,
  LongVideoTracker,
  RetentionTable,
  ShortsTables,
  TimelineCards,
} from '../features/clip-pipeline/ClipPipelineTables';
import { useClipPipelineData } from '../features/clip-pipeline/useClipPipelineData';

export function ClipPipelinePage() {
  const { clips, distribution, videos, shorts, timeline, retention, engagement, metrics, markClipPosted, resetSeedData } = useClipPipelineData();
import { useMemo, useState } from 'react';
import { useState } from 'react';
import { Base44 } from '../data/base44';

export function ClipPipelinePage() {
  const [clips, setClips] = useState(() => Base44.list('clips'));
  const [distribution] = useState(() => Base44.list('distributionItems'));
  const [videos] = useState(() => Base44.list('longVideos'));
  const [shorts, setShorts] = useState(() => Base44.list('shortBlueprints'));
  const [timeline] = useState(() => Base44.list('timelineSections'));
  const [retention] = useState(() => Base44.list('retentionCheckpoints'));
  const [engagement] = useState(() => Base44.list('engagementLogs'));

  const posted = clips.filter((c) => c.posted).length;
  const totalViews = clips.reduce((sum, c) => sum + c.views, 0);
  const avgRetention = useMemo(() => Math.round(retention.reduce((sum, r) => sum + r.retentionPct, 0) / Math.max(retention.length, 1)), [retention]);

  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-bold">Clip Pipeline</h1>
      <p className="text-sm text-slate-300">Distribution workflow + retention diagnostics for Shorts and long-form repurposing.</p>

      <div className="grid gap-3 md:grid-cols-4">
        <div className="rounded-xl bg-slate-800 p-3">Posted clips: <strong>{metrics.posted}</strong></div>
        <div className="rounded-xl bg-slate-800 p-3">Total views: <strong>{metrics.totalViews.toLocaleString()}</strong></div>
        <div className="rounded-xl bg-slate-800 p-3">ROI score: <strong>{Math.round(metrics.totalViews / Math.max(metrics.posted, 1))}</strong></div>
        <div className="rounded-xl bg-slate-800 p-3">Avg retention: <strong>{metrics.avgRetention}%</strong></div>
      </div>

      <DistributionMatrix distribution={distribution} />

      <div className="grid gap-4 md:grid-cols-2">
        <LongVideoTracker videos={videos} />
        <ShortsTables shorts={shorts} />
      </div>

      <TimelineCards timeline={timeline} />
      <RetentionTable retention={retention} />
      <EngagementTable engagement={engagement} />

        <div className="rounded-xl bg-slate-800 p-3">Posted clips: <strong>{posted}</strong></div>
        <div className="rounded-xl bg-slate-800 p-3">Total views: <strong>{totalViews.toLocaleString()}</strong></div>
        <div className="rounded-xl bg-slate-800 p-3">ROI score: <strong>{Math.round(totalViews / Math.max(posted, 1))}</strong></div>
        <div className="rounded-xl bg-slate-800 p-3">Avg retention: <strong>{avgRetention}%</strong></div>
      </div>

      <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
        <h2 className="mb-3 text-lg font-semibold">Distribution Matrix</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-400">
              <tr>
                <th className="pb-2 pr-4">Enabled</th>
                <th className="pb-2 pr-4">Status</th>
                <th className="pb-2 pr-4">Type</th>
                <th className="pb-2 pr-4">Platform</th>
                <th className="pb-2">Hook Category</th>
              </tr>
            </thead>
            <tbody>
              {distribution.map((row) => (
                <tr key={row.id} className="border-t border-slate-800">
                  <td className="py-2 pr-4">{row.enabled ? 'Yes' : 'No'}</td>
                  <td className="py-2 pr-4 capitalize">{row.status}</td>
                  <td className="py-2 pr-4 uppercase">{row.type}</td>
                  <td className="py-2 pr-4">{row.platform}</td>
                  <td className="py-2">{row.hookCategory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
          <h2 className="mb-3 text-lg font-semibold">Long Video Tracker</h2>
          {videos.map((video) => (
            <div key={video.id} className="mb-2 rounded-lg bg-slate-800/80 p-3 text-sm">
              <p><strong>{video.id}</strong> · {video.status}</p>
              <p>{video.pillar} · {video.coreQuestion}</p>
              <p className="text-slate-400">{video.location} · Stakes: {video.stakes}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
          <h2 className="mb-3 text-lg font-semibold">Short Tracker</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-slate-400">
                <tr>
                  <th className="pb-2 pr-3">Short ID</th>
                  <th className="pb-2 pr-3">Video ID</th>
                  <th className="pb-2 pr-3">Hook Text</th>
                  <th className="pb-2 pr-3">Category</th>
                  <th className="pb-2 pr-3">Posted</th>
                  <th className="pb-2">Link</th>
                </tr>
              </thead>
              <tbody>
                {shorts.map((short) => (
                  <tr key={short.id} className="border-t border-slate-800">
                    <td className="py-2 pr-3">{short.id}</td>
                    <td className="py-2 pr-3">{short.videoId}</td>
                    <td className="py-2 pr-3">{short.hookText}</td>
                    <td className="py-2 pr-3">{short.category}</td>
                    <td className="py-2 pr-3">{short.posted ? 'Yes' : 'No'}</td>
                    <td className="py-2">{short.link || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
        <h2 className="mb-3 text-lg font-semibold">Hook Beat Sheet</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-400">
              <tr>
                <th className="pb-2 pr-3">Short ID</th>
                <th className="pb-2 pr-3">Motion 0-1s</th>
                <th className="pb-2 pr-3">Hook 1-3s</th>
                <th className="pb-2 pr-3">Interaction</th>
                <th className="pb-2 pr-3">Cliffhanger</th>
                <th className="pb-2">Captions</th>
              </tr>
            </thead>
            <tbody>
              {shorts.map((short) => (
                <tr key={`beats-${short.id}`} className="border-t border-slate-800 align-top">
                  <td className="py-2 pr-3">{short.id}</td>
                  <td className="py-2 pr-3">{short.motionBeat}</td>
                  <td className="py-2 pr-3">{short.hookBeat}</td>
                  <td className="py-2 pr-3">{short.interactionBeat}</td>
                  <td className="py-2 pr-3">{short.cliffhangerBeat}</td>
                  <td className="py-2">{short.captions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
        <h2 className="mb-3 text-lg font-semibold">Funnel + Pinned CTA Mapping</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-400">
              <tr>
                <th className="pb-2 pr-3">Short ID</th>
                <th className="pb-2 pr-3">Funnel Line Used</th>
                <th className="pb-2 pr-3">Pinned</th>
                <th className="pb-2">Long Video ID</th>
              </tr>
            </thead>
            <tbody>
              {shorts.map((short) => (
                <tr key={`funnel-${short.id}`} className="border-t border-slate-800">
                  <td className="py-2 pr-3">{short.id}</td>
                  <td className="py-2 pr-3">{short.funnelLine}</td>
                  <td className="py-2 pr-3">{short.pinned}</td>
                  <td className="py-2">{short.longVideoId}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="mb-3 text-lg font-semibold">Short Blueprint Library</h2>
          {shorts.map((short) => (
            <div key={short.id} className="mb-2 rounded-lg bg-slate-800/80 p-3 text-sm">
              <p><strong>{short.id}</strong> · {short.category}</p>
              <p>{short.hookText}</p>
              <p className="text-slate-400">Funnel: {short.funnelLine}</p>
              <button
                className="mt-2 rounded bg-cyan-500/80 px-2 py-1 text-xs font-semibold text-slate-950"
                onClick={() => {
                  Base44.upsert('shortBlueprints', { ...short, posted: true, link: short.link || 'https://example.com/short' });
                  setShorts(Base44.list('shortBlueprints'));
                }}
              >
                {short.posted ? 'Posted' : 'Mark Posted'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
        <h2 className="mb-3 text-lg font-semibold">Edit Timeline Structure</h2>
        <div className="space-y-2 text-sm">
          {timeline.map((row) => (
            <div key={row.id} className="rounded-lg bg-slate-800/80 p-3">
              <p><strong>{row.timeStart} - {row.timeEnd}</strong> · {row.section}</p>
              <p>{row.whatHappens}</p>
              <p className="text-slate-400">Retention: {row.retentionWhy} · Notes: {row.notes}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
        <h2 className="mb-3 text-lg font-semibold">Retention Diagnostics</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-400">
              <tr>
                <th className="pb-2 pr-4">Time (sec)</th>
                <th className="pb-2 pr-4">Retention %</th>
                <th className="pb-2 pr-4">Drop %</th>
                <th className="pb-2 pr-4">Section</th>
                <th className="pb-2 pr-4">Likely Problem</th>
                <th className="pb-2">Fix Applied</th>
              </tr>
            </thead>
            <tbody>
              {retention.map((row) => (
                <tr key={row.id} className="border-t border-slate-800">
                  <td className="py-2 pr-4">{row.timeSec}</td>
                  <td className="py-2 pr-4">{row.retentionPct}</td>
                  <td className="py-2 pr-4">{row.dropPct}</td>
                  <td className="py-2 pr-4">{row.section}</td>
                  <td className="py-2 pr-4">{row.likelyProblem || '-'}</td>
                  <td className="py-2">{row.fixApplied || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
        <h2 className="mb-3 text-lg font-semibold">Engagement Log</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-400">
              <tr>
                <th className="pb-2 pr-3">Date</th>
                <th className="pb-2 pr-3">Type</th>
                <th className="pb-2 pr-3">ID</th>
                <th className="pb-2 pr-3">Platform</th>
                <th className="pb-2 pr-3">Posted</th>
                <th className="pb-2 pr-3">Question Asked</th>
                <th className="pb-2 pr-3">Pinned</th>
                <th className="pb-2">Replies</th>
              </tr>
            </thead>
            <tbody>
              {engagement.map((row) => (
                <tr key={row.id} className="border-t border-slate-800">
                  <td className="py-2 pr-3">{row.date}</td>
                  <td className="py-2 pr-3">{row.type}</td>
                  <td className="py-2 pr-3">{row.videoId}</td>
                  <td className="py-2 pr-3">{row.platform}</td>
                  <td className="py-2 pr-3">{row.posted ? 'Yes' : 'No'}</td>
                  <td className="py-2 pr-3">{row.questionAsked}</td>
                  <td className="py-2 pr-3">{row.pinned}</td>
                  <td className="py-2">{row.replies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
              disabled={clip.posted}
              className="rounded bg-cyan-500/80 px-2 py-1 text-xs font-semibold text-slate-950 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300"
              onClick={() => markClipPosted(clip.id)}
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

      <button className="rounded-lg border border-slate-600 px-3 py-2 text-xs text-slate-300 hover:bg-slate-800" onClick={resetSeedData}>
      <button
        className="rounded-lg border border-slate-600 px-3 py-2 text-xs text-slate-300 hover:bg-slate-800"
        onClick={() => {
          Base44.reset();
          setClips(Base44.list('clips'));
          setShorts(Base44.list('shortBlueprints'));
        }}
      >
        Reset Base44 Seed Data
      </button>
    </section>
  );
}
