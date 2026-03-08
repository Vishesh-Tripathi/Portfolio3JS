import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "../CanvasErrorBoundary";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthFallback = () => (
  <div className='w-full h-full min-h-[350px] flex items-center justify-center'>
    <div className='relative flex items-center justify-center'>
      {/* Outer glow ring */}
      <div
        className='absolute w-[260px] h-[260px] rounded-full'
        style={{
          background: 'conic-gradient(from 0deg, #915EFF, #00cea8, #915EFF)',
          animation: 'spin-cw 6s linear infinite',
          padding: '3px',
        }}
      >
        <div className='w-full h-full rounded-full bg-[#050816]' />
      </div>

      {/* Globe body */}
      <div
        className='relative w-[240px] h-[240px] rounded-full overflow-hidden z-10'
        style={{
          background:
            'radial-gradient(circle at 35% 35%, #1a6b8a 0%, #0d4a6b 30%, #062a45 60%, #020d1a 100%)',
          boxShadow:
            '0 0 40px 8px rgba(0,206,168,0.25), inset -20px -10px 40px rgba(0,0,0,0.6)',
        }}
      >
        {/* Continent patches */}
        <div className='absolute top-[18%] left-[20%] w-[28%] h-[20%] rounded-full bg-[#1d7a3a]/60' style={{ transform: 'rotate(-20deg)' }} />
        <div className='absolute top-[35%] left-[45%] w-[22%] h-[28%] rounded-full bg-[#1d7a3a]/50' style={{ transform: 'rotate(15deg)' }} />
        <div className='absolute top-[55%] left-[15%] w-[20%] h-[18%] rounded-full bg-[#1d7a3a]/55' style={{ transform: 'rotate(-10deg)' }} />
        <div className='absolute top-[22%] left-[62%] w-[16%] h-[24%] rounded-full bg-[#1d7a3a]/45' style={{ transform: 'rotate(5deg)' }} />
        {/* Atmosphere shimmer */}
        <div className='absolute inset-0 rounded-full' style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)' }} />
        {/* Cloud bands */}
        <div className='absolute top-[28%] left-0 right-0 h-[8%] bg-white/10 rounded-full blur-sm' style={{ transform: 'rotate(-5deg)' }} />
        <div className='absolute top-[62%] left-0 right-0 h-[6%] bg-white/8 rounded-full blur-sm' style={{ transform: 'rotate(3deg)' }} />
      </div>

      {/* Orbit ring */}
      <div
        className='absolute w-[310px] h-[80px] rounded-full border border-[#915EFF]/30 z-20'
        style={{ transform: 'rotateX(75deg)', boxShadow: '0 0 12px rgba(145,94,255,0.15)' }}
      />
    </div>
  </div>
);

const EarthCanvas = () => {
  return (
    <CanvasErrorBoundary fallback={<EarthFallback />}>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default EarthCanvas;
