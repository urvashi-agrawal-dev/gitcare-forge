import { Canvas } from "@react-three/fiber";
import { Sphere, Float, Text3D } from "@react-three/drei";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import heroBackground from "@/assets/hero-bg.jpg";
import { ScrollBasedVelocity } from "@/components/magicui/scroll-based-velocity";

// Particle system for the 3D background
function Particles({ count = 200 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50
        ],
        scale: Math.random() * 0.5 + 0.1,
        rotation: Math.random() * Math.PI * 2
      });
    }
    return temp;
  }, [count]);

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      {particles.map((particle, index) => (
        <group key={index} position={particle.position as [number, number, number]}>
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh scale={particle.scale}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} />
            </mesh>
          </Float>
        </group>
      ))}
    </instancedMesh>
  );
}

// 3D Scene Component
function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      <Particles />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[2, 64, 64]} position={[5, 0, -10]}>
          <meshStandardMaterial 
            color="#ff00ff" 
            emissive="#ff00ff" 
            emissiveIntensity={0.2}
            wireframe
            transparent
            opacity={0.3}
          />
        </Sphere>
      </Float>
    </>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient-x" style={{
        background: "linear-gradient(120deg, #0f2027 0%, #2c5364 50%, #00c6ff 100%)",
        opacity: 0.7
      }} />
      {/* 3D Canvas Background - more vibrant */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-6xl lg:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            GitCare
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            The future of developer networking and bounty hunting. Connect, contribute, and earn in the decentralized ecosystem.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button variant="hero" size="xl" className="group">
              Start Contributing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline-neon" size="xl">
              <Code className="mr-2 h-5 w-5" />
              Explore Bounties
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center items-center gap-8 mt-12 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary animate-pulse" />
              <span>10k+ Active Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-secondary animate-pulse" />
              <span>5k+ Open Bounties</span>
            </div>
          </motion.div>

          {/* Scrolling velocity text */}
          <motion.div
            className="mt-16 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <ScrollBasedVelocity baseVelocity={-5} className="text-lg font-semibold text-primary/30">
              ⚡ DECENTRALIZED • SECURE • INNOVATIVE • FUTURE-READY • 
            </ScrollBasedVelocity>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-t from-background via-transparent to-transparent" />
    </section>
  );
}