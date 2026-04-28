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
