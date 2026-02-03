Here is a comprehensive project status and roadmap, formatted as a Markdown file for your documentation. It preserves the "Staged Planning" vision and outlines exactly how the "Smart Engine" evolves into a full "Planning Workspace."

📖 The Living Cookbook: Project Blueprint
🟢 Phase 1 & 2: The Core Engine (Completed)
The "Brain" is functional. The app understands data, history, and scoring.

Markdown Data Layer: Automatic loading and parsing of .md files via gray-matter.

The Intelligence (Scoring Engine): * Staleness: Calculates days since last cooked to prioritize "forgotten" recipes.

Variety: Penalizes specific proteins to ensure diet diversity.

The Component System: isComponent logic to separate sauces/sides from main meals in the logic.

Local Memory: localStorage integration for persistent history and "I Made This" tracking.

UI Foundation: High-contrast dark mode, fuzzy search (fuse.js), and recipe detail modals.

🟡 Phase 3: The Planning Workspace (Current Objective)
Transitioning from a "Random Spinner" to a "Staged Draft" curation workflow.

Step 1: Two-Column UI
Left Column (The Suggestion Pool): A staging area for top-scored recipe cards.

Right Column (The Weekly Calendar): A Monday–Sunday grid for scheduling.

Step 2: Staged Category Rolling
Implementation of "Category Buttons" (e.g., Roll 5 Dinners) that generate a specific suggestion pool rather than just one winner.

The "Refresh" Logic: Each card in the pool gets a "Swap" button to pull the next best-scored recipe from the engine.

Step 3: Interaction & Scheduling
Selection: Functionality to move recipes from the "Pool" into a specific "Calendar Slot."

Draft Persistence: Saving the current week's plan to localStorage without officially committing it to history yet.

🔵 Phase 4: Kitchen Execution & UX
Optimizing the experience for the actual moment of cooking.

Step 1: Focus Mode
"Today's Recipe" shortcut: A one-click path to the currently scheduled meal.

Kitchen View: High-readability layout (large fonts, high contrast) for instructions.

Step 2: Utility & Hardware
Interactive Ingredients: Clickable checkboxes to track prep progress.

Wake Lock API: Preventing phone screens from dimming while cooking.

Scaling Logic: Simple 0.5x or 2x multiplier for ingredient quantities.

🔴 Phase 5: Logistics & Cloud Sync
Closing the loop on shopping and multi-device support.

Step 1: Aggregated Shopping List
Logic to scan all recipes in the current Weekly Plan and generate a combined list of ingredients.

Categorization of items (Produce, Pantry, Meat, etc.).

Step 2: The Final Commit
Marking a planned meal as "Cooked."

This removes it from the Calendar and officially records it in History, updating the Scoring Engine for future weeks.

Step 3: Cloud Persistence (The Original Goal)
Transitioning from localStorage to a GitHub-backed sync (e.g., GitHub API or a hidden Gist/Issue) so the plan created on a PC is available on a mobile device in the kitchen.