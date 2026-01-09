# Card Component - Usage Guide

## Overview

The card component is a fully accessible, production-ready content container with hover states and flexible content sections. Built using pure HTML/CSS following the Figma design specifications.

**Figma Reference:** https://www.figma.com/design/rKffzKIeP4ZlkTM6GeClpq/IXI-Labs-website-v2?node-id=2062-1223

---

## Quick Start

### 1. Include the CSS

Add the card stylesheet to your HTML:

```html
<link rel="stylesheet" href="/css/card.css">
```

### 2. Basic Usage

```html
<article class="card">
    <div class="card__content">
        <!-- Icon (optional) -->
        <div class="card__icon" aria-hidden="true">
            <svg><!-- Icon SVG --></svg>
        </div>

        <!-- Title -->
        <h3 class="card__title">Card Title</h3>

        <!-- Description -->
        <p class="card__description">Primary description text goes here.</p>

        <!-- Outcome Description -->
        <p class="card__outcome">Secondary outcome description.</p>
    </div>

    <!-- Learn More Link -->
    <a href="#" class="card__link">
        <span>Learn more</span>
        <span class="card__arrow">
            <svg><!-- Arrow SVG --></svg>
        </span>
    </a>
</article>
```

---

## Component Structure

### Card Container
- **Class:** `.card`
- **Dimensions:** 411px × 255px (minimum height)
- **Padding:** 40px vertical, 20px horizontal
- **Border:** 1px solid #d5d5cf
- **Background:** #fafaf8 (default), #f4f4f1 (hover)

### Content Container
- **Class:** `.card__content`
- **Gap:** 16px between items
- **Flex direction:** Column

### Icon (Optional)
- **Class:** `.card__icon`
- **Size:** 24×24px
- **Color:** Inherits from currentColor (#0b0b0a)

### Title
- **Class:** `.card__title`
- **Element:** `<h3>` (or appropriate heading level)
- **Typography:** Inter Bold, 24px, 28px line-height, -1px tracking

### Description
- **Class:** `.card__description`
- **Element:** `<p>`
- **Typography:** Inter Regular, 14px, 20px line-height

### Outcome Description
- **Class:** `.card__outcome`
- **Element:** `<p>`
- **Typography:** Inter Regular, 14px, 20px line-height

### Learn More Link
- **Class:** `.card__link`
- **Element:** `<a>` or `<button>`
- **Typography:** Inter Semibold, 14px, 20px line-height, -0.5px tracking
- **Gap:** 10px above (from content)

### Arrow Icon
- **Class:** `.card__arrow`
- **Size:** 16×16px
- **Position:** After link text

---

## States

### Default State
```css
background-color: #fafaf8
border: 1px solid #d5d5cf
```

### Hover State
```css
background-color: #f4f4f1
cursor: default (or pointer if clickable)
```

---

## Examples

### Basic Card (All Content)

```html
<article class="card">
    <div class="card__content">
        <div class="card__icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
        </div>

        <h3 class="card__title">Quantum-Resistant Security</h3>

        <p class="card__description">Advanced cryptographic protocols designed to withstand quantum computing attacks.</p>

        <p class="card__outcome">Future-proof encryption that maintains security as quantum computing evolves.</p>
    </div>

    <a href="/security/" class="card__link">
        <span>Learn more</span>
        <span class="card__arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </a>
</article>
```

---

### Card Without Icon

```html
<article class="card">
    <div class="card__content">
        <h3 class="card__title">Decentralized Architecture</h3>

        <p class="card__description">No single point of failure. Distributed network ensures continuous availability.</p>

        <p class="card__outcome">99.99% uptime with automatic failover built in.</p>
    </div>

    <a href="/architecture/" class="card__link">
        <span>Learn more</span>
        <span class="card__arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </a>
</article>
```

---

### Card With Custom Link Text

```html
<article class="card">
    <div class="card__content">
        <div class="card__icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <!-- Icon SVG -->
            </svg>
        </div>

        <h3 class="card__title">Production-Ready Platform</h3>

        <p class="card__description">Battle-tested infrastructure deployed in critical systems worldwide.</p>

        <p class="card__outcome">Trusted by enterprises for mission-critical applications.</p>
    </div>

    <a href="/case-studies/" class="card__link">
        <span>View case studies</span>
        <span class="card__arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </a>
</article>
```

---

### Clickable Card (Entire Card)

Make the entire card clickable by wrapping it in a link:

```html
<a href="/open-source/" class="card card--clickable" style="text-decoration: none; color: inherit;">
    <div class="card__content">
        <div class="card__icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <!-- Icon SVG -->
            </svg>
        </div>

        <h3 class="card__title">Open Source</h3>

        <p class="card__description">Full transparency with auditable code.</p>

        <p class="card__outcome">Join thousands of developers contributing to the ecosystem.</p>
    </div>

    <span class="card__link">
        <span>Explore GitHub</span>
        <span class="card__arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </span>
</a>
```

**Note:** When card is wrapped in `<a>`, use `<span class="card__link">` instead of `<a class="card__link">`

---

## Card Grids

### 3-Column Grid (Default)

```html
<div class="card-grid">
    <article class="card"><!-- Card 1 --></article>
    <article class="card"><!-- Card 2 --></article>
    <article class="card"><!-- Card 3 --></article>
</div>
```

**Responsive behavior:**
- Desktop (64rem+): 3 columns
- Tablet (48rem-64rem): 2 columns
- Mobile (<48rem): 1 column

---

### 2-Column Grid

```html
<div class="card-grid card-grid--2">
    <article class="card"><!-- Card 1 --></article>
    <article class="card"><!-- Card 2 --></article>
</div>
```

**Responsive behavior:**
- Desktop (48rem+): 2 columns
- Mobile (<48rem): 1 column

---

### 4-Column Grid

```html
<div class="card-grid card-grid--4">
    <article class="card"><!-- Card 1 --></article>
    <article class="card"><!-- Card 2 --></article>
    <article class="card"><!-- Card 3 --></article>
    <article class="card"><!-- Card 4 --></article>
</div>
```

**Responsive behavior:**
- Desktop (80rem+): 4 columns
- Tablet (48rem-80rem): 2 columns
- Mobile (<48rem): 1 column

---

## Common Icons

### Atom Icon (Security/Science)

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M4 12C4 12 6 8 12 8C18 8 20 12 20 12" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
```

### Package Icon (Platform/Stack)

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="2" fill="none"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" stroke-width="2" fill="none"/>
    <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" stroke-width="2"/>
</svg>
```

### Layers Icon (Scalability)

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
```

### Shield Icon (Security)

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
```

### Clock Icon (Performance)

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
```

### Arrow Right Icon (For Links)

```html
<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## Accessibility Features

### Built-in Support

✅ **Semantic HTML**
- Use `<article>` for card container
- Use appropriate heading levels (`<h2>`, `<h3>`, `<h4>`)
- Use `<a>` for links, `<button>` for actions

✅ **Keyboard Navigation**
- Tab to focus on "Learn more" link
- Enter/Space to activate
- Visible focus outline (purple)

✅ **Screen Readers**
- Icons marked with `aria-hidden="true"` (decorative)
- Semantic heading structure
- Link text is descriptive

✅ **Reduced Motion**
- Respects `prefers-reduced-motion`
- No animations for motion-sensitive users

✅ **Focus Visible**
- Focus outline only shows on keyboard focus
- Hidden for mouse clicks

---

### Best Practices

**1. Use appropriate heading levels:**

```html
<!-- In a section with <h2> -->
<article class="card">
    <div class="card__content">
        <h3 class="card__title">Card Title</h3>
        <!-- ... -->
    </div>
</article>

<!-- In a section with <h3> -->
<article class="card">
    <div class="card__content">
        <h4 class="card__title">Card Title</h4>
        <!-- ... -->
    </div>
</article>
```

**2. Provide descriptive link text:**

```html
<!-- Good -->
<a href="#" class="card__link">
    <span>Learn about quantum security</span>
    <span class="card__arrow"><!-- Arrow --></span>
</a>

<!-- Avoid -->
<a href="#" class="card__link">
    <span>Click here</span>
    <span class="card__arrow"><!-- Arrow --></span>
</a>
```

**3. Mark decorative icons appropriately:**

```html
<!-- Decorative icon (adds no meaning) -->
<div class="card__icon" aria-hidden="true">
    <svg><!-- Icon --></svg>
</div>

<!-- Meaningful icon (conveys information) -->
<div class="card__icon" role="img" aria-label="Security feature">
    <svg><!-- Icon --></svg>
</div>
```

---

## Responsive Behavior

### Desktop (64rem+)
- Card width: 411px
- Padding: 40px vertical, 20px horizontal
- Grid: 3 columns (default)

### Tablet (48rem-64rem)
- Card width: 100% (max-width: 411px)
- Padding: 40px vertical, 20px horizontal
- Grid: 2 columns

### Mobile (<48rem)
- Card width: 100% (max-width: 411px)
- Padding: 24px vertical, 16px horizontal
- Grid: 1 column

---

## Design Token Reference

All card styles use design tokens from `variables.css`:

### Colors
- `--surface-01` (#fafaf8) - Default background
- `--surface-02` (#f4f4f1) - Hover background
- `--outline-01` (#d5d5cf) - Border color
- `--text-01` (#0b0b0a) - Primary text
- `--text-link` (#04070b) - Link text
- `--outline-accent` (#ad4fc4) - Focus outline

### Spacing
- `--spacing-xxs` (4px) - Icon gap in link
- `--spacing-md` (16px) - Content gap
- `--spacing-lg` (20px) - Horizontal padding
- `--spacing-xl` (24px) - Mobile padding
- `--spacing-3xl` (40px) - Desktop padding

### Border Radius
- `--radius-lg` (16px) - Card corners, link border-radius

### Typography
- `--font-secondary` (Inter)
- `--font-weight-regular` (400)
- `--font-weight-semibold` (600)
- `--font-weight-bold` (700)
- `--font-size-heading-md` (24px) - Title
- `--font-size-body-sm` (14px) - Descriptions
- `--font-size-label-sm` (14px) - Link text

---

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

### Fallbacks
- Focus outline falls back to browser default
- Grid layout falls back to single column
- Hover states work on all devices

---

## Examples

See [card-examples.html](../card-examples.html) for live examples of all variants and layouts.

---

## Validation Checklist

Before using in production:

- [ ] Card renders with correct dimensions (411px × 255px min)
- [ ] Hover state changes background color smoothly
- [ ] All content sections render properly
- [ ] Icon is 24×24px and properly colored
- [ ] Title uses correct typography (Inter Bold, 24px)
- [ ] Descriptions use correct typography (Inter Regular, 14px)
- [ ] Learn more link uses correct typography (Inter Semibold, 14px)
- [ ] Arrow icon is 16×16px
- [ ] Border is 1px solid #d5d5cf
- [ ] Spacing matches design (16px gaps, 40px/20px padding)
- [ ] Keyboard navigation works (Tab + Enter)
- [ ] Focus outline visible and styled correctly
- [ ] Links work correctly
- [ ] Icons marked as `aria-hidden` (if decorative)
- [ ] Responsive behavior works on all screen sizes
- [ ] Card grids display correctly
- [ ] Typography matches design tokens
- [ ] Colors match Figma specifications
- [ ] Respects `prefers-reduced-motion`

---

## Need Help?

- Check [CARD_COMPONENT_GUIDE.md](CARD_COMPONENT_GUIDE.md) for implementation details
- View [card-examples.html](../card-examples.html) for live demos
- Review [card.css](../css/card.css) for all styles

---

**Component Version:** 1.0.0
**Last Updated:** 2024-12-14
**Design Source:** [Figma - IXI Labs website v2](https://www.figma.com/design/rKffzKIeP4ZlkTM6GeClpq/IXI-Labs-website-v2?node-id=2062-1223)
