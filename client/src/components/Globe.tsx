import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleGlobe() {
  const ref = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const temp = [];
    const count = 3000;
    const radius = 2;
    
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.1;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.1;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
      {/* Orbital Ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.5, 2.52, 64]} />
        <meshBasicMaterial color="#38bdf8" opacity={0.2} transparent side={THREE.DoubleSide} />
      </mesh>
       {/* Orbital Ring 2 - Tilted */}
       <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <ringGeometry args={[3, 3.02, 64]} />
        <meshBasicMaterial color="#4CAF50" opacity={0.15} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export function Globe({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <fog attach="fog" args={['#0B0C10', 5, 15]} />
        <ambientLight intensity={0.5} />
        <ParticleGlobe />
      </Canvas>
    </div>
  );
}
