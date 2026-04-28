import type { CategoryEntry, Clip, GrowthEntry, RaidPartner, Script, StreamProject } from '../types';

type EntityMap = {
  streamProjects: StreamProject[];
  clips: Clip[];
  raidPartners: RaidPartner[];
  scripts: Script[];
  growthEntries: GrowthEntry[];
  categoryEntries: CategoryEntry[];
};

const seeds: EntityMap = {
  streamProjects: [
    { id: 'sp-1', title: 'Ranked Push Night', status: 'recording', platformTargets: ['Twitch', 'YouTube'], updatedAt: new Date().toISOString() },
    { id: 'sp-2', title: 'Collab Variety Block', status: 'editing', platformTargets: ['Kick', 'TikTok'], updatedAt: new Date().toISOString() },
  ],
  clips: [
    { id: 'c-1', title: 'Insane 1v4 clutch', platform: 'TikTok', posted: true, postedAt: new Date().toISOString(), views: 12344 },
    { id: 'c-2', title: 'Chat chooses loadout', platform: 'YT Shorts', posted: false, views: 0 },
  ],
  raidPartners: [
    { id: 'r-1', channelName: 'NovaFPS', avgCCV: 77, niche: 'Competitive FPS', lastRaidDate: '2026-04-22', status: 'active' },
    { id: 'r-2', channelName: 'CozyQuest', avgCCV: 42, niche: 'Story + Chill', lastRaidDate: '2026-04-16', status: 'new' },
  ],
  scripts: [],
  growthEntries: [
    { id: 'g-1', lever: 'Category Arbitrage', weeklyTarget: 5, thisWeek: 3, status: 'on-track', notes: 'Pull ratio data daily' },
    { id: 'g-2', lever: 'Clip Pipeline', weeklyTarget: 12, thisWeek: 10, status: 'on-track', notes: 'Prioritize Shorts' },
    { id: 'g-3', lever: 'Raid Network', weeklyTarget: 4, thisWeek: 2, status: 'behind', notes: 'Book two weekend raids' },
    { id: 'g-4', lever: 'Stream Schedule', weeklyTarget: 6, thisWeek: 6, status: 'ahead', notes: 'Maintain consistency' },
    { id: 'g-5', lever: 'VOD Funnel', weeklyTarget: 3, thisWeek: 1, status: 'behind', notes: 'Clip chapter highlights' },
    { id: 'g-6', lever: 'Collabs', weeklyTarget: 2, thisWeek: 1, status: 'on-track', notes: 'Follow up with creators' },
  ],
  categoryEntries: [],
};

const key = 'amalgam-base44';

function getStore(): EntityMap {
  const raw = localStorage.getItem(key);
  if (!raw) {
    localStorage.setItem(key, JSON.stringify(seeds));
    return seeds;
  }
  return JSON.parse(raw) as EntityMap;
}

function setStore(next: EntityMap) {
  localStorage.setItem(key, JSON.stringify(next));
}

export const Base44 = {
  list<K extends keyof EntityMap>(entity: K): EntityMap[K] {
    return getStore()[entity];
  },
  upsert<K extends keyof EntityMap>(entity: K, record: EntityMap[K][number]) {
    const data = getStore();
    const current = data[entity] as Array<{ id: string }>;
    const index = current.findIndex((item) => item.id === (record as { id: string }).id);
    if (index === -1) current.push(record as { id: string });
    else current[index] = record as { id: string };
    setStore(data);
  },
  insert<K extends keyof EntityMap>(entity: K, record: EntityMap[K][number]) {
    const data = getStore();
    (data[entity] as Array<{ id: string }>).unshift(record as { id: string });
    setStore(data);
  },
};
