# Claude Code Configuration

This directory contains Claude Code configuration and skills for the Ecme UI Component Library project.

## Directory Structure

```
.claude/
├── README.md                    # This file
├── skills/                      # Custom Claude Code skills
│   ├── create-component/        # Skill for creating new UI components
│   │   └── skill.md
│   ├── create-page/             # Skill for creating new pages
│   │   └── skill.md
│   ├── setup-routes/            # Skill for configuring routes
│   │   └── skill.md
│   ├── setup-navigation/        # Skill for configuring navigation
│   │   └── skill.md
│   └── theme-config/            # Skill for theme configuration
│       └── skill.md
└── commands/                    # Custom slash commands (optional)
```

## Available Skills

### 1. Create Component (`create-component`)
Helps you create new UI components following the project's structure and conventions.

**Usage**: Invoke when you need to create a new reusable UI component.

### 2. Create Page (`create-page`)
Guides the creation of new pages with proper routing configuration and layout setup.

**Usage**: Invoke when you need to add a new page to the application.

### 3. Setup Routes (`setup-routes`)
Assists in configuring route definitions with proper authority and meta settings.

**Usage**: Invoke when you need to add or modify route configurations.

### 4. Setup Navigation (`setup-navigation`)
Helps configure navigation menu items with icons and proper structure.

**Usage**: Invoke when you need to add or modify navigation menu items.

### 5. Theme Config (`theme-config`)
Assists with theme customization including colors, layouts, and mode settings.

**Usage**: Invoke when you need to customize the theme or add new theme variants.

## Project Information

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom-built
- **State Management**: Zustand
- **Authentication**: BetterAuth
- **i18n**: next-intl

## Quick Reference

### Primary Brand Color
- Color: `#00c307` (Vibrant Green)
- Used for: Primary buttons, CTAs, active states

### Typography
- Font: Inter
- Configured in: `tailwind.config.ts`

### Key Directories
- Components: `src/components/`
- Pages: `src/app/`
- Configs: `src/configs/`
- Utils: `src/utils/`
- Styles: `src/assets/styles/`

## Contributing

When adding new skills:
1. Create a new folder in `.claude/skills/`
2. Add a `skill.md` file with the skill definition
3. Update this README with the new skill information
