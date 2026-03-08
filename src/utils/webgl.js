/**
 * Checks if WebGL is available in the current environment.
 * Returns false in sandboxed/headless contexts where GPU is disabled.
 */
export const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};
