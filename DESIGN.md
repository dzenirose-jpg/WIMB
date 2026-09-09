# WIMB Design Instructions

## Purpose

This document records the approved and verified WIMB (Where is My Break?) design system for future implementation work. It preserves the current approved WIMB visual direction; it does not authorize redesigns, fixes, or new design decisions.

## Sources of truth

1. The current approved browser implementation is the primary source of truth for WIMB visual design.
2. Do not use old Figma screens for visual comparison unless the user explicitly provides and identifies a specific frame as still approved.
3. The supplied Figma color-variable screenshots are the source of truth for the Orange, Turquoise, Purple, and Gray palettes below.
4. The typography rules in this document are approved.
5. Legacy “Soft Reset” screens and styles are not part of the approved WIMB design system.
6. When two current implementations conflict, do not choose one automatically. Treat the conflict as unresolved until the user approves the correct version.

## Typography

- Use **Lora** for headlines, headings, and card titles.
- Use **DM Sans** for body text, supporting text, buttons, labels, inputs, navigation, captions, and metadata.
- Different heading levels may use different sizes when they communicate a clear hierarchy.
- Do not assume every Lora heading is 28px.
- The verified main screen headline token is Lora, weight 600, size 28px, line height 32px, and letter spacing 0.4px.
- Text with the same purpose and hierarchy must use the same font family, size, weight, line height, letter spacing, and color.
- Do not use Georgia or introduce additional font families.
- Typography values not yet confirmed are **pending**. Do not invent them.

### Pending typography tokens

Complete tokens for body text, labels, metadata, buttons, and navigation are not yet approved.

## Approved color palettes

### Orange

| Step | Value |
| --- | --- |
| 950 | `#280A02` |
| 900 | `#381105` |
| 800 | `#61230E` |
| 700 | `#8A3518` |
| 600 | `#B54823` |
| 500 | `#E35C2E` |
| 400 | `#F6795A` |
| 300 | `#F89F8F` |
| 200 | `#FAC2B9` |
| 100 | `#FCDFDB` |
| 50 | `#FEF1EF` |

### Turquoise

| Step | Value |
| --- | --- |
| 950 | `#061315` |
| 900 | `#0D2024` |
| 800 | `#1A373C` |
| 700 | `#2A5158` |
| 600 | `#3A6D76` |
| 500 | `#488590` |
| 400 | `#58A0AD` |
| 300 | `#66BAC9` |
| 200 | `#78D7E8` |
| 100 | `#B7EBF6` |
| 50 | `#DDF5FB` |

### Purple

| Step | Value |
| --- | --- |
| 950 | `#1B003C` |
| 900 | `#290055` |
| 800 | `#47008C` |
| 700 | `#6500C2` |
| 600 | `#8400FB` |
| 500 | `#9754FF` |
| 400 | `#A97DFF` |
| 300 | `#BEA2FF` |
| 200 | `#D1C0FF` |
| 100 | `#E9E1FF` |
| 50 | `#F3EEFF` |

### Gray

| Step | Value |
| --- | --- |
| 950 | `#181818` |
| 900 | `#282828` |
| 800 | `#494949` |
| 700 | `#6F6F6F` |
| 600 | `#969696` |
| 500 | `#C0C0C0` |
| 400 | `#CCCCCC` |
| 300 | `#DADADA` |
| 200 | `#E5E5E5` |
| 100 | `#F3F3F3` |
| 50 | `#F9F9F9` |

### Color usage rules

- Orange is currently used for primary actions and active emphasis.
- Dark Turquoise is currently used for the main atmospheric background.
- Purple and Turquoise are used for selected surfaces and atmospheric accents.
- Exact semantic assignments for every shade are not yet fully approved.
- Do not invent roles such as destructive, warning, success, hover, or disabled without verified evidence.
- Do not add legacy green or cream colors to the approved palette.

## Approved layout foundations

- Standard horizontal screen padding: **26px**
- Grid gutter: **20px**
- Standard top safe area: **70px**
- Standard bottom safe area: **35px**
- Main action height: **50px**
- Primary action buttons in the Reset flow remain fixed at the bottom of the screen, with a 35px bottom safe area.
- When a Reset screen places a mascot between a content box and the fixed action area, the mascot must adapt to the content height and remain centered in the available space without overlapping the text, box, or buttons.
- Journal bottom content space: **124px** when fixed navigation requires it

Connected screens must use consistent alignment, spacing, safe-area treatment, scrolling behavior, and responsive mobile behavior. Do not invent additional spacing tokens.

## Approved visual language

- Dark turquoise atmospheric backgrounds
- Controlled purple and orange accent lighting
- Liquid-glass surfaces
- Orange liquid-glass primary actions
- Turquoise-to-purple selected surfaces
- Organic background shapes and calm motion
- Rounded image and content surfaces
- The current WIMB logo and brand mark
- Clear, readable content remains more important than blur, glow, or decoration.
- Glass effects must remain controlled and must not make text or interactions difficult to read.
- Nature imagery and illustrations may support a Reset result and related moments, but must not be added arbitrarily to every screen.

## Components and consistency

Verified reusable WIMB component categories:

- Main navigation
- Primary and secondary buttons
- Journal tabs
- Calendar activity cards
- Reset question cards and options
- Reset progress indicator
- Duration picker
- Memory detail cards
- Shared glass surfaces

For components with the same purpose, keep these properties consistent:

- Typography
- Colors
- Padding and spacing
- Border radius and border
- Background, transparency, and blur
- Shadows and glow
- Icon treatment and alignment
- Interaction states

Different variants are allowed only when they clearly communicate a different purpose or state. Do not treat the current inconsistent “Save to Journal” implementations as two approved variants.

## Navigation rules

- The approved main navigation uses five items.
- It has a fixed bottom position.
- The active item uses an orange indicator.
- The Reset flow may remove bottom navigation to keep the task focused.
- Navigation behavior for Profile subpages is unresolved and must remain pending until approved.
- Do not use legacy Soft Reset navigation as an approved pattern.

## Motion and accessibility

- Motion should feel calm and support the organic visual direction.
- Preserve existing `prefers-reduced-motion` support.
- Motion must not block navigation or reduce readability.
- Interactive controls require visible, consistent states.
- Focus, hover, pressed, selected, disabled, loading, success, and error states should be defined consistently.
- A shared `:focus-visible` treatment is pending. Do not invent it without approval.
- Do not rely only on color or glow to communicate important state.

## Legacy and unresolved items

The items below are **not approved design rules** and must be handled only in a later, explicitly requested task:

- Legacy Soft Reset branding and layouts on History, Activities, Preferences, and Make a Memory
- Missing or unloaded images in Gallery, Favorite, Memory Detail, and Calendar cards
- Final navigation behavior on Profile subpages
- Inconsistent “Save to Journal” button implementations
- Complete semantic role assignment for every palette shade
- Complete body, label, metadata, button, and navigation typography tokens
- Final shared keyboard focus treatment
- Legacy Georgia declarations
- Legacy green and cream colors
- Hard-coded and duplicated styling values

## Verification checklist for future visual tasks

Before completing a visual change, verify:

- Typography
- Approved palette usage
- Component consistency
- Spacing and alignment
- Safe areas
- Navigation behavior
- Interaction states
- Scrolling
- Responsive mobile layout
- Reduced-motion behavior
- Browser and console errors
