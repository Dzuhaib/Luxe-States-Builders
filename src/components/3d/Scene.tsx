'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const WindowMaterial = () => (
    <meshStandardMaterial
        color="#334155"
        roughness={0.1}
        metalness={0.8}
        emissive="#ffd700"
        emissiveIntensity={0.1}
    />
);

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
                        <WindowMaterial />
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
                <meshStandardMaterial color="#15803d" roughness={1} />
            </mesh>
        </group>
    );
};

const Building = () => {
    const meshRef = useRef<THREE.Group>(null);
    const levels = useMemo(() => Array.from({ length: 6 }).map((_, i) => (
        <ApartmentLevel key={i} position={[0, i * 1 + 0.5, 0]} />
    )), []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.0015;
            const targetRotationX = -state.mouse.y * 0.05;
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
            {levels}

            {/* Roof Top Garden */}
            <mesh position={[0, 6.5, 0]}>
                <boxGeometry args={[2.5, 0.2, 2.5]} />
                <meshStandardMaterial color="#0f172a" />
            </mesh>
            <mesh position={[0, 6.6, 0]}>
                <boxGeometry args={[2.3, 0.05, 2.3]} />
                <meshStandardMaterial color="#16a34a" />
            </mesh>
        </group>
    );
};

export const Scene = () => {
    return (
        <Canvas
            shadows={false}
            dpr={[1, 1.5]}
            gl={{ antialias: false, powerPreference: 'high-performance' }}
        >
            <PerspectiveCamera makeDefault position={[0, 4, 12]} fov={45} />
            <fog attach="fog" args={['#020817', 5, 25]} />

            <ambientLight intensity={0.4} />
            <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} />
            <pointLight position={[-10, 5, -10]} intensity={0.5} color="#d4af37" />

            <Environment preset="city" />

            <group position={[0, -1, 0]}>
                <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
                    <Building />
                </Float>

                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                    <planeGeometry args={[100, 100]} />
                    <meshStandardMaterial color="#050505" />
                </mesh>

                <gridHelper args={[100, 40, '#1e293b', '#0a0a0a']} position={[0, -1.99, 0]} />
            </group>

            <ContactShadows
                position={[0, -2.9, 0]}
                opacity={0.4}
                scale={20}
                blur={2.5}
                far={10}
            />
        </Canvas>
    );
};
