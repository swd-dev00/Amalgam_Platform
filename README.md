# Amalgam Streaming Platform

PulseStream (Amalgam) is a next-generation live streaming creator operating system designed as resilient creator infrastructure: a unified system for streaming, production, interaction, growth, and distribution.

## Ownership

PulseStream (Amalgam) is owned and developed by:

**Sierra N. Warren**  
**Sierra Warren Developments, LLC**

All core intellectual property, infrastructure design, and system architecture are attributed to Sierra Warren Developments, LLC.

## Creator OS Prototype (React + TypeScript + Tailwind)

This repository now includes a Creator-first dashboard prototype implementing the core flows:

- Dashboard command center with live status indicators, quick metrics, activity feed, pre-flight checklist, and Go Live action.
- Stream Pipeline lifecycle stages (`Idea → Recording → Editing → Published`) and platform targets (Twitch, YouTube, Kick, TikTok).
- Clip Pipeline workflow with posting state and ROI-oriented metrics.
- Growth System tracking all six growth levers and weekly progress notes.
- Category Arbitrage calculations with viewer/streamer ratio and tier verdicting.
- Raid Network roster and reciprocity history view.
- AI Bestie panel with tone selector (`Hype`, `Sassy`, `Chill`, `Dramatic`, `Pro`) and saved scripts library.
- Architecture status page with Shadow Mode / Safe Mode / Modular Engine health and pre-flight checklist.
- Settings for Starter vs Pro mode, Safe Mode Live, Shadow Mode, and target platform devices.

### Data persistence

The app uses a lightweight **Base44-style entity layer** in `src/data/base44.ts` that persists entities to `localStorage`:

- `StreamProject`
- `Clip`
- `RaidPartner`
- `Script`
- `GrowthEntry`
- `CategoryEntry`

## Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## License

This project is licensed under the Apache License 2.0.

Copyright (c) 2026 Sierra N. Warren  
Sierra Warren Developments, LLC

See [LICENSE](./LICENSE) for full details.
