"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, useGLTF, RoundedBox } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// ─────────────────────────────────────────────────────────────
// PLACEHOLDER ROBOT — Replace with your GLB by editing GLBModel
// ─────────────────────────────────────────────────────────────
function PlaceholderRobot({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle idle breathing
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  const bodyColor = color === "red" ? "#c0392b" : color === "dark" ? "#444" : "#e8e8e8";
  const shineColor = color === "red" ? "#e74c3c" : color === "dark" ? "#666" : "#ffffff";

  return (
    <group ref={groupRef}>
      {/* Main body */}
      <RoundedBox args={[1.4, 1.3, 1.2]} radius={0.25} smoothness={6} castShadow>
        <meshPhysicalMaterial
          color={bodyColor}
          roughness={0.08}
          metalness={0.15}
          reflectivity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.2}
        />
      </RoundedBox>

      {/* Face recess - black panel */}
      <mesh position={[0, -0.02, 0.61]}>
        <boxGeometry args={[1.05, 0.9, 0.04]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.3} />
      </mesh>

      {/* Left eye */}
      <mesh position={[-0.22, 0.05, 0.64]}>
        <planeGeometry args={[0.28, 0.28]} />
        <meshStandardMaterial color="#ffffff" emissive="#aaeeff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.22, 0.05, 0.641]}>
        <planeGeometry args={[0.22, 0.22]} />
        <meshStandardMaterial color="#111" roughness={0.1} />
      </mesh>

      {/* Right eye */}
      <mesh position={[0.22, 0.05, 0.64]}>
        <planeGeometry args={[0.28, 0.28]} />
        <meshStandardMaterial color="#ffffff" emissive="#aaeeff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.22, 0.05, 0.641]}>
        <planeGeometry args={[0.22, 0.22]} />
        <meshStandardMaterial color="#111" roughness={0.1} />
      </mesh>

      {/* Smile */}
      <mesh position={[0, -0.2, 0.642]}>
        <planeGeometry args={[0.3, 0.06]} />
        <meshStandardMaterial color="#ffffff" emissive="#aaeeff" emissiveIntensity={0.4} />
      </mesh>

      {/* Side button (left) */}
      <RoundedBox args={[0.14, 0.14, 0.1]} radius={0.06} position={[-0.77, 0, 0.1]}>
        <meshPhysicalMaterial color={shineColor} roughness={0.1} metalness={0.2} clearcoat={1} />
      </RoundedBox>

      {/* Top ridge */}
      <mesh position={[0, 0.68, 0]} castShadow>
        <boxGeometry args={[1.2, 0.07, 1.0]} />
        <meshPhysicalMaterial color={shineColor} roughness={0.1} metalness={0.3} clearcoat={1} />
      </mesh>
    </group>
  );
}

// ─────────────────────────────────────────────────────────────
// GLB MODEL — Uncomment when you have your .glb file
// Place your model at: /public/models/robot.glb
// ─────────────────────────────────────────────────────────────
// function GLBModel({ color }: { color: string }) {
//   const { scene } = useGLTF("/models/robot.glb");
//   useEffect(() => {
//     scene.traverse((child: any) => {
//       if (child.isMesh && color === "red") {
//         child.material.color.set("#c0392b");
//       } else if (child.isMesh && color === "white") {
//         child.material.color.set("#e8e8e8");
//       }
//     });
//   }, [color, scene]);
//   return <primitive object={scene} scale={1.5} />;
// }

const COLOR_OPTIONS = [
  { id: "red", label: "Red", hex: "#c0392b" },
  { id: "white", label: "White", hex: "#e8e8e8" },
  { id: "dark", label: "Dark", hex: "#444444" },
];

export default function ViewerSection() {
  const [color, setColor] = useState("red");

  return (
    <section id="viewer" className="relative py-24 cyber-grid-bg overflow-hidden">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="font-orbitron text-xs tracking-[0.3em] text-[#00f5ff] border border-[#00f5ff]/30 px-3 py-1 rounded-full bg-[#00f5ff]/5">
            INTERACTIVE
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-black text-white mt-4 mb-4">
            View in <span className="text-[#00f5ff] neon-text">3D</span>
          </h2>
          <p className="font-poppins text-slate-400 max-w-md mx-auto">
            Drag to rotate · Scroll to zoom · Explore every angle
          </p>
        </motion.div>

        {/* Color variant picker */}
        <div className="flex justify-center gap-4 mb-8">
          {COLOR_OPTIONS.map((c) => (
            <button
              key={c.id}
              onClick={() => setColor(c.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-orbitron text-xs tracking-wider transition-all border ${
                color === c.id
                  ? "border-[#00f5ff] text-[#00f5ff] bg-[#00f5ff]/10 shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                  : "border-white/10 text-slate-400 hover:border-white/30"
              }`}
            >
              <span
                className="w-4 h-4 rounded-full border border-white/20"
                style={{ background: c.hex }}
              />
              {c.label}
            </button>
          ))}
        </div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl overflow-hidden neon-border"
          style={{ height: "560px" }}
        >
          {/* Corner decorations */}
          <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[#00f5ff]/50 rounded-tl-lg z-10" />
          <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[#00f5ff]/50 rounded-tr-lg z-10" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[#00f5ff]/50 rounded-bl-lg z-10" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[#00f5ff]/50 rounded-br-lg z-10" />

          {/* Model placeholder note */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 font-orbitron text-xs text-slate-500 text-center pointer-events-none">
            📦 Replace with your GLB — see instructions below
          </div>

          <Canvas
            camera={{ position: [0, 0, 3.5], fov: 45 }}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              {/* Lighting */}
              <ambientLight intensity={0.4} />
              <directionalLight
                position={[5, 5, 5]}
                intensity={1.5}
                castShadow
              />
              <pointLight position={[-3, 2, 2]} intensity={0.8} color="#00f5ff" />
              <pointLight position={[3, -2, -2]} intensity={0.5} color="#7c3aed" />

              {/* Environment for reflections */}
              <Environment preset="city" />

              {/* Robot */}
              {/* 
                TO REPLACE WITH YOUR GLB:
                Comment out <PlaceholderRobot> and uncomment <GLBModel>
                Make sure your GLB is at /public/models/robot.glb
              */}
              <PlaceholderRobot color={color} />

              {/* Shadow */}
              <ContactShadows
                position={[0, -0.9, 0]}
                opacity={0.4}
                scale={4}
                blur={2}
                color="#00f5ff"
              />

              {/* Controls */}
              <OrbitControls
                enablePan={false}
                minDistance={2}
                maxDistance={6}
                autoRotate
                autoRotateSpeed={0.8}
                enableDamping
                dampingFactor={0.05}
              />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Help text */}
        <p className="text-center font-poppins text-sm text-slate-500 mt-4">
          Click &amp; drag to rotate • Scroll to zoom • Auto-rotates on idle
        </p>
      </div>
    </section>
  );
}
