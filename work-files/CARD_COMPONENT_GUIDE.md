# Card Component Implementation Guide

## Overview
Implement a reusable Card component based on the Figma design with interactive states and configurable content.

**Figma Reference:** https://www.figma.com/design/rKffzKIeP4ZlkTM6GeClpq/IXI-Labs-website-v2?node-id=2062-1223

---

## Component Specifications

### Card Structure

The card is a content container with the following elements:
1. **Icon** - Top decorative icon (24px × 24px)
2. **Title** - Heading text (heading/md typography)
3. **Description** - Primary description text (body/sm typography)
4. **Outcome Description** - Secondary description text (body/sm typography)
5. **Learn More Link** - Text link with arrow icon (label/sm typography)

### States

#### 1. Default State
- Light background (#fafaf8)
- Static appearance

#### 2. Hover State
- Slightly darker background (#f4f4f1)
- Interactive feedback

---

## Implementation Requirements

### 1. Component Props

```typescript
interface CardProps {
  // Content
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  outcomeDescription?: string;
  linkText?: string;
  
  // Interaction
  onLearnMoreClick?: () => void;
  href?: string; // If card should be a link
  
  // Styling
  className?: string;
  
  // State (controlled via hover interaction)
  // state: 'default' | 'hover'
}
```

### 2. Design Tokens to Extract

Map these Figma variables to your project's design system:

#### Colors

```css
/* Surface Colors */
--colors-surface-01: #fafaf8;
--colors-surface-02: #f4f4f1;

/* Text Colors */
--colors-text-01: #0b0b0a;
--colors-text-link: #04070b;

/* Outline/Border Colors */
--colors-outline-01: #d5d5cf;
```

#### Spacing

```css
--spacing-none: 0px;
--spacing-xxs: 4px;
--spacing-md: 16px;
--spacing-lg: 20px;
--spacing-3xl: 40px;
```

#### Border Radius

```css
--corner-radius-lg: 16px;
```

#### Typography

**Heading Medium (Title)**
```css
font-family: 'Inter', sans-serif;
font-weight: 700;
font-size: 24px;
line-height: 28px;
letter-spacing: -1px;
```

**Body Small (Descriptions)**
```css
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0px;
```

**Label Small (Learn More Link)**
```css
font-family: 'Inter', sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.5px;
```

### 3. Layout Specifications

#### Card Dimensions
- **Width:** 100% — in grid layouts cards occupy exactly 1/4 of the container at desktop (grid columns are repeat(4, 1fr))
- **Height:** 255px (minimum)
- **Padding:** 40px (top/bottom), 20px (left/right)
- **Border:** 1px solid #d5d5cf
- **Border radius:** 0px (cards are squared; no rounding)

#### Internal Spacing
- Gap between icon and title: 16px
- Gap between title and description: 16px
- Gap between description and outcome description: 16px
- Gap between content and "Learn more" link: 10px

#### Content Area
- Main content container uses flex column layout
- All text elements span full width
- Content is left-aligned

### 4. State-Specific Styling

| State | Background | Border | Interaction |
|-------|-----------|--------|-------------|
| Default | #fafaf8 | 1px solid #d5d5cf | Static |
| Hover | #f4f4f1 | 1px solid #d5d5cf | Cursor: pointer (if interactive) |

### 5. Icon Specifications

#### Top Icon (Atom)
- Size: 24px × 24px
- Color: #0b0b0a (black)
- Position: Top of card content

#### Arrow Icon (Learn More)
- Size: 16px × 16px
- Color: #04070b (dark)
- Position: Right of "Learn more" text
- Type: Arrow right

### 6. Learn More Link

The "Learn more" section is a text link with:
- Label: "Learn more" (configurable)
- Arrow icon: Right-pointing arrow
- Typography: Label Small (14px, semibold, -0.5px tracking)
- Padding: 4px vertical
- Border radius: 16px
- No background by default
- Optional hover state (can add underline or color change)

---

## Implementation Instructions

### Step 1: Analyze Project Structure

Before implementing, identify:
1. **Technology stack** (React, Vue, Svelte, etc.)
2. **Styling approach** (CSS Modules, Styled Components, Tailwind, plain CSS, etc.)
3. **Component location** (where UI components live)
4. **Design token system** (if exists)
5. **Icon system** (how icons are handled in the project)
6. **Link/navigation system** (React Router, Next.js Link, etc.)

### Step 2: Create Component File

Create the card component in the appropriate directory:
```bash
# Example paths - adapt to your project:
# src/components/Card.tsx
# components/ui/Card.tsx
# src/components/common/Card.tsx
```

### Step 3: Implement Base Component

Create a Card component with:

1. **Props interface** matching the specifications above
2. **Hover state management** for visual feedback
3. **Conditional rendering** for all content sections
4. **Icon rendering** for top icon and arrow
5. **Link handling** (click handler or href)

Example structure:
```tsx
export function Card({
  icon,
  title = 'Title',
  description = 'Description',
  outcomeDescription = 'Outcome description',
  linkText = 'Learn more',
  onLearnMoreClick,
  href,
  className = '',
  ...props
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
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
export const cardTokens = {
  surface: {
    default: '#fafaf8',
    hover: '#f4f4f1',
  },
  border: '#d5d5cf',
  text: {
    primary: '#0b0b0a',
    link: '#04070b',
  },
};
```

### Step 5: Style Implementation

Convert to your project's styling method:

**If using CSS Modules:**
```css
/* Card.module.css */
.card {
  width: 411px;
  min-height: 255px;
  padding: 40px 20px;
  background: var(--colors-surface-01, #fafaf8);
  border: 1px solid var(--colors-outline-01, #d5d5cf);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: background-color 0.2s ease;
}

.card:hover {
  background: var(--colors-surface-02, #f4f4f1);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.title {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -1px;
  color: var(--colors-text-01, #0b0b0a);
}

.description,
.outcomeDescription {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  color: var(--colors-text-01, #0b0b0a);
}

.learnMore {
  display: flex;
  align-items: center;
  gap: 0;
  padding: 4px 0;
  border-radius: 16px;
  cursor: pointer;
}

.learnMoreText {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: var(--colors-text-link, #04070b);
}

.icon {
  width: 24px;
  height: 24px;
}

.arrowIcon {
  width: 16px;
  height: 16px;
}
```

**If using Styled Components:**
```tsx
const StyledCard = styled.div<{ isHovered: boolean }>`
  width: 411px;
  min-height: 255px;
  padding: 40px 20px;
  background: ${props => props.isHovered 
    ? 'var(--colors-surface-02, #f4f4f1)' 
    : 'var(--colors-surface-01, #fafaf8)'};
  border: 1px solid var(--colors-outline-01, #d5d5cf);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: background-color 0.2s ease;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Title = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -1px;
  color: var(--colors-text-01, #0b0b0a);
  margin: 0;
`;

const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  color: var(--colors-text-01, #0b0b0a);
  margin: 0;
`;

const LearnMore = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  border-radius: 16px;
  cursor: pointer;
`;

const LearnMoreText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: var(--colors-text-link, #04070b);
`;
```

**If using Tailwind (only if already in project):**
```tsx
const Card = () => (
  <div className="w-[411px] min-h-[255px] p-10 px-5 bg-white hover:bg-gray-50 border border-gray-300 flex flex-col gap-2.5">
    {/* Content */}
  </div>
);
```

**DO NOT install Tailwind** unless instructed. Convert to existing styling method.

### Step 6: Icon Handling

1. **Top Icon**
   - Accept custom icon via `icon` prop
   - Provide default Atom icon for demonstration
   - Size: 24px × 24px
   - Color: #0b0b0a

2. **Arrow Icon**
   - Built-in right arrow for "Learn more" link
   - Size: 16px × 16px
   - Color: #04070b

```tsx
// Default Atom Icon (placeholder)
const AtomIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path 
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" 
      fill="currentColor"
    />
  </svg>
);

// Arrow Right Icon
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path 
      d="M8 3L13 8L8 13M13 8H3" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);
```

### Step 7: Hover State Management

Implement hover state for visual feedback:

```tsx
const [isHovered, setIsHovered] = useState(false);

return (
  <div 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className={/* apply styles based on isHovered */}
  >
    {/* Card content */}
  </div>
);
```

### Step 8: Link Handling

Support both click handlers and href links:

```tsx
const handleLearnMoreClick = (e: React.MouseEvent) => {
  if (onLearnMoreClick) {
    e.preventDefault();
    onLearnMoreClick();
  }
};

// In render:
{href ? (
  <a href={href} onClick={handleLearnMoreClick}>
    {/* Learn more content */}
  </a>
) : (
  <button onClick={onLearnMoreClick}>
    {/* Learn more content */}
  </button>
)}
```

### Step 9: Create Usage Examples

Document usage in comments or separate file:

```tsx
// Basic card
<Card 
  title="Our Services"
  description="We provide comprehensive solutions"
  outcomeDescription="Resulting in 50% efficiency improvement"
/>

// Card with custom icon
<Card 
  icon={<CustomIcon />}
  title="Innovation"
  description="Cutting-edge technology"
  outcomeDescription="Leading market position"
/>

// Card with click handler
<Card 
  title="Get Started"
  description="Begin your journey today"
  outcomeDescription="Join 1000+ satisfied customers"
  linkText="Start now"
  onLearnMoreClick={() => navigate('/signup')}
/>

// Card as link
<Card 
  title="Documentation"
  description="Comprehensive guides and tutorials"
  outcomeDescription="Everything you need to know"
  href="/docs"
/>

// Card with all custom content
<Card 
  icon={<RocketIcon />}
  title="Launch Your Product"
  description="Fast deployment and scaling"
  outcomeDescription="From idea to production in days"
  linkText="View details"
  onLearnMoreClick={handleViewDetails}
/>
```

---

## Implementation Structure

### Component Hierarchy

```
Card
├── Content Container
│   ├── Icon (24×24)
│   ├── Title (heading/md)
│   ├── Description (body/sm)
│   └── Outcome Description (body/sm)
└── Learn More Link
    ├── Link Text (label/sm)
    └── Arrow Icon (16×16)
```

### Layout Flow

```
┌─────────────────────────────────────────┐
│  [padding: 40px/20px]                   │
│                                         │
│  🔷 Icon (24×24)                        │
│                                         │
│  [gap: 16px]                            │
│                                         │
│  Title (24px, bold, -1px)               │
│                                         │
│  [gap: 16px]                            │
│                                         │
│  Description (14px, regular)            │
│                                         │
│  [gap: 16px]                            │
│                                         │
│  Outcome description (14px, regular)    │
│                                         │
│  [gap: 10px]                            │
│                                         │
│  Learn more → (14px, semibold, -0.5px)  │
│                                         │
└─────────────────────────────────────────┘
```

---

## Validation Checklist

Before considering the implementation complete, verify:

- [ ] Card renders with correct dimensions (411px × 255px min)
- [ ] Both states work properly:
  - [ ] Default state (light background)
  - [ ] Hover state (darker background)
- [ ] All content sections render:
  - [ ] Icon (top, 24×24)
  - [ ] Title (heading style)
  - [ ] Description (body style)
  - [ ] Outcome description (body style)
  - [ ] Learn more link with arrow
- [ ] Spacing matches design:
  - [ ] Padding: 40px vertical, 20px horizontal
  - [ ] Gap between content items: 16px
  - [ ] Gap before learn more: 10px
- [ ] Typography matches:
  - [ ] Title: Inter bold, 24px, 28px line-height, -1px tracking
  - [ ] Descriptions: Inter regular, 14px, 20px line-height
  - [ ] Learn more: Inter semibold, 14px, 20px line-height, -0.5px tracking
- [ ] Border is correct: 1px solid #d5d5cf
- [ ] Background transitions smoothly on hover
- [ ] Icons are properly sized and colored
- [ ] Link/button functionality works correctly
- [ ] Component is fully typed (if using TypeScript)
- [ ] Component follows project's existing patterns
- [ ] No Tailwind dependency added (unless project already uses it)
- [ ] Styles converted to project's styling system
- [ ] Content is configurable via props

---

## Responsive Considerations

While the Figma design shows fixed dimensions (411px), consider:

1. **Fixed Width Approach**
   - Keep card at 411px for consistency
   - Use in grid layouts (e.g., 3 cards per row on desktop)

2. **Flexible Width Approach**
   - Make width 100% with max-width: 411px
   - Allow card to shrink on smaller screens
   - Maintain aspect ratio and padding

3. **Mobile Adaptations**
   - Consider reducing padding on mobile (e.g., 24px/16px)
   - Stack cards vertically
   - Possibly reduce font sizes slightly

**Recommendation:** Implement fixed width initially as designed, then add responsive behavior based on your project's needs.

---

## Accessibility

Ensure the component includes:

- ✅ Semantic HTML (use `<article>` or `<div>` for card)
- ✅ Heading hierarchy (Title should be `<h2>`, `<h3>`, or `<h4>` based on context)
- ✅ Proper link semantics for "Learn more"
- ✅ If using onClick without href, ensure button semantics
- ✅ Color contrast meets WCAG AA standards (all text meets this)
- ✅ Hover states visible to sighted users
- ✅ Focus states for keyboard navigation (add focus ring to learn more link)
- ✅ Alt text for icon if it conveys meaning (decorative otherwise)

---

## Advanced Features (Optional)

Consider adding these enhancements based on project needs:

### 1. Click Handler on Entire Card
Make the entire card clickable, not just "Learn more":

```tsx
<Card 
  onClick={() => navigate('/details')}
  className="cursor-pointer"
/>
```

### 2. Loading State
Show skeleton or loading indicator:

```tsx
<Card isLoading={true} />
```

### 3. Different Icon Sizes
Support small, medium, large icon variants:

```tsx
<Card iconSize="small" /> // 20px
<Card iconSize="medium" /> // 24px (default)
<Card iconSize="large" /> // 32px
```

### 4. Badge/Tag
Add optional badge for categories:

```tsx
<Card 
  badge="New"
  title="Latest Feature"
/>
```

### 5. Image Support
Replace icon with image:

```tsx
<Card 
  image="/path/to/image.jpg"
  title="Visual Content"
/>
```

---

## Critical Implementation Notes

### Border and Background
- Border stays consistent across states (1px solid #d5d5cf)
- Only background color changes on hover
- Transition should be smooth (0.2s ease)

### Text Overflow
- All text elements should handle overflow gracefully
- Consider adding `overflow: hidden` and `text-overflow: ellipsis` for long content
- Or allow text to wrap naturally with `white-space: pre-wrap`

### Icon Consistency
- Top icon should be consistently sized (24×24)
- Arrow icon should be consistently sized (16×16)
- Icons should inherit color or use specified color

### Learn More Positioning
- "Learn more" link has 10px gap from content above (not 16px like other gaps)
- Arrow icon has no gap from text (they're inline)
- Entire link area is clickable

### Z-Index Considerations
- Cards may be used in grids or lists
- No z-index needed unless cards overlap or have shadows

---

## Example Default Icons

### Atom Icon (Top)
```tsx
const AtomIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M4 12C4 12 6 8 12 8C18 8 20 12 20 12" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);
```

### Arrow Right Icon (Learn More)
```tsx
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path 
      d="M3 8H13M13 8L9 4M13 8L9 12" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
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
6. Test both states (default and hover)
7. Verify all content sections render correctly
8. Test link/button functionality
9. Check accessibility with keyboard navigation
10. Document usage examples

**Remember:** Do NOT install new dependencies (like Tailwind) unless explicitly instructed. Work with the existing project setup.

---

## Questions to Consider

Before implementing, answer these:

1. Does the project use TypeScript or JavaScript?
2. What styling system is in place?
3. Are there existing design tokens/variables?
4. What is the component file naming convention?
5. How are icons handled in the project?
6. What navigation/routing system is used?
7. Should cards be clickable themselves or just the "Learn more" link?
8. Will cards be used in grids? If so, what breakpoints?
9. Are there existing card patterns to follow or extend?

---

**You're ready to implement!** Follow this guide step-by-step and adapt to your project's specific needs.
