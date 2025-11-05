"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./styles.scss";
import type {
  BrowserInfo,
  BrowserStatsProps,
  DeviceInfo,
  DeviceStatsProps,
  DisplayInfo,
  DisplayStatsProps,
  FrameInfo,
  InfoIconProps,
  RenderingStatsProps,
  ScrollInfo,
  ScrollStatsProps,
  StatLineProps,
  StatSectionProps,
  StatsControlsProps,
  StatsPosition,
  ThemeInfo,
  ThemeStatsProps
} from "./types";

// Sub-components
const InfoIcon: React.FC<InfoIconProps> = ({ tooltip, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const iconRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      
      // Create a temporary tooltip to measure its dimensions
      const tempTooltip = document.createElement('div');
      tempTooltip.className = 'stats-tooltip';
      tempTooltip.textContent = tooltip;
      tempTooltip.style.visibility = 'hidden';
      tempTooltip.style.position = 'fixed';
      document.body.appendChild(tempTooltip);
      
      const tooltipRect = tempTooltip.getBoundingClientRect();
      
      // Get the stats container to determine positioning context
      const statsContainer = iconRef.current.closest('.stats');
      const statsContainerRect = statsContainer?.getBoundingClientRect();
      const isOnLeftSide = statsContainer?.classList.contains('pos-tl') || 
                          statsContainer?.classList.contains('pos-bl');
      const isOnBottom = statsContainer?.classList.contains('pos-bl') || 
                        statsContainer?.classList.contains('pos-br');
      
      let left, top;
      
      // Replicate vanilla positioning logic exactly
      if (isOnLeftSide) {
        // Position tooltip to the left of the icon
        left = rect.left - tooltipRect.width - 5;
      } else {
        // Position tooltip to the right of the icon (default)
        left = - tooltipRect.width - 5;
      }
      
      if (isOnBottom) {
        // Position tooltip above the icon
        top = rect.top - (statsContainerRect?.top || 0) - tooltipRect.height - 20;
      } else {
        // Position tooltip below the icon (default)
        top = rect.bottom - 5;
      }
      
      // Ensure tooltip doesn't go off screen (vanilla boundary check)
      if (left < 5) left = 5;
      if (left + tooltipRect.width > window.innerWidth - 5) {
        left = window.innerWidth - tooltipRect.width - 5;
      }
      
      // Clean up temporary tooltip
      document.body.removeChild(tempTooltip);
      
      setTooltipPosition({ x: left, y: top });
      setShowTooltip(true);
    }
  }, [tooltip]);

  const handleMouseLeave = useCallback(() => {
    setShowTooltip(false);
  }, []);

  return (
    <>
      <span 
        ref={iconRef}
        className="info-icon" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      {showTooltip && (
        <div 
          className="stats-tooltip"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
          }}
        >
          {tooltip}
        </div>
      )}
    </>
  );
};

const StatLine: React.FC<StatLineProps> = ({ label, value, tooltip }) => (
  <div className="s-l">
    <div className="l-v">{label}: {value}</div>
    {tooltip && (
      <InfoIcon tooltip={tooltip}>ⓘ</InfoIcon>
    )}
  </div>
);

const StatSection: React.FC<StatSectionProps> = ({ title, children }) => (
  <div className="s-c">
    <div><strong>{title}</strong></div>
    {children}
  </div>
);

const StatsControls: React.FC<StatsControlsProps> = ({ position, onPositionChange, onClose }) => (
  <div className="stats-controls">
    <button 
      className={`stats-btn ${position === 'tl' ? 'active' : ''}`}
      onClick={() => onPositionChange('tl')}
      title="Top Left"
    >
      TL
    </button>
    <button 
      className={`stats-btn ${position === 'tr' ? 'active' : ''}`}
      onClick={() => onPositionChange('tr')}
      title="Top Right"
    >
      TR
    </button>
    <button 
      className={`stats-btn ${position === 'bl' ? 'active' : ''}`}
      onClick={() => onPositionChange('bl')}
      title="Bottom Left"
    >
      BL
    </button>
    <button 
      className={`stats-btn ${position === 'br' ? 'active' : ''}`}
      onClick={() => onPositionChange('br')}
      title="Bottom Right"
    >
      BR
    </button>
    <button 
      className="stats-close-btn"
      onClick={onClose}
      title="Close Stats"
    >
      ×
    </button>
  </div>
);

const DisplayStats: React.FC<DisplayStatsProps> = ({ displayInfo }) => (
  <StatSection title="DISPLAY">
    <StatLine 
      label="Screen" 
      value={displayInfo.screen}
      tooltip="Physical display dimensions - your actual monitor/device screen size"
    />
    <StatLine 
      label="Viewport" 
      value={displayInfo.viewport}
      tooltip="Browser content area - excludes address bar, bookmarks, scrollbars"
    />
    <StatLine 
      label="Available" 
      value={displayInfo.available}
      tooltip="Screen space minus OS UI - area where applications can be positioned"
    />
    <StatLine 
      label="Aspect Ratio" 
      value={displayInfo.aspectRatio}
    />
    <StatLine 
      label="DPR" 
      value={displayInfo.dpr}
      tooltip="Device Pixel Ratio - how many physical pixels equal one CSS pixel. Higher values indicate high-DPI displays"
    />
  </StatSection>
);

const RenderingStats: React.FC<RenderingStatsProps> = ({ frameInfo }) => (
  <StatSection title="RENDERING">
    <StatLine label="FPS" value={frameInfo.fps} />
    <StatLine 
      label="Frame Jitter" 
      value={`${frameInfo.animationFrameJitter}ms`}
      tooltip="Animation frame timing variance. Lower values indicate smoother animations. Good: <2ms, Fair: 2-5ms, Poor: >5ms"
    />
    <StatLine 
      label="Frame Drops" 
      value={frameInfo.frameDrops}
      tooltip="Number of dropped frames (>33ms) - fewer drops indicate better performance"
    />
  </StatSection>
);

const ScrollStats: React.FC<ScrollStatsProps> = ({ scrollInfo }) => (
  <StatSection title="SCROLL">
    <StatLine 
      label="Position" 
      value={<><span>{scrollInfo.position}px</span> (<span>{scrollInfo.percent}%</span>)</>}
    />
    <StatLine label="Page Height" value={`${scrollInfo.pageHeight}px`} />
  </StatSection>
);

const ThemeStats: React.FC<ThemeStatsProps> = ({ themeInfo }) => (
  <StatSection title="THEME">
    <StatLine label="Color Scheme" value={themeInfo.colorScheme} />
    <StatLine 
      label="Contrast" 
      value={themeInfo.contrast}
      tooltip="User's system preference for contrast levels. High contrast improves text readability for accessibility"
    />
    <StatLine 
      label="Reduced Motion" 
      value={themeInfo.reducedMotion}
      tooltip="User's preference to minimize animations and motion effects for accessibility or motion sensitivity"
    />
  </StatSection>
);

const DeviceStats: React.FC<DeviceStatsProps> = ({ deviceInfo }) => (
  <StatSection title="DEVICE">
    <StatLine label="Touch" value={deviceInfo.touchPoints} />
    <StatLine label="Hover" value={deviceInfo.hover} />
    <StatLine label="Orientation" value={deviceInfo.orientation} />
  </StatSection>
);

const BrowserStats: React.FC<BrowserStatsProps> = ({ browserInfo }) => (
  <StatSection title="BROWSER">
    <StatLine label="Engine" value={browserInfo.engine} />
    <StatLine label="GPU" value={browserInfo.gpu} />
  </StatSection>
);

const StatsHelper = () => {
  // React state for all dynamic values
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<StatsPosition>('tl');
  
  // Stats data state
  const [frameInfo, setFrameInfo] = useState<FrameInfo>({
    frameDrops: 0,
    fps: 0,
    animationFrameJitter: 0
  });
  
  const [displayInfo, setDisplayInfo] = useState<DisplayInfo>({
    screen: '',
    viewport: '',
    available: '',
    aspectRatio: '',
    dpr: 1
  });
  
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    position: 0,
    percent: 0,
    pageHeight: 0
  });
  
  const [themeInfo, setThemeInfo] = useState<ThemeInfo>({
    colorScheme: '',
    contrast: '',
    reducedMotion: ''
  });
  
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    touchPoints: '',
    hover: '',
    orientation: ''
  });
  
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
    engine: '',
    gpu: ''
  });
  
  // FPS tracking
  const fpsData = useRef({
    frameCount: 0,
    lastTime: performance.now(),
    frameTimes: [] as number[],
    frameDrops: 0,
    lastFrameTime: performance.now(),
    animationFrameId: null as number | null
  });

  /**
   * Get browser engine info
   */
  const getBrowserEngine = useCallback(() => {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome')) return 'Blink';
    if (ua.includes('Firefox')) return 'Gecko';
    if (ua.includes('Safari') && !ua.includes('Chrome')) return 'WebKit';
    if (ua.includes('Edge')) return 'EdgeHTML/Blink';
    return 'Unknown';
  }, []);

  /**
   * Get GPU info
   */
  const getGPUInfo = useCallback(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl && 'getExtension' in gl) {
        const webglContext = gl as WebGLRenderingContext;
        const debugInfo = webglContext.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          return webglContext.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        }
        return 'WebGL Available';
      }
      return 'No WebGL';
    } catch (e) {
      return 'Unknown';
    }
  }, []);

  /**
   * Update display info
   */
  const updateDisplayInfo = useCallback(() => {
    setDisplayInfo({
      screen: `${screen.width}x${screen.height}`,
      viewport: `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,
      available: `${screen.availWidth}x${screen.availHeight}`,
      aspectRatio: (window.innerWidth / window.innerHeight).toFixed(2),
      dpr: window.devicePixelRatio
    });
  }, []);

  /**
   * Update scroll info
   */
  const updateScrollInfo = useCallback(() => {
    const scrollY = Math.round(window.scrollY);
    const pageHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercent = pageHeight > windowHeight ? 
      Math.round((scrollY / (pageHeight - windowHeight)) * 100) : 0;
    
    setScrollInfo({
      position: scrollY,
      percent: scrollPercent,
      pageHeight: pageHeight
    });
  }, []);

  /**
   * Update theme and accessibility info
   */
  const updateThemeInfo = useCallback(() => {
    const highContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const moreContrast = window.matchMedia('(prefers-contrast: more)').matches;
    const contrastValue = highContrast || moreContrast ? 'High' : 'Normal';
    
    setThemeInfo({
      colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light',
      contrast: contrastValue,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'true' : 'false'
    });
  }, []);

  /**
   * Update device capabilities
   */
  const updateDeviceInfo = useCallback(() => {
    setDeviceInfo({
      touchPoints: navigator.maxTouchPoints > 0 ? `true (${navigator.maxTouchPoints})` : 'false',
      hover: window.matchMedia('(hover: hover)').matches ? 'true' : 'false',
      orientation: (screen as any).orientation ? `${(screen as any).orientation.angle}°` : 'Unknown'
    });
  }, []);

  /**
   * Update browser info
   */
  const updateBrowserInfo = useCallback(() => {
    setBrowserInfo({
      engine: getBrowserEngine(),
      gpu: getGPUInfo()
    });
  }, [getBrowserEngine, getGPUInfo]);

  /**
   * Update all static info
   */
  const updateAllInfo = useCallback(() => {
    updateDisplayInfo();
    updateScrollInfo();
    updateThemeInfo();
    updateDeviceInfo();
    updateBrowserInfo();
  }, [updateDisplayInfo, updateScrollInfo, updateThemeInfo, updateDeviceInfo, updateBrowserInfo]);

  /**
   * Update FPS calculation
   */
  const updateFPS = useCallback(() => {
    fpsData.current.frameCount++;
    const currentTime = performance.now();
    const deltaTime = currentTime - fpsData.current.lastTime;

    // Track individual frame times
    const individualFrameTime = currentTime - fpsData.current.lastFrameTime;
    fpsData.current.frameTimes.push(individualFrameTime);
    if (fpsData.current.frameTimes.length > 60) {
      fpsData.current.frameTimes.shift();
    }
    fpsData.current.lastFrameTime = currentTime;

    // Detect frame drops
    if (individualFrameTime > 33) {
      fpsData.current.frameDrops++;
    }

    // Update FPS every 500ms
    if (deltaTime >= 500) {
      const fps = Math.round((fpsData.current.frameCount * 1000) / deltaTime);
      
      // Calculate jitter
      let jitter = 0;
      if (fpsData.current.frameTimes.length >= 2) {
        const variations = fpsData.current.frameTimes.slice(1).map((time, i) => 
          Math.abs(time - fpsData.current.frameTimes[i]));
        jitter = Math.round((variations.reduce((a, b) => a + b, 0) / variations.length) * 100) / 100;
      }

      setFrameInfo({
        fps,
        frameDrops: fpsData.current.frameDrops,
        animationFrameJitter: jitter
      });

      fpsData.current.frameCount = 0;
      fpsData.current.lastTime = currentTime;
    }

    fpsData.current.animationFrameId = requestAnimationFrame(updateFPS);
  }, []);

  // Event handlers
  const handlePositionChange = useCallback((newPosition: StatsPosition) => {
    setPosition(newPosition);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.altKey && e.code === 'KeyS') {
      setIsVisible(prev => !prev);
    }
  }, []);

  const handleResize = useCallback(() => {
    updateDisplayInfo();
  }, [updateDisplayInfo]);

  const handleScroll = useCallback(() => {
    updateScrollInfo();
  }, [updateScrollInfo]);

  // Initialize data on mount
  useEffect(() => {
    updateAllInfo();
    
    // Start FPS tracking
    fpsData.current.animationFrameId = requestAnimationFrame(updateFPS);

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      // Cleanup
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyPress);
      
      if (fpsData.current.animationFrameId) {
        cancelAnimationFrame(fpsData.current.animationFrameId);
      }
    };
  }, [updateAllInfo, updateFPS, handleResize, handleScroll, handleKeyPress]);

  // Update dynamic info when window events occur  
  useEffect(() => {
    updateDisplayInfo();
  }, [updateDisplayInfo]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`stats show pos-${position}`}>
      <StatsControls 
        position={position}
        onPositionChange={handlePositionChange}
        onClose={handleClose}
      />
      <div className="s-d">
        <DisplayStats displayInfo={displayInfo} />
        <RenderingStats frameInfo={frameInfo} />
        <ScrollStats scrollInfo={scrollInfo} />
        <ThemeStats themeInfo={themeInfo} />
        <DeviceStats deviceInfo={deviceInfo} />
        <BrowserStats browserInfo={browserInfo} />
      </div>
    </div>
  );
};

export default StatsHelper;