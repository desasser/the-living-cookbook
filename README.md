# The Living Cookbook 🥗

## Goal

The Living Cookbook is a small, local-first meal planning app that helps you discover, stage, and schedule recipes for the week. It provides a suggestion pool (Roll 5 by category), per-card refresh, drag-and-drop scheduling into a Monday–Sunday grid, undoable actions, and draft persistence.

## Built with / Methods

- **UI:** React + TypeScript with Vite for fast dev experience
- **Scoring engine:** Custom scoring logic to rank recipes by recency, variety, and effort
- **Search:** Fuse.js fuzzy search for quick recipe lookup
- **Persistence:** localStorage for weekly-plan drafts
- **Testing:** Vitest + Testing Library (unit and smoke tests)
- **Styling:** Plain CSS with a dark-first theme and component-level styles

## Run locally

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the dev server

   ```bash
   npm run dev
   ```

3. Run tests

   ```bash
   npm test
   ```

Notes:
- A smoke test for the Planner flow is located at `src/components/__tests__/PlannerView.smoke.test.tsx`.
- Tests run in a headless DOM environment (configured via `vitest.config.ts`).

## Contribute

TODO

## Project TODO / Roadmap ✅

Use this checklist to track work that needs completing. Items will be checked off and removed as they are finished.

- [ ] Add unit tests for core logic: scoring, rolling, refresh, assign, clear
- [ ] Add GitHub Actions to run tests and lint on PRs
- [ ] Add integration/E2E tests for drag-and-drop and keyboard flows
- [ ] Implement "Mark Cooked" flow (commit meal to history and update scoring)

  Commit Bridge — locking a plan and keeping scoring consistent:
  - [ ] Add a "Commit Plan" button that locks the week (finalizes assignments and prevents accidental edits)
  - [ ] Scoring Sync: Treat "Planned" items as "Coming Soon" so they are excluded from suggestion rolls while planned

- [ ] Add shopping-list aggregation from weekly plan
- [ ] Create a `CONTRIBUTING.md` with test and PR guidance
- [ ] Accessibility review and keyboard/ARIA improvements
- [ ] Improve mobile/kitchen view (large fonts, wake-lock integration)
- [ ] Prototype cloud sync (GitHub Gist / simple backend)

> Note: This section will be maintained by the project maintainers and the assistant; remove or check items as they are completed.


