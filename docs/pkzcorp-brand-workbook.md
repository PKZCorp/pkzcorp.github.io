# PKZCorp Brand Workbook

**Purpose:** single reference document for the visual identity of PKZCorp. Fill this out before finalizing the site design system.

**How to use this file:**
- The designer fills the fields below.
- The dev team uses this as the source of truth for colors, typography, icons, imagery, motion, and design tokens.
- If a decision changes later, update this file first.

---

## 1. Brand Overview

### Brand summary
- **Company name:** PKZCorp
- **Core idea / positioning:** A creative tech collective that blends software development with artistic expression. Known for bold, multidisciplinary work.
- **Brand adjectives:** creative, bold, collaborative, modern, expressive, technical, artistic
- **What the logo means:** A rose with five colored petals, each representing one member. The white center is the collective unity; the five petals are the individual voices. Black background with white circle suggests contrast, clarity, and focus.
- **What must never change:** The five petal colors (orange, red, green, purple, blue) and their meaning of member identity. The white center and black background. The rose shape as the core symbol.

### Logo assets
- **Primary logo file:** `assets/logo-primary.svg` (rose on transparent, or on white)
- **Secondary / stacked version:** `assets/logo-stacked.svg` (vertical layout for narrow spaces)
- **Monochrome version:** `assets/logo-mono-black.svg` and `assets/logo-mono-white.svg` (for restricted color situations)
- **Inverse version for dark backgrounds:** `assets/logo-inverse.svg` (white petals, if needed)
- **Icon / mark version for favicon and small sizes:** `assets/logo-mark.svg` (rose center only, 1:1 square, for favicon 32×32, 192×192, app icons)
- **Safe area / clear space rule:** Keep a margin equal to the rose diameter around all sides when placing the logo next to text or other elements.
- **Minimum size for digital use:** 64×64 pixels for the full logo; 32×32 pixels for the mark only.

### Notes about the existing rose logo
- Middle center is white.
- Five petals use different colors: orange, red, green, purple, blue.
- Each petal represents a member.
- Background is black.
- Outer ring is white.

---

## 2. Color System

### 2.1 Brand colors
Fill the exact values below.

| Token name           | Color role                | Hex         | RGB                | Usage notes                       |
| -------------------- | ------------------------- | ----------- | ------------------ | --------------------------------- |
| `color.brand.orange` | Petal / member accent     | _to define_ |                    | Member 1; primary accent fallback |
| `color.brand.red`    | Petal / member accent     | _to define_ |                    | Member 2                          |
| `color.brand.green`  | Petal / member accent     | _to define_ |                    | Member 3                          |
| `color.brand.purple` | Petal / member accent     | _to define_ |                    | Member 4                          |
| `color.brand.blue`   | Petal / member accent     | _to define_ |                    | Member 5                          |
| `color.brand.black`  | Main background reference | #0a0a0a     | rgb(10, 10, 10)    | Near black; suggested dark bg     |
| `color.brand.white`  | Main light reference      | #ffffff     | rgb(255, 255, 255) | Pure white; text on dark          |

### 2.2 Semantic UI colors
These should work across light and dark mode.

| Token name              | Light mode       | Dark mode        | Usage notes                                             |
| ----------------------- | ---------------- | ---------------- | ------------------------------------------------------- |
| `color.bg`              | #ffffff          | #0a0a0a          | Page background                                         |
| `color.surface`         | #f5f5f5          | #1a1a1a          | Default cards / panels                                  |
| `color.surfaceElevated` | #eeeeee          | #242424          | Popovers / dialogs                                      |
| `color.textPrimary`     | #1a1a1a          | #ffffff          | Main text                                               |
| `color.textSecondary`   | #4a4a4a          | #b0b0b0          | Supporting text                                         |
| `color.textMuted`       | #7a7a7a          | #707070          | Helper text / metadata                                  |
| `color.border`          | #e0e0e0          | #333333          | Dividers / outlines                                     |
| `color.accent`          | _pick one petal_ | _pick one petal_ | Main CTA accent; suggest orange or primary member color |
| `color.accentHover`     | _darken by 10%_  | _lighten by 10%_ | Hover state for accent actions                          |
| `color.success`         | #10b981          | #34d399          | Success state                                           |
| `color.warning`         | #f59e0b          | #fbbf24          | Warning state                                           |
| `color.error`           | #ef4444          | #f87171          | Error state                                             |
| `color.info`            | #3b82f6          | #60a5fa          | Informational state                                     |

### 2.3 Member / category mapping
Decide how the five petal colors are assigned.

| Petal color | Member or meaning  | Notes                                |
| ----------- | ------------------ | ------------------------------------ |
| Orange      | _Assign to member_ | Category badge 1, member highlight 1 |
| Red         | _Assign to member_ | Category badge 2, member highlight 2 |
| Green       | _Assign to member_ | Category badge 3, member highlight 3 |
| Purple      | _Assign to member_ | Category badge 4, member highlight 4 |
| Blue        | _Assign to member_ | Category badge 5, member highlight 5 |

### 2.4 Background strategy
- **Default theme background:** #0a0a0a (near black, dark mode first)
- **Light mode background:** #ffffff (pure white, when toggled)
- **Surface contrast strategy:** Use subtle gray (dark mode: #1a1a1a, light mode: #f5f5f5) to create card/panel separation without heavy contrast. Leave the petal colors for accents and member identity.
- **Gradient usage, if any:** Subtle radial gradients may be used on hero sections or backgrounds, but must remain subtle and not distract from content. Consider using the petal colors in duotone or multi-stop gradients for visual richness.
- **Noise / texture usage, if any:** Optional subtle texture (e.g., 1–2% opacity grain) on dark backgrounds to reduce flatness. Avoid patterns; keep textures minimal and organic.

---

## 3. Typography

### 3.1 Font choices
| Role              | Font name                | Source       | Notes                                 |
| ----------------- | ------------------------ | ------------ | ------------------------------------- |
| Heading / display | Inter (700 weight)       | Google Fonts | Modern, geometric, strong personality |
| Body              | IBM Plex Sans (400, 500) | Google Fonts | Highly legible, professional, calm    |
| Mono / code       | JetBrains Mono           | Google Fonts | Technical work; clean monospace       |

### 3.2 Type scale
| Token            | Size            | Line height | Weight | Usage                     |
| ---------------- | --------------- | ----------- | ------ | ------------------------- |
| `text.display`   | 48px / 3rem     | 1.2         | 700    | Hero / big statements     |
| `text.h1`        | 36px / 2.25rem  | 1.3         | 700    | Page titles               |
| `text.h2`        | 28px / 1.75rem  | 1.4         | 700    | Section titles            |
| `text.h3`        | 22px / 1.375rem | 1.4         | 600    | Card titles / subsections |
| `text.body`      | 16px / 1rem     | 1.6         | 400    | Default copy              |
| `text.bodySmall` | 14px / 0.875rem | 1.5         | 400    | Supporting copy           |
| `text.caption`   | 12px / 0.75rem  | 1.4         | 500    | Metadata / timestamps     |
| `text.button`    | 14px / 0.875rem | 1.5         | 600    | Buttons / controls        |

### 3.3 Typography rules
- **Headings casing:** Title Case for major headings (H1, H2); sentence case for component titles and labels.
- **Letter spacing rules:** Default: 0. Headlines may use -0.02em for tighter tracking at display sizes.
- **Line length target:** 50–75 characters for body text (aim for comfortable reading).
- **Maximum paragraph width:** 650px at default 16px font size.
- **Fallback fonts:** Inter → -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif. IBM Plex Sans → same fallback. JetBrains Mono → monospace stack.

---

## 4. Icons

### 4.1 Icon style
- **Icon family:** Lucide Icons (lucide.dev)
- **Style:** Outline (all icons use strokes, not fills, for consistency)
- **Stroke width:** 2px (Lucide default)
- **Corner style:** Rounded corners (consistent with Lucide defaults)
- **Default size(s):** 24×24px for navigation / buttons; 20×20px for inline; 32×32px for hero / section headers.
- **Filled state rules:** Never fill outline icons. If a filled icon is needed, use a petal color at reduced opacity (20–30%) behind the outline icon instead.

### 4.2 Icon usage
| Area               | Icon style notes                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| Navigation         | Outline icons, 24×24px, inherit text color. Hover: petal accent color.                                     |
| Buttons            | Outline icons, 20×20px, inline with text if needed.                                                        |
| Status badges      | Outline icons, 16×20px, inherit badge color or use petal accent.                                           |
| Social links       | Outline icons, 24×24px, petal color mapping preferred (orange for one social, etc.) or default text color. |
| Empty states       | Outline icons, 48×48px, `color.textMuted` by default; may use petal accent for playfulness.                |
| Favicon / app icon | Logo mark only, no additional icons needed.                                                                |

### 4.3 Custom icon needs
- **Need custom icons?** No, Lucide is comprehensive enough for this project. Revisit if specific creative needs arise.
- **If yes, list them:** N/A
- **Should custom icons echo the rose shape?** N/A, but if needed later: consider radial or petal-inspired shapes for custom icons, e.g., a circular icon with 5 segments.
- **Should icons vary by member color?** Social and member-specific links can use petal colors, but UI icons should remain neutral (text color or subtle contrast).

---

## 5. Imagery

### 5.1 Image style
- **Primary image type:** Screenshots + raw work samples (e.g., gameplay footage, album art, code, sketches). Mix media to show the breadth of the collective.
- **Preferred framing:** Let images breathe; use subtle shadows or thin borders, not heavy frames.
- **Preferred aspect ratios:** 16:9 for project covers; 1:1 for member avatars and social cards; 3:2 for gallery images.
- **Border / frame treatment:** Subtle border (1–2px, `color.border`); optional thin drop shadow (4px, 8% opacity). Avoid thick frames or gradients on images themselves.
- **Shadow / depth treatment:** Soft shadow (0 4px 12px rgba(0, 0, 0, 0.15) on dark mode; 0 2px 8px rgba(0, 0, 0, 0.1) on light mode). Keep depth minimal; don't over-elevate images.
- **Color grading rules:** Keep images natural. Optional: apply a subtle duotone or color shift using a petal color at 5–10% opacity for thematic cohesion, especially on project thumbnails.

### 5.2 Asset rules
| Asset type         | Format                | Size target                            | Notes                                                                               |
| ------------------ | --------------------- | -------------------------------------- | ----------------------------------------------------------------------------------- |
| Avatar             | WebP (fallback: PNG)  | 400×400px minimum; ~100–150 KB         | Square, center-framed. Can include soft background or crop close on face / subject. |
| Project thumbnail  | WebP (fallback: JPEG) | 16:9, e.g., 800×450px; <200 KB         | Keep legible at small sizes. Avoid text-heavy images.                               |
| Jam cover          | WebP (fallback: PNG)  | 1200×600px; <300 KB                    | Hero-sized, allow text overlay. Consider petal color themes.                        |
| Social share image | PNG or WebP           | 1200×630px; <300 KB                    | Open Graph / Twitter Card. Include logo, headline, one accent color.                |
| Favicon            | PNG or ICO            | 32×32px, 64×64px, 192×192px, 512×512px | Use logo mark; export clean and sharp at small sizes.                               |

### 5.3 Background and decoration
- **Use of petal motif outside the logo:** Reserve the full rose logo for brand marks, headers, footers, and hero sections. Avoid repeating the full logo as decoration. Simple circular accents or arc / petal shapes may be used sparingly in backgrounds (opacity 3–5%) or as section dividers.
- **Pattern or texture rules:** Keep patterns minimal. Subtle grain (1–2% opacity) on dark backgrounds is acceptable. No busy patterns; clarity > decoration.
- **When decorative elements are allowed:** Hero sections, section transitions, footer, empty states, loading animations.
- **When decorative elements are forbidden:** Card bodies, text-heavy sections, data tables, forms, navigation.

---

## 6. Motion

### 6.1 Motion principles
- **Motion personality:** Subtle, smooth, purposeful. Not playful or bouncy; avoid exaggerated easing. Motion supports clarity and flow, not entertainment.
- **Should motion feel subtle or expressive?** Subtle. Keep most animations under 400ms. Reserve longer durations for page transitions or loading states.
- **Preferred easing style:** `ease-out` for enter/reveal animations (fast start, slow end). `ease-in-out` for general transitions. Avoid `ease-in` or `linear` for most interactions.
- **Preferred transition duration range:** 150–300ms for hover/focus states; 300–500ms for page transitions and Intersection Observer reveals.

### 6.2 Motion tokens
| Token              | Value                        | Usage                                                    |
| ------------------ | ---------------------------- | -------------------------------------------------------- |
| `motion.fast`      | 150ms                        | Small UI feedback (hover, focus, toggles)                |
| `motion.normal`    | 250ms                        | Standard transitions (scale, opacity, color on elements) |
| `motion.slow`      | 400ms                        | Page / section transitions, entrance animations          |
| `motion.easeInOut` | cubic-bezier(0.4, 0, 0.2, 1) | General transitions                                      |
| `motion.easeOut`   | cubic-bezier(0, 0, 0.2, 1)   | Enter / appear animations                                |

### 6.3 Animation rules
- **Allowed animations:** Fade-in / fade-out; scale (0.95 → 1); slide from top/bottom on page transitions; color changes on hover/focus; Intersection Observer reveals (fade + subtle scale).
- **Disallowed animations:** Bounce, elastic easing; rapid spinning or flashing; parallax scrolling (disorienting); multiple simultaneous animations on the same element (keep it simple).
- **Intersection Observer usage:** Lazy-load images and cards as they enter the viewport. Fade and slight scale-up (e.g., scale 0.9 → 1) over 400ms. Use sparingly to avoid motion sickness.
- **Reduced-motion fallback behavior:** Respect `prefers-reduced-motion: reduce`. When detected, skip all animations; show elements instantly or with opacity only (no scale/transform). No parallax or scroll-trigger effects.

---

## 7. Layout Tokens

### 7.1 Spacing
| Token       | Value | Notes                                             |
| ----------- | ----- | ------------------------------------------------- |
| `space.xs`  | 4px   | Tight spacing; rarely used.                       |
| `space.sm`  | 8px   | Icon-to-text, small gaps.                         |
| `space.md`  | 16px  | Default space between elements, padding in cards. |
| `space.lg`  | 24px  | Section padding, major gaps.                      |
| `space.xl`  | 32px  | Section to section, large blocks.                 |
| `space.2xl` | 48px  | Hero sections, large gaps between major sections. |

### 7.2 Radius and borders
| Token            | Value                    | Notes                                             |
| ---------------- | ------------------------ | ------------------------------------------------- |
| `radius.sm`      | 4px                      | Minimal rounding; input fields, small UI elements |
| `radius.md`      | 8px                      | Default card radius, buttons                      |
| `radius.lg`      | 12px                     | Large cards, modals                               |
| `border.default` | 1px solid `color.border` | Dividers, card outlines                           |

### 7.3 Shadow and elevation
| Token               | Value                           | Notes                                |
| ------------------- | ------------------------------- | ------------------------------------ |
| `shadow.sm`         | 0 1px 2px rgba(0, 0, 0, 0.05)   | Subtle, almost invisible             |
| `shadow.md`         | 0 4px 6px rgba(0, 0, 0, 0.1)    | Default shadow; cards, images        |
| `shadow.lg`         | 0 10px 25px rgba(0, 0, 0, 0.15) | Elevated surfaces, modals            |
| `elevation.surface` | shadow.md                       | Cards, panels on the default surface |

### 7.4 Z-index
| Token       | Value | Notes                                |
| ----------- | ----- | ------------------------------------ |
| `z.base`    | 0     | Default stacking                     |
| `z.sticky`  | 10    | Sticky headers / navbars             |
| `z.overlay` | 20    | Overlays, non-modal (e.g., popovers) |
| `z.modal`   | 100   | Modal dialogs, backdrops             |

---

## 8. Components

### 8.1 Core component styling rules
| Component       | Notes                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button          | Primary buttons use `color.accent` background, white text. Secondary buttons use `color.border` background with `color.textPrimary` text. Hover: lighten/darken by 10%. Radius: `radius.md`. Padding: 12px 24px. |
| Card            | Background: `color.surface`. Border: 1px `color.border`. Radius: `radius.md`. Padding: 24px. Shadow: `shadow.md`. Hover: subtle shadow lift (`shadow.lg`), no color change.                                      |
| Badge / tag     | Small background pill using petal color at 15% opacity, text in petal color at full opacity. Radius: `radius.lg` (pill). Padding: 6px 12px.                                                                      |
| Input           | Background: `color.surfaceElevated`. Border: 1px `color.border`. Focus: border changes to `color.accent` (2px). Radius: `radius.sm`. Padding: 10px 12px.                                                         |
| Select / filter | Styled like input. Dropdown arrow inherits text color. Hover: border color lightens.                                                                                                                             |
| Navbar          | Background: `color.bg` with subtle shadow at bottom. Logo or brand mark on left. Nav links inherit text color; hover: `color.accent`. Dark mode by default.                                                      |
| Footer          | Background: `color.surface`. Border-top: 1px `color.border`. Text: `color.textSecondary`. Links: inherit, hover to `color.accent`.                                                                               |
| Modal / dialog  | Background: `color.surfaceElevated`. Border radius: `radius.lg`. Shadow: `shadow.lg`. Padding: 32px. Backdrop: 0, 0, 0, 0.5 (semi-transparent black).                                                            |

### 8.2 States
- **Hover state style:** Subtle color shift (lighten/darken 5–10%) or shadow lift. No scale or spin. For text/links: inherit text color, underline or fade in accent color.
- **Focus state style:** Outline in `color.accent`, 2–3px thick, offset 2px outside the element boundary. Visible at all times (necessary for keyboard nav). Respect `focus-visible` to hide focus ring for mouse users if desired.
- **Active state style:** Darker background or `color.accent` text. Use sparingly; reserve for selected filters or nav items.
- **Disabled state style:** 50% opacity on element. Text: `color.textMuted`. Cursor: `not-allowed`.
- **Selected state style:** Badge / checkmark indicator + subtle background tint using petal color at 10% opacity, or simple outline in `color.accent`.

---

## 9. Brand Assets

### 9.1 Deliverables
- [ ] Logo primary
- [ ] Logo inverse
- [ ] Logo monochrome
- [ ] Favicon
- [ ] App icon / social avatar
- [ ] Social banner / header image
- [ ] Pattern or texture asset
- [ ] Illustration style reference
- [ ] Palette reference sheet
- [ ] Typography reference sheet

### 9.2 Export specs
- **Primary format for editable source:** Figma (collaborative, version-controlled) or Adobe XD. Ensure all colors are named and exported as a shared color library.
- **Vector export format:** SVG (for logos, icons) with proper viewBox and fill attributes to allow CSS color overrides.
- **Raster export format:** PNG (for favicon, app icons, textures); WebP (for preview images in brand guidelines).
- **Favicon sizes needed:** 32×32, 64×64, 192×192, 512×512 (PNG). Also export .ico for older browsers.
- **Social image size needed:** 1200×630px (Open Graph / Twitter Card standard). Export as PNG or WebP.

---

## 10. Final Decisions

### 10.1 Approved choices
- **Main accent:** _One of the petal colors (e.g., orange); to be selected by designer_
- **Background:** #0a0a0a (dark mode first)
- **Text primary:** #ffffff
- **Text secondary:** #b0b0b0
- **Palette structure:** Dark mode foundation + light mode support. Petal colors reserved for member identity and category badges.
- **Typography:** Inter (display) + IBM Plex Sans (body) + JetBrains Mono (code). Sourced from Google Fonts.
- **Icon set:** Lucide Icons, outline style, 2px stroke.
- **Motion style:** Subtle, ease-out for enters, ease-in-out for general transitions. 150–400ms durations.
- **Brand pattern usage:** Minimal; subtle grain on dark backgrounds, arc motifs in hero only. Full rose logo reserved for marks and headers.

### 10.2 Open items
- **What still needs a decision:**
  - Exact hex values for the five petal colors (orange, red, green, purple, blue)
  - Exact primary accent color choice (which petal)
  - Member-to-color mapping (which member represents each petal)
  - Visual style for project screenshots (duotone treatment: yes/no?)
  - Custom social banner design (layout, text placement)
- **Who decides:** Designer + team leads
- **Deadline:** Before starting Phase 1 (site setup)

---

- Share this workbook with the dev team once it's finalized so they can implement the tokens consistently in SCSS/CSS.
- Consider exporting a Figma Library or design tokens JSON file for automated sync between design and code.
## 11. Notes

- Keep this file updated whenever the visual system changes.
- Use it as the reference before making UI or asset decisions.
- If a detail is missing, add it here instead of deciding per page.
