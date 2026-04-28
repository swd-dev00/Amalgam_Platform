export type StreamStatus = 'idea' | 'recording' | 'editing' | 'published';
export type ScriptTone = 'Hype' | 'Sassy' | 'Chill' | 'Dramatic' | 'Pro';
export type GrowthLever =
  | 'Category Arbitrage'
  | 'Clip Pipeline'
  | 'Raid Network'
  | 'Stream Schedule'
  | 'VOD Funnel'
  | 'Collabs';

export interface StreamProject {
  id: string;
  title: string;
  status: StreamStatus;
  platformTargets: string[];
  updatedAt: string;
}

export interface Clip {
  id: string;
  title: string;
  platform: string;
  posted: boolean;
  postedAt?: string;
  views: number;
}

export interface RaidPartner {
  id: string;
  channelName: string;
  avgCCV: number;
  niche: string;
  lastRaidDate: string;
  status: 'active' | 'cooling' | 'new';
}

export interface Script {
  id: string;
  title: string;
  tone: ScriptTone;
  content: string;
  savedAt: string;
}

export interface GrowthEntry {
  id: string;
  lever: GrowthLever;
  weeklyTarget: number;
  thisWeek: number;
  status: 'on-track' | 'behind' | 'ahead';
  notes: string;
}

export interface CategoryEntry {
  id: string;
  category: string;
  avgCCV: number;
  activeStreamers: number;
  ratio: number;
  verdict: 'Tier 1' | 'Tier 2' | 'Tier 3';
}

export interface ContentExperiment {
  id: string;
  pillar: string;
  socialNormViolation: boolean;
  beliefChallenge: string;
  humanVulnerability: string;
  escalationExperiment: string;
}

export interface DistributionItem {
  id: string;
  status: 'planned' | 'filmed' | 'editing' | 'scheduled' | 'posted';
  type: 'short' | 'long';
  platform: 'YT Shorts' | 'YouTube' | 'Instagram Reels' | 'TikTok';
  hookCategory: 'Social Tension' | 'Curiosity' | 'Outcome' | 'Other';
  enabled: boolean;
}

export interface LongVideo {
  id: string;
  pillar: string;
  coreQuestion: string;
  location: string;
  stakes: string;
  status: 'planned' | 'filmed' | 'editing' | 'posted';
}

export interface ShortBlueprint {
  id: string;
  videoId: string;
  hookText: string;
  category: string;
  posted: boolean;
  link: string;
  motionBeat: string;
  hookBeat: string;
  interactionBeat: string;
  cliffhangerBeat: string;
  captions: string;
  funnelLine: string;
  pinned: string;
  longVideoId: string;
}

export interface TimelineSection {
  id: string;
  timeStart: string;
  timeEnd: string;
  section: string;
  whatHappens: string;
  retentionWhy: string;
  notes: string;
}

export interface RetentionCheckpoint {
  id: string;
  timeSec: number;
  retentionPct: number;
  dropPct: number;
  section: string;
  likelyProblem: string;
  fixApplied: string;
}
