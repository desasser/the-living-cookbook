import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { PlannerView } from '../PlannerView';
import type { Recipe } from '../../types/recipe';

const sampleRecipes: Recipe[] = [
  {
    id: 'r1',
    title: 'Toast',
    source: 'Test',
    meal: ['Breakfast'],
    isComponent: false,
    effort: 'Low',
    season: ['All-year'],
    protein: 'Other',
    cost: 'Low',
    kitchenImpact: 'Low',
    repeatability: 'High',
    microwavableLeftovers: false,
    ingredients: [],
    instructions: '',
    tags: ['easy'],
  },
  {
    id: 'r2',
    title: 'Salad',
    source: 'Test',
    meal: ['Lunch', 'Dinner'],
    isComponent: false,
    effort: 'Low',
    season: ['All-year'],
    protein: 'Vegetarian',
    cost: 'Low',
    kitchenImpact: 'Low',
    repeatability: 'High',
    microwavableLeftovers: false,
    ingredients: [],
    instructions: '',
    tags: ['veg'],
  },
  {
    id: 'r3',
    title: 'Steak',
    source: 'Test',
    meal: ['Dinner'],
    isComponent: false,
    effort: 'High',
    season: ['All-year'],
    protein: 'Beef',
    cost: 'High',
    kitchenImpact: 'High',
    repeatability: 'Medium',
    microwavableLeftovers: false,
    ingredients: [],
    instructions: '',
    tags: ['meat'],
  },
];

beforeEach(() => localStorage.clear());

describe('PlannerView smoke', () => {
  it('rolls suggestions, assigns, removes, undoes and persists draft', async () => {
    const user = userEvent.setup();
    render(<PlannerView recipes={sampleRecipes} />);

    // Roll dinner suggestions
    await user.click(screen.getByText('Dinner'));

    // Wait for suggestions to show up and pick the first one
    const suggestions = await screen.findAllByText(/Steak|Salad/);
    const suggestionText = suggestions[0].textContent || '';

    // Assign first suggestion to Monday via the assign button
    const assignButtons = await screen.findAllByTitle('Assign to day');
    await user.click(assignButtons[0]);

    // Monday should show the assigned recipe title (wait for update)
    const mondaySlotEl = screen.getByRole('heading', { name: 'Monday' }).closest('.day-slot');
    if (!mondaySlotEl) throw new Error('Monday slot not found');
    const mondaySlot = mondaySlotEl as HTMLElement;
    await within(mondaySlot).findByText(new RegExp(suggestionText, 'i'));
    // Remove it
    const removeBtn = within(mondaySlot).getByTitle('Remove recipe');
    await user.click(removeBtn);

    // Toast appears with Undo; click it
    expect(await screen.findByText(/Returned/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Undo/i }));

    // Monday slot restored (wait for update)
    const mondaySlotAfterEl = screen.getByRole('heading', { name: 'Monday' }).closest('.day-slot');
    if (!mondaySlotAfterEl) throw new Error('Monday slot not found after undo');
    const mondaySlotAfter = mondaySlotAfterEl as HTMLElement;
    await within(mondaySlotAfter).findByText(new RegExp(suggestionText, 'i'));

    // localStorage has draft (at least Monday is non-null)
    const draft = JSON.parse(localStorage.getItem('weeklyPlanDraft') || '{}');
    expect(Object.values(draft).some(v => v !== null)).toBeTruthy();
  });

  it('commits the plan and prevents edits, persisting the locked state', async () => {
    const user = userEvent.setup();
    render(<PlannerView recipes={sampleRecipes} />);

    // Roll and assign one suggestion
    await user.click(screen.getByText('Dinner'));
    const suggestions = await screen.findAllByText(/Steak|Salad/);
    const suggestionText = suggestions[0].textContent || '';
    const assignButtons = await screen.findAllByTitle('Assign to day');
    await user.click(assignButtons[0]);
    const mondaySlotEl = screen.getByRole('heading', { name: 'Monday' }).closest('.day-slot');
    if (!mondaySlotEl) throw new Error('Monday slot not found');
    const mondaySlot = mondaySlotEl as HTMLElement;
    await within(mondaySlot).findByText(new RegExp(suggestionText, 'i'));

    // Commit the plan (confirm) — use typed assignment to avoid `any`
    const origConfirm: typeof globalThis.confirm = globalThis.confirm;
    globalThis.confirm = (() => true) as typeof globalThis.confirm;
    await user.click(screen.getByRole('button', { name: /Commit Plan/i }));
    globalThis.confirm = origConfirm;

    // UI should indicate committed and block actions
    expect(screen.getByText(/Committed/)).toBeInTheDocument();

    // Assign buttons should be disabled
  const assignButtonsAfter = screen.getAllByTitle('Assign to day') as HTMLButtonElement[];
  assignButtonsAfter.forEach(btn => expect(btn).toBeDisabled());

  // Remove button in Monday should be disabled
  const removeBtn = within(mondaySlot).getByTitle('Remove recipe') as HTMLButtonElement;
    expect(removeBtn).toBeDisabled();

    // Persisted committed payload should be present in localStorage
    const committedRaw = localStorage.getItem('weeklyPlanCommitted');
    expect(committedRaw).toBeTruthy();
    const committed = JSON.parse(committedRaw || '{}');
    expect(committed.weekLocked).toBe(true);
    expect(committed.plan && committed.plan.Monday).toBeTruthy();

    // Trying to click assign should not change Monday assignment (still the same title)
    const anotherAssign = assignButtonsAfter.find(b => !b.disabled);
    if (anotherAssign) {
      await user.click(anotherAssign);
      await within(mondaySlot).findByText(new RegExp(suggestionText, 'i'));
    }

    // Now uncommit (confirm)
    const origConfirm2: typeof globalThis.confirm = globalThis.confirm;
    globalThis.confirm = (() => true) as typeof globalThis.confirm;
    await user.click(screen.getByRole('button', { name: /Uncommit/i }));
    globalThis.confirm = origConfirm2;

    // Committed badge should be gone and localStorage cleared
    expect(screen.queryByText(/Committed/)).toBeNull();
    expect(localStorage.getItem('weeklyPlanCommitted')).toBeNull();

    // Assign buttons should now be enabled again (at least one)
    const assignButtonsAfterUn = screen.getAllByTitle('Assign to day') as HTMLButtonElement[];
    expect(assignButtonsAfterUn.some(b => !b.disabled)).toBe(true);
  });
});
