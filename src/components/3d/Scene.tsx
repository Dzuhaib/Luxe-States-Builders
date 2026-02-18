'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const ApartmentLevel = ({ position }: { position: [number, number, number] }) => {
    return (
        <group position={position}>
            {/* Floor / Ceiling */}
            <mesh position={[0, -0.45, 0]}>
                <boxGeometry args={[2.2, 0.1, 2.2]} />
                <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Main Core */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1.8, 0.9, 1.8]} />
                <meshStandardMaterial color="#0f172a" />
            </mesh>

            {/* Windows & Doors */}
            {[0, 1, 2, 3].map((side) => (
                <group key={side} rotation={[0, (side * Math.PI) / 2, 0]}>
                    {/* Window */}
                    <mesh position={[0.4, 0.1, 0.91]}>
                        <boxGeometry args={[0.6, 0.5, 0.05]} />
                        <meshPhysicalMaterial
                            color="#334155"
                            transmission={0.8}
                            thickness={0.5}
                            roughness={0}
                            metalness={1}
                            emissive="#ffd700"
                            emissiveIntensity={0.2}
                        />
                    </mesh>
                    {/* Door */}
                    <mesh position={[-0.4, -0.1, 0.91]}>
                        <boxGeometry args={[0.3, 0.6, 0.05]} />
                        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
                    </mesh>
                </group>
            ))}

            {/* Balcony / Garden */}
            <mesh position={[0, -0.4, 1.3]}>
                <boxGeometry args={[1.5, 0.05, 0.8]} />
                <meshStandardMaterial color="#111827" />
            </mesh>
            <mesh position={[0, -0.35, 1.3]}>
                <boxGeometry args={[1.4, 0.02, 0.7]} />
                <meshStandardMaterial color="#15803d" roughness={1} /> {/* Grass/Garden */}
            </mesh>
        </group>
    );
};

const Building = () => {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Slow 360 rotation
            meshRef.current.rotation.y += 0.002;

            // Subtle mouse interaction overlay
            const targetRotationX = -state.mouse.y * 0.1;
            meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Base */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[3, 1, 3]} />
                <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Levels */}
            {Array.from({ length: 8 }).map((_, i) => (
                <ApartmentLevel key={i} position={[0, i * 1 + 0.5, 0]} />
            ))}

            {/* Roof Top Garden */}
            <mesh position={[0, 8.5, 0]}>
                <boxGeometry args={[2.5, 0.2, 2.5]} />
                <meshStandardMaterial color="#0f172a" />
            </mesh>
            <mesh position={[0, 8.6, 0]}>
                <boxGeometry args={[2.3, 0.05, 2.3]} />
                <meshStandardMaterial color="#16a34a" />
            </mesh>
        </group>
    );
};

export const Scene = () => {
    return (
        <Canvas shadows gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault position={[0, 4, 12]} fov={45} />
            <fog attach="fog" args={['#020817', 5, 25]} />

            <ambientLight intensity={0.2} />
            <spotLight position={[15, 20, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
            <pointLight position={[-10, 5, -10]} intensity={1} color="#d4af37" />

            <Environment preset="night" />

            <group position={[0, -1, 0]}>
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                    <Building />
                </Float>

                {/* Realm Base / City Floor */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
                    <planeGeometry args={[100, 100]} />
                    <meshStandardMaterial color="#0a0a0a" roughness={0.8} metalness={0.2} />
                </mesh>

                {/* Decorative city grid lines */}
                <gridHelper args={[100, 50, '#1e293b', '#0f172a']} position={[0, -1.99, 0]} />
            </group>

            <ContactShadows
                position={[0, -2.9, 0]}
                opacity={0.6}
                scale={30}
                blur={2}
                far={10}
            />
        </Canvas>
    );
};
