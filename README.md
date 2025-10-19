# Next.js FE Helpers

Grid system + stats overlay. For Next.js projects.

## Installation

```bash
npm install next-fe-helpers
```

## Setup

Import the one or both the components in your Next.js project.  
Import the CSS file in your Next.js project.  
Add this import line to your `layout.tsx` or in a component which you are importing in the layout file, for example `FEHelpers.tsx`:

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
- Auto-updates

### GridHelper

A component that provides a visual grid overlay for layout development.

**Features:**
- Visual grid overlay
- Toggles with 'G' key
- Bootstrap-style container and row structure
- Responsive grid (by default: 4 columns on mobile, 8 on tablet, 12 on desktop)


### Usage example

`layout.tsx` file
```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FEHelpers />
        {/* Your app content */}
      </body>
    </html>
  );
}
```

`FEHelpers.tsx` file
```tsx
"use client";

import { GridHelper, StatsHelper } from "next-fe-helpers";
import "next-fe-helpers/dist/style.css";

const FEHelpers = () => {
  return (
    <>
      <GridHelper />
      <StatsHelper />
      {/* <SomeOtherHelperComponent /> */}
    </>
  );
};

export default FEHelpers;
```

## Keyboard Shortcuts

- **S key**: Toggle StatsHelper visibility
- **G key**: Toggle GridHelper visibility

## Created and tested on

- React >=18.0.0
- Next.js >=13.0.0

## License

ISC

## Author

Yassine Gallaoui