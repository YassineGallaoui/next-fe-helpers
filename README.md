# Next.js FE Helpers

Grid system + stats overlay. For Next.js projects.

## Installation

```bash
npm install next-fe-helpers
```

## Setup

1. Import the CSS file in your Next.js project (usually in `layout.tsx` or a top-level component).
2. Import the desired components (`GridHelper`, `StatsHelper`).

```tsx
import 'next-fe-helpers/dist/style.css';
import { GridHelper, StatsHelper } from 'next-fe-helpers';
```

## Components

### StatsHelper

A component that displays the current viewport dimensions, performance metrics, and device accessibility info.

**Features:**
- Real-time viewport dimensions (screen, viewport, available)
- Performance metrics (FPS, Frame Drops, Jitter)
- Scroll position and percentage
- Theme & Accessibility info (Color scheme, Contrast, Reduced Motion)
- Browser & Device info
- Draggable/Positionable
- Toggle with 'Alt + S'

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `show` | `boolean` | `false` | Initial visibility state of the helper. |

### GridHelper

A component that provides a visual grid overlay for layout development, paired with a Bootstrap-style 12-column grid system.

**Features:**
- Visual column overlay
- Toggle with 'Alt + G'
- Customizable column colors and borders via props
- Fully responsive 12-column grid system

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `show` | `boolean` | `false` | Initial visibility state of the helper. |
| `columnsColor` | `string` | `undefined` | CSS color for the column overlay background. |
| `columnsBorderColor` | `string` | `undefined` | CSS color for the column borders. |
| `columnsBorderWidth` | `string` | `undefined` | Width of the column borders (e.g., "1px"). |
| `columnsBorderStyle` | `string` | `undefined` | Style of the column borders (e.g., "solid", "dashed"). |

## Grid System Classes

This package includes a robust, responsive 12-column grid system modeled after Bootstrap.

### Container
*   `.container`: A responsive fixed-width container. Max-widths:
    *   `sm`: 540px
    *   `md`: 720px
    *   `lg`: 960px
    *   `xl`: 1140px

### Row
*   `.row`: Wrapper for columns. Creates the grid context.

### Columns
The grid system uses a 12-column layout.
*   `.col-{1-12}`: Spans *n* columns across all viewports.
*   `.sm-col-{1-4}`: Spans *n* columns on small screens.
*   `.md-col-{1-8}`: Spans *n* columns on medium screens.
*   `.lg-col-{1-12}`: Spans *n* columns on large screens.

### Offsets
Move columns to the right.
*   `.offset-{1-12}`: Default offset.
*   `.sm-offset-{1-4}`: Offset on small screens.
*   `.md-offset-{1-8}`: Offset on medium screens.
*   `.lg-offset-{1-12}`: Offset on large screens.

### Sub-grids
Inherit the parent grid's columns for nested layouts.
*   `.sub-grid`: Default sub-grid.
*   `.sm-sub-grid`, `.md-sub-grid`, `.lg-sub-grid`: Responsive sub-grids.

### Utility Classes
*   `.bg-green`, `.bg-yellow`, `.bg-blue`: Helper background colors for debugging layout.

## Usage Example

`layout.tsx` file for global usage:

```tsx
import 'next-fe-helpers/dist/style.css';
import { GridHelper, StatsHelper } from 'next-fe-helpers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GridHelper columnsColor="rgba(255, 0, 0, 0.1)" />
        <StatsHelper show={true} />
        {children}
      </body>
    </html>
  );
}
```

## Keyboard Shortcuts

- **Alt + S**: Toggle StatsHelper visibility
- **Alt + G**: Toggle GridHelper visibility

## Created and tested on

- React >=18.0.0
- Next.js >=13.0.0

## License

ISC

## Author

Yassine Gallaoui