# Next.js FE Helpers

A collection of development helpers for Next.js applications including grid overlay and stats display components.

## Installation

```bash
npm install next-fe-helpers
```

## Setup

Import the CSS file in your Next.js project. Add this to your `_app.tsx` or `layout.tsx`:

```tsx
import 'next-fe-helpers/dist/style.css';
```

## Components

### StatsHelper

A component that displays the current viewport dimensions and aspect ratio. Perfect for responsive design development.

**Features:**
- Shows window width x height
- Displays aspect ratio
- Toggles with 'S' key
- Auto-updates on window resize

**Usage:**
```tsx
import { StatsHelper } from 'next-fe-helpers';

export default function MyApp() {
  return (
    <div>
      {/* Your app content */}
      <StatsHelper />
    </div>
  );
}
```

### GridHelper

A component that provides a visual grid overlay for layout development.

**Features:**
- Visual grid overlay
- Toggles with 'G' key
- Bootstrap-style container and row structure
- Responsive grid (4 columns on mobile, 8 on tablet, 12 on desktop)

**Usage:**
```tsx
import { GridHelper } from 'next-fe-helpers';

export default function MyApp() {
  return (
    <div>
      {/* Your app content */}
      <GridHelper />
    </div>
  );
}
```

### Using Both Components

```tsx
import { StatsHelper, GridHelper } from 'next-fe-helpers';
import 'next-fe-helpers/dist/style.css';

export default function MyApp() {
  return (
    <div>
      {/* Your app content */}
      <StatsHelper />
      <GridHelper />
    </div>
  );
}
```

## Keyboard Shortcuts

- **S key**: Toggle StatsHelper visibility
- **G key**: Toggle GridHelper visibility

## Requirements

- React >=18.0.0
- Next.js >=13.0.0

## Styling

The components come with pre-compiled CSS that includes:

### StatsHelper
- Fixed positioning in the top-right corner
- Dark overlay with blur effect
- Monospace font for consistent display
- Responsive design

### GridHelper
- Full-screen overlay
- Color-coded column visualization
- Responsive breakpoints (mobile: 4 cols, tablet: 8 cols, desktop: 12 cols)
- Semi-transparent background

The CSS is automatically included when you import the stylesheet. All styles are scoped to prevent conflicts with your application.

## Development

This package is designed specifically for development environments. The components include helpful features for layout and responsive design testing.

## License

ISC

## Repository

[GitHub Repository](https://github.com/YassineGallaoui/next-fe-helpers)