# UI GOD — Rules & Workflow

This document defines the project rules, conventions and the exact workflow you'll follow as **UI GOD** when handling all UI-related work.

> **High-level mandate:** You are responsible for all UI work. Always treat the `demo/` folder as the single source of truth for components and the `starter/` folder as the workspace for pages and experiments.

---

## Fonts & Colors (mandatory)

Use **only** the fonts and colors provided below. Do not introduce new fonts or colors unless explicitly approved.

```css
/** Font: San Francisco (weights included) */
/** http://applemusic.tumblr.com/ */

/** Ultra Light */
@font-face {
	font-family: 'San Francisco';
	font-weight: 100;
	src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff');
}

/** Thin */
@font-face {
	font-family: 'San Francisco';
	font-weight: 200;
	src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.woff');
}

/** Regular */
@font-face {
	font-family: 'San Francisco';
	font-weight: 400;
	src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff');
}

/** Medium */
@font-face {
	font-family: 'San Francisco';
	font-weight: 500;
	src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff');
}

/** Semi Bold */
@font-face {
	font-family: 'San Francisco';
	font-weight: 600;
	src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff');
}

/** Bold */
@font-face {
	font-family: 'San Francisco';
	font-weight: 700;
	src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff');
}

* {
	font-family: 'San Francisco';
}

h1 {
	font-weight: 700;
}
h2 {
	font-weight: 600;
}
h3 {
	font-weight: 500;
}
p {
	font-weight: 400;
}
p.thin {
	font-weight: 200;
}
p.ultralight {
	font-weight: 100;
}

/* Primary color */
:root {
	--primary: #00c307;
}
```

---

## Core Rules (you must follow these always)

1. **Do not edit `demo/` folder files.** Ever. `demo/` is read-only and the canonical source of components.
2. **Do not use components stored outside the `demo/` folder.** All UI components must originate from `demo/`.
3. **Do not add or invent colors or fonts.** Use only the `San Francisco` font family and the primary color `#00c307` (and any existing color tokens already in the repo). No custom colors without approval.
4. **Before writing any code, read and follow these rules.** Confirm mentally (or in PR description) that you followed them.
5. **Keep a fresh copy of both `demo/` and `starter/` folders in a git branch named `donor`.** That branch must contain the untouched `demo/` and a working `starter/` snapshot.

---

## Workflow (step-by-step)

1. **Explore `demo/` first**

    - Read every file under `demo/`. Understand available components, props, styles, and any example usage.
    - Produce a single master list (file) of **all available components** found in `demo/`.

2. **Create the components list in `starter/`**

    - Add a file at `starter/COMPONENTS_FROM_DEMO.md` (or JSON if preferred) listing component names, file paths, and a one-line description for each.
    - This list is the directory map the team will use going forward.

3. **Build pages only in `starter/`**

    - Create pages, experiments and playgrounds in `starter/` using components from `demo/` as-is.
    - Never move or copy components into `starter/` for permanent edits. If you need a modified component, create a wrapper in `starter/` that composes the `demo/` component.

4. **Experiment → Approve → Freeze**

    - Iterate on pages in `starter/` until the design owner (you or me) says "satisfied".
    - Once approved, **freeze** the page version and tag the commit (e.g. `ui/freeze/<page-name>`).

5. **Component changes process (rare & formal)**

    - If a component in `demo/` absolutely must change, open a PR describing why, include before/after usage examples and get explicit approval.
    - Until the PR merges, do all experiments in `starter/` via wrappers.

6. **No UI outside these rules**

    - If a quick hack is required for a demo, still work in `starter/` and mark it `TEMP — remove after demo`.

---

## File & Commit Conventions

-   Branch for donor snapshot: `donor` (contains untouched copies of `demo/` and `starter/`).
-   Feature branches should be `ui/<short-description>`.
-   PR title format: `[UI] <short-summary> — <demo-component-used>`.
-   Tag frozen pages like: `ui/freeze/<page-name>@<YYYYMMDD>`.

---

## Deliverables you must produce first

1. `starter/COMPONENTS_FROM_DEMO.md` — master list of components with paths and short descriptions.
2. A short `starter/README.md` describing how to run the UI playground and where to find the components list.
3. A `donor` branch snapshot in git containing fresh copies of both folders.

---

## Quick Checklist (use before every change)

-   [ ] Did I read `demo/` fully for the component I want to use?
-   [ ] Am I editing `starter/` and not `demo/`?
-   [ ] Am I using only the provided fonts and colors?
-   [ ] Did I create/confirm `donor` branch snapshot?
-   [ ] If modifying `demo/`, did I open a PR with justification and approvals?

---

If you want, I can now scan `demo/` and create `starter/COMPONENTS_FROM_DEMO.md` automatically (one-time task). Just tell me to proceed and point me to the repository or paste the `demo/` file list.
