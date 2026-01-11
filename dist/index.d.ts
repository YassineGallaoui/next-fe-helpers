export declare interface BrowserInfo {
    engine: string;
    gpu: string;
}

export declare interface BrowserStatsProps {
    browserInfo: BrowserInfo;
}

export declare interface DeviceInfo {
    touchPoints: string;
    hover: string;
    orientation: string;
}

export declare interface DeviceStatsProps {
    deviceInfo: DeviceInfo;
}

export declare interface DisplayInfo {
    screen: string;
    viewport: string;
    available: string;
    aspectRatio: string;
    dpr: number;
}

export declare interface DisplayStatsProps {
    displayInfo: DisplayInfo;
}

export declare interface FrameInfo {
    frameDrops: number;
    fps: number;
    animationFrameJitter: number;
}

export declare const GridHelper: React.FC<GridHelperProps>;

declare interface GridHelperProps {
    show?: boolean;
    columnsColor?: string;
    columnsBorderColor?: string;
    columnsBorderWidth?: string;
    columnsBorderStyle?: string;
}

export declare interface InfoIconProps {
    tooltip: string;
    children: React.ReactNode;
}

export declare interface RenderingStatsProps {
    frameInfo: FrameInfo;
}

export declare interface ScrollInfo {
    position: number;
    percent: number;
    pageHeight: number;
}

export declare interface ScrollStatsProps {
    scrollInfo: ScrollInfo;
}

export declare interface StatLineProps {
    label: string;
    value: React.ReactNode;
    tooltip?: string;
}

export declare interface StatsControlsProps {
    position: StatsPosition;
    onPositionChange: (position: StatsPosition) => void;
    onClose: () => void;
}

export declare interface StatSectionProps {
    title: string;
    children: React.ReactNode;
}

export declare const StatsHelper: React.FC<StatsHelperProps>;

declare interface StatsHelperProps {
    show?: boolean;
}

export declare type StatsPosition = 'tl' | 'tr' | 'bl' | 'br';

export declare interface ThemeInfo {
    colorScheme: string;
    contrast: string;
    reducedMotion: string;
}

export declare interface ThemeStatsProps {
    themeInfo: ThemeInfo;
}

export { }
