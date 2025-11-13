# Branding Rules & UI Guidelines

**CRITICAL:** This skill enforces strict branding and modification rules for this project. You MUST follow these rules at all times.

---

## 🚫 MODIFICATION POLICY (MANDATORY)

**DO NOT add, edit, or remove any part of any element until explicitly asked by the user.**

This includes:
- ❌ No adding new components, features, or code without explicit request
- ❌ No editing existing code, styles, or configurations without explicit request
- ❌ No removing code, comments, or functionality without explicit request
- ❌ No refactoring or "improvements" unless specifically asked
- ❌ No proactive changes or suggestions implemented without approval

**When in doubt, ASK FIRST before making ANY changes.**

---

## 🎨 Branding Standards (MANDATORY)

### Primary Font: San Francisco
Use **ONLY** the San Francisco font family with the following weights:

```css
/** Font: San Francisco (weights included) */
/** Source: http://applemusic.tumblr.com/ */

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
```

### Primary Color: #00c307 (Vibrant Green)

```css
/* Primary color */
:root {
	--primary: #00c307;
}
```

**DO NOT introduce new fonts or colors unless explicitly approved.**

---

## 📋 Core Rules (Follow Always)

1. **Do not edit `demo/` folder files.** Ever. `demo/` is read-only and the canonical source of components.

2. **Do not use components stored outside the `demo/` folder.** All UI components must originate from `demo/`.

3. **Do not add or invent colors or fonts.** Use only the `San Francisco` font family and the primary color `#00c307` (and any existing color tokens already in the repo). No custom colors without approval.

4. **Before writing any code, read and follow these rules.** Confirm mentally (or in PR description) that you followed them.

5. **Keep a fresh copy of both `demo/` and `starter/` folders in a git branch named `donor`.** That branch must contain the untouched `demo/` and a working `starter/` snapshot.

---

## 🔄 Workflow (Step-by-Step)

### 1. Explore `demo/` First
- Read every file under `demo/`. Understand available components, props, styles, and any example usage.
- Produce a single master list (file) of **all available components** found in `demo/`.

### 2. Create the Components List in `starter/`
- Add a file at `starter/COMPONENTS_FROM_DEMO.md` (or JSON if preferred) listing component names, file paths, and a one-line description for each.
- This list is the directory map the team will use going forward.

### 3. Build Pages Only in `starter/`
- Create pages, experiments and playgrounds in `starter/` using components from `demo/` as-is.
- Never move or copy components into `starter/` for permanent edits. If you need a modified component, create a wrapper in `starter/` that composes the `demo/` component.

### 4. Experiment → Approve → Freeze
- Iterate on pages in `starter/` until the design owner says "satisfied".
- Once approved, **freeze** the page version and tag the commit (e.g. `ui/freeze/<page-name>`).

### 5. Component Changes Process (Rare & Formal)
- If a component in `demo/` absolutely must change, open a PR describing why, include before/after usage examples and get explicit approval.
- Until the PR merges, do all experiments in `starter/` via wrappers.

### 6. No UI Outside These Rules
- If a quick hack is required for a demo, still work in `starter/` and mark it `TEMP — remove after demo`.

---

## 📁 File & Commit Conventions

- **Branch for donor snapshot:** `donor` (contains untouched copies of `demo/` and `starter/`).
- **Feature branches:** `ui/<short-description>`
- **PR title format:** `[UI] <short-summary> — <demo-component-used>`
- **Tag frozen pages:** `ui/freeze/<page-name>@<YYYYMMDD>`

---

## ✅ Quick Checklist (Use Before Every Change)

Before making ANY change, verify:

- [ ] Did I read `demo/` fully for the component I want to use?
- [ ] Am I editing `starter/` and not `demo/`?
- [ ] Am I using only the provided fonts and colors?
- [ ] Did I create/confirm `donor` branch snapshot?
- [ ] If modifying `demo/`, did I open a PR with justification and approvals?
- [ ] **Was I explicitly asked to make this change?**
- [ ] Am I using San Francisco font (not Inter or any other font)?
- [ ] Am I using the primary color #00c307 (not any other green)?

---

## 🎯 Summary

**Three Golden Rules:**

1. **ASK before changing anything** - Never add, edit, or remove without explicit request
2. **San Francisco font ONLY** - No exceptions, no alternatives
3. **Primary color #00c307 ONLY** - Use the exact vibrant green specified

**Remember:** Your role is to implement what is requested, not to add improvements or modifications proactively.
