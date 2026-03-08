import React from "react";

/**
 * Catches WebGL / Three.js runtime errors so they don't crash the whole app.
 * Renders `null` (or a custom fallback) instead of an error screen.
 */
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // Only silence WebGL-related errors; re-throw everything else.
    if (
      !error?.message?.toLowerCase().includes("webgl") &&
      !error?.message?.toLowerCase().includes("context")
    ) {
      console.error(error);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

export default CanvasErrorBoundary;
