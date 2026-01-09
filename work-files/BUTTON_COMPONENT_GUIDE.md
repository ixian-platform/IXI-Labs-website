# Button Component Implementation Guide

## Overview
Implement a reusable Button component based on the Figma design with all states and variants.

**Figma Reference:** https://www.figma.com/design/rKffzKIeP4ZlkTM6GeClpq/IXI-Labs-website-v2?node-id=53-203

---

## Component Specifications

### Button Variants

#### 1. Styles (3 variants)
- **Primary** - Filled background with action color
- **Outlined** - Border with transparent/dark background
- **Text** - No background, minimal styling

#### 2. States (5 states per style)
- **Default** - Base appearance
- **Hover** - Mouse hover interaction
- **Pressed** - Active/clicked state
- **Focus** - Keyboard focus with visible outline
- **Disabled** - Non-interactive, muted appearance

#### 3. Icon Configuration
- **Leading Icon** (optional) - Icon before label
- **Trailing Icon** (optional) - Icon after label
- **Both** - Both icons present
- **None** - Text-only button

---

## Implementation Requirements

### 1. Component Props

```typescript
interface ButtonProps {
  // Text content
  label?: string;
  
  // Style variant
  variant?: 'primary' | 'outlined' | 'text';
  
  // State (controlled via interaction, not prop)
  // state: 'default' | 'hover' | 'pressed' | 'focus' | 'disabled'
  
  // Icon configuration
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  
  // Standard button props
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}
```

### 2. Design Tokens to Extract

Map these Figma variables to your project's design system:

#### Colors

```css
/* Action/Surface Colors */
--colors-surface-action-default: #4e72a8;
--colors-surface-action-hover: #3b5a86;
--colors-surface-action-pressed: #2b4163;
--colors-surface-action-disabled: #a3a39d;
--colors-surface-04: #d5d5cf;
--colors-surface-02: #f4f4f1;
--colors-surface-inverse-01: #0b0b0a;

/* Text Colors */
--colors-text-on-action: #fafaf8;
--colors-text-01: #0b0b0a;
--colors-text-action-disabled: #545450;
--colors-text-on-disabled: #3f3f3b;
--colors-text-action-hover: #2b4163;
--colors-text-inverse-01: #fafaf8;

/* Outline Colors */
--colors-outline-action-secondary-default: #3b5a86;
--colors-outline-action-secondary-hover: #2b4163;
--colors-outline-action-secondary-disabled: #cbd9ea;
--colors-outline-accent: #ad4fc4;
```

#### Spacing

```css
--spacing-none: 0px;
--spacing-xxs: 4px;
--spacing-xs: 8px;
--spacing-sm: 12px;
--spacing-md: 16px;
```

#### Border Radius

```css
--corner-radius-xxs: 2px;
--corner-radius-xs: 4px;
--corner-radius-sm: 8px;
--corner-radius-lg: 16px;
```

#### Typography

```css
/* Label Medium */
font-family: 'Inter', sans-serif;
font-weight: 600;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.5px;
```

### 3. State-Specific Styling

#### Primary Variant

| State | Background | Text Color | Border | Padding (X/Y) |
|-------|-----------|-----------|--------|---------------|
| Default | #4e72a8 | #fafaf8 | None | 16px / 12px |
| Hover | #3b5a86 | #fafaf8 | None | 16px / 12px |
| Pressed | #2b4163 | #fafaf8 | None | 16px / 12px |
| Focus | #3b5a86 | #fafaf8 | 2px #ad4fc4 outline (-4px offset) | 16px / 12px |
| Disabled | #a3a39d | #3f3f3b | None | 16px / 12px |

**Border Radius:** 2px (--corner-radius-xxs)

#### Outlined Variant

| State | Background | Text Color | Border | Padding (X/Y) |
|-------|-----------|-----------|--------|---------------|
| Default | Transparent | #fafaf8 | 2px solid #3b5a86 | 16px / 12px |
| Hover | #0b0b0a | #2b4163 | 2px solid #2b4163 | 16px / 12px |
| Pressed | #0b0b0a | #fafaf8 | 2px solid #cbd9ea | 16px / 12px |
| Focus | #0b0b0a | #2b4163 | 2px solid #2b4163 + focus outline (-6px offset) | 16px / 12px |
| Disabled | Transparent | #545450 | 2px solid #cbd9ea | 16px / 12px |

**Border Radius:** 2px (--corner-radius-xxs)  
**Focus Outline:** 2px #ad4fc4 with -6px offset

#### Text Variant

| State | Background | Text Color | Border | Padding |
|-------|-----------|-----------|--------|---------|
| Default | Transparent | #0b0b0a | None | 4px (all sides) |
| Hover | #d5d5cf | #0b0b0a | None | 4px (all sides) |
| Pressed | #f4f4f1 | #0b0b0a | None | 4px (all sides) |
| Focus | #d5d5cf | #0b0b0a | 2px #ad4fc4 outline (-4px offset) | 4px (all sides) |
| Disabled | Transparent | #545450 | None | 4px (all sides) |

**Border Radius (Default/Disabled):** 16px (--corner-radius-lg)  
**Border Radius (Hover/Pressed/Focus):** 4px (--corner-radius-xs)

### 4. Icon Styling

#### Icon Sizes
- Leading Icon: 22px × 22px
- Trailing Icon: 22px-24px × 22px-24px

#### Icon Colors by Variant and State

**Primary Variant:**
- Default, Hover, Pressed, Focus: #fafaf8 (white)
- Disabled: #3f3f3b (gray)

**Outlined Variant:**
- Default: #fafaf8 (white)
- Hover, Focus: #3b5a86 (blue)
- Pressed: #fafaf8 (white)
- Disabled: #a3a39d (gray)

**Text Variant:**
- Default, Hover, Pressed, Focus: #0b0b0a (black)
- Disabled: #a3a39d (gray)

#### Icon Spacing
- Gap between label and icons: 0px (icons have internal padding via label container)
- Label container padding: 8px horizontal, 0px vertical

---

## Implementation Instructions

### Step 1: Analyze Project Structure

Before implementing, identify:
1. **Technology stack** (React, Vue, Svelte, etc.)
2. **Styling approach** (CSS Modules, Styled Components, Tailwind, plain CSS, etc.)
3. **Component location** (where UI components live)
4. **Design token system** (if exists)
5. **Naming conventions** (PascalCase, kebab-case, etc.)

### Step 2: Create Component File

Create the button component in the appropriate directory:
```bash
# Example paths - adapt to your project:
# src/components/Button.tsx
# components/ui/Button.tsx
# src/components/common/Button.tsx
```

### Step 3: Implement Base Component

Create a Button component with:

1. **Props interface** matching the specifications above
2. **State management** for interactive states (hover, focus, pressed)
3. **Conditional rendering** for icons
4. **Variant logic** for all three styles
5. **Accessibility** attributes

Example structure:
```tsx
export function Button({
  label = 'Label',
  variant = 'primary',
  leadingIcon,
  trailingIcon,
  showLeadingIcon = false,
  showTrailingIcon = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  // Implementation here
}
```

### Step 4: Design Tokens Integration

**Option A: Project has existing tokens**
- Map Figma tokens to existing design system
- Use semantic naming from your project

**Option B: Create new tokens file**
```typescript
// tokens/colors.ts or similar
export const buttonTokens = {
  surface: {
    action: {
      default: '#4e72a8',
      hover: '#3b5a86',
      pressed: '#2b4163',
      disabled: '#a3a39d',
    },
    // ... rest of tokens
  },
  // ...
};
```

### Step 5: Style Implementation

Convert to your project's styling method:

**If using CSS Modules:**
```css
/* Button.module.css */
.button {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  /* ... */
}

.primary { /* ... */ }
.outlined { /* ... */ }
.text { /* ... */ }
```

**If using Styled Components:**
```tsx
const StyledButton = styled.button<{ variant: string }>`
  font-family: 'Inter', sans-serif;
  /* ... */
  ${props => props.variant === 'primary' && css`
    background-color: var(--colors-surface-action-default);
  `}
`;
```

**If using Tailwind (only if already in project):**
```tsx
const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  outlined: 'border-2 border-blue-600 hover:bg-black',
  text: 'hover:bg-gray-200',
};
```

**DO NOT install Tailwind** unless instructed. Convert to existing styling method.

### Step 6: Icon Handling

1. Accept custom icon components via props
2. Render icons conditionally based on flags
3. Apply proper sizing (22-24px)
4. Apply state-based colors

```tsx
{showLeadingIcon && leadingIcon && (
  <span className="icon-leading">
    {leadingIcon}
  </span>
)}
```

### Step 7: State Management

Implement proper state handling:

```tsx
const [isFocused, setIsFocused] = useState(false);
const [isPressed, setIsPressed] = useState(false);

const handleMouseDown = () => setIsPressed(true);
const handleMouseUp = () => setIsPressed(false);
const handleFocus = () => setIsFocused(true);
const handleBlur = () => setIsFocused(false);
```

Apply appropriate classes/styles based on state.

### Step 8: Accessibility

Ensure the component includes:

- ✅ Proper `disabled` attribute
- ✅ `type` attribute (button, submit, reset)
- ✅ Focus visible styles (2px #ad4fc4 outline)
- ✅ Keyboard navigation support
- ✅ `cursor: pointer` on hover (non-disabled)
- ✅ `cursor: not-allowed` on disabled
- ✅ ARIA attributes if needed

### Step 9: Create Usage Examples

Document usage in comments or separate file:

```tsx
// Basic primary button
<Button variant="primary" label="Submit" />

// Outlined with leading icon
<Button 
  variant="outlined" 
  label="Download" 
  leadingIcon={<DownloadIcon />}
  showLeadingIcon 
/>

// Text with trailing icon
<Button 
  variant="text" 
  label="Next" 
  trailingIcon={<ArrowRightIcon />}
  showTrailingIcon
/>

// Disabled state
<Button 
  variant="primary" 
  label="Disabled" 
  disabled 
/>

// With both icons
<Button 
  variant="primary" 
  label="Download" 
  leadingIcon={<DownloadIcon />}
  trailingIcon={<DownloadIcon />}
  showLeadingIcon
  showTrailingIcon
/>

// Custom click handler
<Button 
  variant="primary" 
  label="Click me" 
  onClick={() => console.log('Clicked!')}
/>
```

---

## Validation Checklist

Before considering the implementation complete, verify:

- [ ] All 3 style variants (primary, outlined, text) render correctly
- [ ] All 5 states work properly:
  - [ ] Default state
  - [ ] Hover state (with cursor change)
  - [ ] Pressed/Active state
  - [ ] Focus state (with visible outline)
  - [ ] Disabled state (non-interactive)
- [ ] Icons can be shown/hidden independently via props
- [ ] Leading and trailing icons render correctly
- [ ] Focus outline appears with correct color (#ad4fc4) and offset
- [ ] Disabled state prevents all interaction
- [ ] Design tokens match Figma specifications exactly
- [ ] Typography matches (Inter semibold, 16px, 24px line-height, -0.5px tracking)
- [ ] Spacing and padding match for all states
- [ ] Border radius matches per variant and state
- [ ] Component is fully typed (if using TypeScript)
- [ ] Component follows project's existing patterns and conventions
- [ ] No Tailwind dependency added (unless project already uses it)
- [ ] Styles converted to project's styling system

---

## Critical Implementation Notes

### Border Radius Variations
- **Primary & Outlined:** Always 2px
- **Text:** 16px for default/disabled, 4px for hover/pressed/focus

### Focus Outline Offset
- **Primary & Text:** -4px offset from button edge
- **Outlined:** -6px offset from button edge (accounts for 2px border)

### Text Variant State Transitions
The text variant changes border-radius on interaction:
- Start: 16px (rounded)
- Hover/Press/Focus: 4px (slightly rounded)

### Icon Color Inheritance
Icons should receive color via CSS/styling, not hardcoded in icon components. This allows state-based color changes.

### Cursor Behavior
- Enabled buttons: `cursor: pointer` on hover
- Disabled buttons: `cursor: not-allowed`

### Z-Index for Focus Outline
Ensure focus outline is visible above other elements if needed.

---

## Example Default Icon (Download)

If you need a default icon for testing, use a simple download icon SVG:

```tsx
const DownloadIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path 
      d="M11 15L6 10L7.4 8.55L10 11.15V3H12V11.15L14.6 8.55L16 10L11 15ZM4 19C3.45 19 2.979 18.804 2.587 18.412C2.195 18.02 1.99934 17.5493 2 17V14H4V17H18V14H20V17C20 17.55 19.804 18.021 19.412 18.413C19.02 18.805 18.5493 19.0007 18 19H4Z" 
      fill="currentColor"
    />
  </svg>
);
```

---

## Getting Started

1. Read through this entire guide
2. Analyze your project structure and styling approach
3. Create the component file in the appropriate location
4. Implement the component following your project's patterns
5. Convert all Figma design tokens to your styling system
6. Test all variants and states
7. Verify accessibility
8. Document usage examples

**Remember:** Do NOT install new dependencies (like Tailwind) unless explicitly instructed. Work with the existing project setup.

---

## Questions to Consider

Before implementing, answer these:

1. Does the project use TypeScript or JavaScript?
2. What styling system is in place?
3. Are there existing design tokens/variables?
4. What is the component file naming convention?
5. Are there existing button or UI component patterns to follow?
6. Should this component integrate with existing form libraries?
7. Are there any project-specific accessibility requirements?

---

**You're ready to implement!** Follow this guide step-by-step and adapt to your project's specific needs.
