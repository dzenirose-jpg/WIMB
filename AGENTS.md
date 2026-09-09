# WIMB Project Instructions

## Project context

- WIMB stands for “Where Is My Break?”
- WIMB is an existing UX/UI capstone application.
- The goal is to turn the approved Figma design into a functional prototype.
- The current approved implementation and the specifically referenced Figma screens are the sources of truth.
- Do not independently redesign the application or add unrequested features.

## Working method

- Inspect all relevant existing files before making changes.
- Work only on the screen, component, or user flow explicitly requested.
- Do not modify unrelated screens, components, content, or functionality.
- Preserve all approved existing work.
- Reuse existing components, styles, variables, assets, and implementation patterns before creating new ones.
- Do not replace the established design with generic AI-generated UI.
- Do not guess when instructions conflict or important information is missing. Explain the conflict or missing information first.
- Prefer focused, reversible changes instead of large rewrites.

## Figma and design implementation

- Use the specifically provided Figma frame or node when a task includes a Figma link.
- Preserve the established layout, hierarchy, content, and behavior unless the task explicitly requests a change.
- Do not introduce arbitrary fonts, colors, gradients, shadows, icons, effects, animations, or spacing values.
- Detailed visual rules will be documented separately in `DESIGN.md`.
- When `DESIGN.md` exists, read and follow it before making visual changes.

## Code quality

- Follow the technologies, folder structure, naming, and conventions already used in the project.
- Avoid duplicated components and repeated styling.
- Maintain consistent component states and navigation behavior.
- Preserve working scroll behavior and responsive mobile layouts.
- Do not install new dependencies unless they are necessary for the requested task.
- Do not remove or rewrite working functionality without a clear requirement.

## Verification

- After every implementation task, run the relevant existing checks.
- When visual behavior changes, verify the result in the browser.
- Check for runtime and console errors.
- Test the specific changed interaction or user flow.
- Never claim that something was tested unless it was actually tested.
- At the end, report:
  - which files were changed
  - what was implemented
  - what was tested
  - any remaining limitations or uncertainties

## Safety

- Do not delete files, reset the project, replace the application, or make destructive changes.
- Preserve unrelated user work.
- Do not expose credentials, tokens, or secrets.
- Do not publish or deploy the project unless explicitly requested.
- Do not make Git commits unless explicitly requested.
