# Button Component - Usage Guide

## Overview

The button component is a fully accessible, production-ready component with 3 style variants, 5 states each, and icon support. Built using pure HTML/CSS following the Figma design specifications.

---

## Quick Start

### 1. Include the CSS

Add the button stylesheet to your HTML:

```html
<link rel="stylesheet" href="/css/button.css">
```

### 2. Basic Usage

```html
<!-- Primary Button -->
<button class="btn btn--primary">Click me</button>

<!-- Outlined Button -->
<button class="btn btn--outlined">Click me</button>

<!-- Text Button -->
<button class="btn btn--text">Click me</button>
```

---

## Variants

### Primary (Filled)
**Use for:** Main call-to-action buttons

```html
<button class="btn btn--primary">Submit</button>
```

**States:**
- Default: Blue background (#4e72a8), white text
- Hover: Darker blue (#3b5a86)
- Pressed: Darkest blue (#2b4163)
- Focus: Purple outline (#ad4fc4)
- Disabled: Gray (#a3a39d)

---

### Outlined (Border)
**Use for:** Secondary actions, works on dark backgrounds

```html
<button class="btn btn--outlined">Cancel</button>
```

**States:**
- Default: Transparent background, blue border (#3b5a86), white text
- Hover: Dark background (#0b0b0a), blue text
- Pressed: Dark background, white text, light border
- Focus: Purple outline
- Disabled: Gray text and border

---

### Text (Minimal)
**Use for:** Tertiary actions, links-as-buttons

```html
<button class="btn btn--text">Learn more</button>
```

**States:**
- Default: No background, black text, 16px border-radius
- Hover: Gray background (#d5d5cf), 4px border-radius
- Pressed: Light gray background (#f4f4f1)
- Focus: Purple outline
- Disabled: Gray text

**Note:** Border-radius changes on interaction (16px → 4px)

---

## Icons

### Leading Icon (Before text)

```html
<button class="btn btn--primary">
    <span class="btn__icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="..." fill="currentColor"/>
        </svg>
    </span>
    <span class="btn__label">Download</span>
</button>
```

**Icon size:** 22×22px

---

### Trailing Icon (After text)

```html
<button class="btn btn--primary">
    <span class="btn__label">Next</span>
    <span class="btn__icon btn__icon--trailing">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="..." fill="currentColor"/>
        </svg>
    </span>
</button>
```

**Icon size:** 24×24px

---

### Both Icons

```html
<button class="btn btn--primary">
    <span class="btn__icon">
        <!-- Leading icon SVG -->
    </span>
    <span class="btn__label">Download</span>
    <span class="btn__icon btn__icon--trailing">
        <!-- Trailing icon SVG -->
    </span>
</button>
```

---

## States

### Disabled

```html
<button class="btn btn--primary" disabled>
    Disabled Button
</button>
```

**Behavior:**
- Non-interactive (`cursor: not-allowed`)
- Grayed out colors
- `pointer-events: none`

---

### Loading (Optional)

```html
<button class="btn btn--primary btn--loading">
    Loading...
</button>
```

**Behavior:**
- Shows spinner animation
- Text becomes transparent
- Non-interactive

---

## Size Variants

### Small

```html
<button class="btn btn--primary btn--sm">Small</button>
```

- Font: 14px
- Padding: 8px 12px

---

### Medium (Default)

```html
<button class="btn btn--primary">Medium</button>
```

- Font: 16px
- Padding: 12px 16px

---

### Large

```html
<button class="btn btn--primary btn--lg">Large</button>
```

- Font: 18px
- Padding: 16px 24px

---

## Full Width

```html
<button class="btn btn--primary btn--full">
    Full Width Button
</button>
```

Spans entire container width, centered content.

---

## As Link Element

```html
<a href="/contact/" class="btn btn--primary">
    Contact Us
</a>
```

Works with `<a>` tags for navigation.

---

## Accessibility Features

### Built-in Support

✅ **Keyboard Navigation**
- Tab to focus
- Enter/Space to activate
- Visible focus outline (purple)

✅ **Screen Readers**
- Semantic `<button>` element
- Disabled state properly communicated

✅ **Reduced Motion**
- Respects `prefers-reduced-motion`
- No animations for motion-sensitive users

✅ **Focus Visible**
- Only shows outline on keyboard focus
- Hidden for mouse clicks

---

### Best Practices

**1. Use correct button type:**

```html
<!-- Form submission -->
<button type="submit" class="btn btn--primary">Submit</button>

<!-- Generic action -->
<button type="button" class="btn btn--primary">Click</button>

<!-- Form reset -->
<button type="reset" class="btn btn--outlined">Reset</button>
```

**2. Provide meaningful labels:**

```html
<!-- Good -->
<button class="btn btn--primary">Download Report</button>

<!-- Bad - too generic -->
<button class="btn btn--primary">Click here</button>
```

**3. Use ARIA when needed:**

```html
<!-- Icon-only button -->
<button class="btn btn--text" aria-label="Close dialog">
    <span class="btn__icon" aria-hidden="true">
        <svg><!-- X icon --></svg>
    </span>
</button>
```

---

## Common Patterns

### Form Actions

```html
<div style="display: flex; gap: var(--spacing-md);">
    <button type="submit" class="btn btn--primary">Save</button>
    <button type="button" class="btn btn--outlined">Cancel</button>
</div>
```

---

### Call to Action

```html
<button class="btn btn--primary btn--lg">
    Get Started
</button>
```

---

### Icon-Only Button

```html
<button class="btn btn--text" aria-label="Menu">
    <span class="btn__icon" aria-hidden="true">
        <svg><!-- Menu icon --></svg>
    </span>
</button>
```

---

### Link That Looks Like Button

```html
<a href="/signup/" class="btn btn--primary btn--full">
    Sign Up Now
</a>
```

---

## Design Token Reference

All button styles use design tokens from `variables.css`:

### Colors
- `--surface-action-default` (#4e72a8)
- `--surface-action-hover` (#3b5a86)
- `--surface-action-pressed` (#2b4163)
- `--text-on-action` (#fafaf8)
- `--outline-accent` (#ad4fc4) - focus outline

### Spacing
- `--spacing-xxs` (4px)
- `--spacing-xs` (8px)
- `--spacing-sm` (12px)
- `--spacing-md` (16px)

### Border Radius
- `--radius-xxs` (2px) - Primary & Outlined
- `--radius-xs` (4px) - Text variant (hover)
- `--radius-lg` (16px) - Text variant (default)

### Typography
- `--font-secondary` (Inter)
- `--font-weight-semibold` (600)
- `--font-size-label-md` (16px)
- `--line-height-label-md` (24px)
- `--letter-spacing-label-md` (-0.5px)

---

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

### Fallbacks
- Focus outline falls back to browser default
- Animations disabled for `prefers-reduced-motion`

---

## Examples

See [button-examples.html](button-examples.html) for live examples of all variants and states.

---

## Validation Checklist

Before using in production:

- [ ] All 3 variants render correctly
- [ ] All 5 states work (hover, focus, pressed, disabled)
- [ ] Icons display properly (leading, trailing, both)
- [ ] Keyboard navigation works (Tab + Enter/Space)
- [ ] Focus outline visible and styled correctly
- [ ] Disabled state prevents interaction
- [ ] Works as both `<button>` and `<a>`
- [ ] Respects `prefers-reduced-motion`
- [ ] Typography matches design tokens
- [ ] Colors match Figma specifications

---

## Need Help?

- Check [BUTTON_COMPONENT_GUIDE.md](BUTTON_COMPONENT_GUIDE.md) for implementation details
- View [button-examples.html](button-examples.html) for live demos
- Review [button.css](../css/button.css) for all styles

---

**Component Version:** 1.0.0
**Last Updated:** 2024-12-14
**Design Source:** [Figma - IXI Labs website v2](https://www.figma.com/design/rKffzKIeP4ZlkTM6GeClpq/IXI-Labs-website-v2?node-id=53-203)
