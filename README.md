# Next.js FE Helpers

A collection of development helpers for Next.js applications including grid overlay and stats display components.

## Installation

```bash
npm install next-fe-helpers
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

## CSS Classes

The components use the following CSS classes that you should style in your application:

### StatsHelper Classes
- `.stats`: Main stats container
- `.stats.show`: Visible state for stats

### GridHelper Classes
- `.grid-overlay`: Main overlay container
- `.grid-overlay.show`: Visible state for grid
- `.container`: Grid container
- `.row`: Grid row

## Example CSS

```css
/* StatsHelper styles */
.stats {
  position: fixed;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.stats.show {
  opacity: 1;
}

.stats span {
  display: block;
}

/* GridHelper styles */
.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.grid-overlay.show {
  opacity: 1;
}

.grid-overlay .container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent calc(8.333% - 1px),
    rgba(255, 0, 0, 0.1) calc(8.333% - 1px),
    rgba(255, 0, 0, 0.1) 8.333%
  );
}
```

## Development

This package is designed specifically for development environments. The components include console.log statements and are not optimized for production use.

## License

ISC

## Repository

[GitHub Repository](https://github.com/YassineGallaoui/next-fe-helpers)