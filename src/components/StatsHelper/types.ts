// Core data interfaces
export interface FrameInfo {
  frameDrops: number;
  fps: number;
  animationFrameJitter: number;
}

export interface ScrollInfo {
  position: number;
  percent: number;
  pageHeight: number;
}

export interface ThemeInfo {
  colorScheme: string;
  contrast: string;
  reducedMotion: string;
}

export interface DeviceInfo {
  touchPoints: string;
  hover: string;
  orientation: string;
}

export interface DisplayInfo {
  screen: string;
  viewport: string;
  available: string;
  aspectRatio: string;
  dpr: number;
}

export interface BrowserInfo {
  engine: string;
  gpu: string;
}

// Position type
export type StatsPosition = 'tl' | 'tr' | 'bl' | 'br';

// Component prop interfaces
export interface InfoIconProps {
  tooltip: string;
  children: React.ReactNode;
}

export interface StatLineProps {
  label: string;
  value: React.ReactNode;
  tooltip?: string;
}

export interface StatSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface StatsControlsProps {
  position: StatsPosition;
  onPositionChange: (position: StatsPosition) => void;
  onClose: () => void;
}

// Stats component props
export interface DisplayStatsProps {
  displayInfo: DisplayInfo;
}

export interface RenderingStatsProps {
  frameInfo: FrameInfo;
}

export interface ScrollStatsProps {
  scrollInfo: ScrollInfo;
}

export interface ThemeStatsProps {
  themeInfo: ThemeInfo;
}

export interface DeviceStatsProps {
  deviceInfo: DeviceInfo;
}

export interface BrowserStatsProps {
  browserInfo: BrowserInfo;
}

// Main StatsHelper props
export interface StatsHelperProps {
  show?: boolean;
}