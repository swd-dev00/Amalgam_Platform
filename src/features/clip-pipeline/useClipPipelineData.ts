import { useMemo, useState } from 'react';
import { Base44 } from '../../data/base44';

export function useClipPipelineData() {
  const [clips, setClips] = useState(() => Base44.list('clips'));
  const [distribution] = useState(() => Base44.list('distributionItems'));
  const [videos] = useState(() => Base44.list('longVideos'));
  const [shorts, setShorts] = useState(() => Base44.list('shortBlueprints'));
  const [timeline] = useState(() => Base44.list('timelineSections'));
  const [retention] = useState(() => Base44.list('retentionCheckpoints'));
  const [engagement] = useState(() => Base44.list('engagementLogs'));

  const metrics = useMemo(() => {
    const posted = clips.filter((c) => c.posted).length;
    const totalViews = clips.reduce((sum, c) => sum + c.views, 0);
    const avgRetention = Math.round(retention.reduce((sum, r) => sum + r.retentionPct, 0) / Math.max(retention.length, 1));
    return { posted, totalViews, avgRetention };
  }, [clips, retention]);

  const markClipPosted = (clipId: string) => {
    const target = clips.find((clip) => clip.id === clipId);
    if (!target || target.posted) return;
    Base44.upsert('clips', { ...target, posted: true, postedAt: new Date().toISOString(), views: target.views || 500 });
    setClips(Base44.list('clips'));
  };

  const resetSeedData = () => {
    Base44.reset();
    setClips(Base44.list('clips'));
    setShorts(Base44.list('shortBlueprints'));
  };

  return {
    clips,
    distribution,
    videos,
    shorts,
    timeline,
    retention,
    engagement,
    metrics,
    markClipPosted,
    resetSeedData,
  };
}
