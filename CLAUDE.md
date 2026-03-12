# CLAUDE.md — Atlas Construction Project

## Project Context

This is a **website design project** for Atlas Construction Co., a residential contractor based in West Los Angeles. The design is created in Pencil (`.pen` format) and managed through Claude Code with the Pencil MCP server.

## Design File

- **Main file:** `atlas-website.pen`
- **Tool:** Pencil design app (read/write via `mcp__pencil__*` tools)
- **Do NOT** use `Read`, `Grep`, or `Edit` tools on `.pen` files — they are encrypted and only accessible via Pencil MCP tools.

## Project Structure

```
Atlas Construction/
├── atlas-website.pen        # Main Pencil design file
├── images/
│   ├── atlas-construction-hero.png   # Hero background image
│   ├── generated-1773342594112.png   # Client avatar
│   └── PerfectlyNineties-Regular.ttf # Custom heading font
├── Atlas_Construction_Site_Map_Content_Framework_v3_UPDATED_HOMEPAGE.xlsx
├── Atlas_Construction_Site_Map_Content_Framework_v2_1.xlsx
├── README.md
├── CLAUDE.md
└── .gitignore
```

## Key Design Decisions

- **Canvas width:** 1440px (desktop-first)
- **Layout system:** Flexbox throughout (vertical/horizontal layout properties)
- **Headings font:** Perfectly Nineties (loaded from `images/PerfectlyNineties-Regular.ttf`)
- **Body font:** JetBrains Mono
- **Primary dark tone:** `#2c2c2c` (process section, contact, footer backgrounds)
- **Hero section** uses a local image fill (`images/atlas-construction-hero.png`) with a dark overlay

## Top-Level Frame IDs

| ID | Section |
|----|---------|
| `eJEnn` | Hero Wrapper (navbar + header) |
| `xWHgm` | Who We Are |
| `DVdzJ` | Selected Works |
| `i3P43` | Our Expertise |
| `PnUJG` | Our Process |
| `KfliH` | Testimonials |
| `anUWS` | Contact |
| `N7Fac` | Footer |

## Working with This Project

- Always use `mcp__pencil__get_editor_state` at the start of a design session
- Use `mcp__pencil__batch_get` to read sections before making changes
- Use `mcp__pencil__get_screenshot` to verify visual changes
- Set `placeholder: true` on any frame being actively edited; remove it when done
