# Design System Strategy: Hydro-Precision Industrialism

## 1. Overview & Creative North Star
The "Creative North Star" for this design system is **Hydro-Precision Industrialism**. 

This system rejects the "friendly SaaS" aesthetic in favor of a high-performance, technical vibe that mirrors the raw power and surgical precision of industrial pressure washing. We are moving away from the "template" look by utilizing heavy tonal layering, high-contrast typography, and intentional asymmetry. The goal is to make the user feel the force of the water and the clarity of the result.

The layout should feel "machined"—everything is deliberate, high-contrast, and energetic. We use overlapping elements and "leak-through" gradients to simulate the movement of water against dark, architectural surfaces.

---

## 2. Colors & Atmospheric Depth
This system is built on a foundation of deep, obsidian voids and high-energy luminescent accents.

*   **Primary (#3ADFFA):** Use this for core actions. It represents the "electric" energy of high-pressure water.
*   **Secondary (#699CFF):** Use for secondary emphasis and depth.
*   **Neutral Foundation:** The background (`#080E1D`) and surface variants provide the "industrial" canvas.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for defining sections. Boundaries must be established through:
1.  **Tonal Shifts:** Placing a `surface-container-low` section against a `background` section.
2.  **Negative Space:** Using the spacing scale to create distinct visual groups.
3.  **Color Blocking:** Letting a full-bleed dark navy container terminate where the next section begins.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
*   **Base:** `surface-dim` or `background`.
*   **Elevated Elements:** Use `surface-container` to create a "lifted" feel.
*   **Nested Content:** If a card sits inside a section, the section should be `surface-container-low` and the card should be `surface-container-highest`. This creates depth without visual clutter.

### The "Glass & Gradient" Rule
To capture the "liquid" essence of the business, use Glassmorphism for floating elements (e.g., sticky headers or floating action buttons). 
*   **Effect:** Apply `surface` color at 60% opacity with a 12px-20px backdrop blur.
*   **Gradients:** CTAs and Hero accents should use a linear gradient from `primary` (#3ADFFA) to `primary-container` (#00CBE6) at a 135-degree angle to provide a "shimmer" effect.

---

## 3. Typography
We utilize a high-contrast pairing to balance technical precision with extreme readability.

*   **Display & Headlines (Space Grotesk):** This typeface provides a geometric, almost "engineered" feel. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to evoke a sense of compressed power.
*   **Body & Titles (Inter):** Inter provides a neutral, high-legibility counterpoint. It ensures that technical details and service descriptions feel professional and authoritative.
*   **Editorial Scaling:** Don't be afraid of "Heroic" type. A headline can span 80% of the viewport width to create an editorial, high-fashion-meets-industrial look.

---

## 4. Elevation & Depth
Depth is achieved through light and tone, never through heavy-handed shadows.

*   **The Layering Principle:** Stack `surface-container` tiers to create natural hierarchy. An "Active" card might move from `surface-container-low` to `surface-container-highest` on hover to simulate it physically moving toward the user.
*   **Ambient Shadows:** If a floating effect is required (like a modal), use a high-spread, low-opacity shadow. Use the `on-surface` color at 6% opacity with a 40px blur. This creates a natural "glow" rather than a dirty drop-shadow.
*   **The "Ghost Border" Fallback:** For input fields or containers requiring absolute definition, use the `outline-variant` token at 15% opacity. It should be felt, not seen.
*   **Signature Motif:** Use "Spray" gradients—subtle, radial blurs of `primary` or `secondary` colors in the background (at 5-10% opacity) to break up the dark background and add a sense of fluid movement.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary-container`. `rounded-md` (0.375rem). No border. Bold `label-md` text in `on-primary`.
*   **Secondary:** `surface-container-highest` background with a `primary` "Ghost Border" (15% opacity).
*   **Tertiary:** Transparent background, `primary` text, with a 2px underline that expands on hover.

### Cards & Lists
*   **Rule:** No dividers. Use 24px–32px of vertical padding to separate list items.
*   **Cards:** Use `surface-container-low`. On hover, transition to `surface-container-high` and apply a subtle `primary` inner-glow (1px blurred stroke at 20% opacity).

### Inputs
*   **State:** Background is `surface-container-lowest`. 
*   **Focus:** The "Ghost Border" transitions to 100% opacity `primary` color. Use `label-sm` for floating labels to maintain the technical, "instrument panel" feel.

### Hydro-Gauges (Custom Component)
Instead of standard progress bars, use "Pressure Gauges" for data visualization (e.g., project completion or power levels). These should be thin, circular rings using `primary` for the fill and `surface-container-highest` for the track, evoking a professional pressure dial.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. A headline might be left-aligned while the supporting body text is offset to a center-right column.
*   **Do** lean into the "Dark Mode" exclusively. This system is designed for high-contrast environments.
*   **Do** use `primary` sparingly as a "laser-sight" for the user's eye.

### Don't:
*   **Don't** use 100% white (#FFFFFF). Use `on-surface` (#E0E5FB) to maintain the cool, navy-tinted atmosphere.
*   **Don't** use rounded corners larger than `xl` (0.75rem) for functional containers. We want "industrial," not "bubble-gum."
*   **Don't** use standard "Success Green" for status. Use `primary` (Cyan) for success to keep the brand palette pure. Use `error` (#FF716C) only when a hard stop is required.