import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene = ({ className }: ThreeSceneProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    laptop?: THREE.Group;
    serviceBlocks?: THREE.Group[];
    animationId?: number;
  }>({});

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x0066ff, 1);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x7c3aed, 0.8, 100);
    pointLight.position.set(-10, 5, -5);
    scene.add(pointLight);

    // Create laptop (simplified as a group of boxes)
    const laptopGroup = new THREE.Group();
    
    // Laptop base
    const baseGeometry = new THREE.BoxGeometry(3, 0.2, 2);
    const baseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x333333,
      transparent: true,
      opacity: 0.9
    });
    const laptopBase = new THREE.Mesh(baseGeometry, baseMaterial);
    laptopGroup.add(laptopBase);

    // Laptop screen
    const screenGeometry = new THREE.BoxGeometry(2.8, 1.8, 0.1);
    const screenMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x000000,
      emissive: 0x001122
    });
    const laptopScreen = new THREE.Mesh(screenGeometry, screenMaterial);
    laptopScreen.position.set(0, 1, -0.9);
    laptopScreen.rotation.x = -Math.PI * 0.1;
    laptopGroup.add(laptopScreen);

    // Screen content (Under24 logo placeholder)
    const logoGeometry = new THREE.PlaneGeometry(2, 1);
    const logoMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x0066ff,
      transparent: true,
      opacity: 0.8
    });
    const logo = new THREE.Mesh(logoGeometry, logoMaterial);
    logo.position.set(0, 1, -0.85);
    logo.rotation.x = -Math.PI * 0.1;
    laptopGroup.add(logo);

    laptopGroup.position.set(0, 0, 0);
    scene.add(laptopGroup);

    // Create floating service blocks
    const serviceBlocks: THREE.Group[] = [];
    const serviceNames = ['Portfolio', 'Business', 'Static', 'Dynamic'];
    const colors = [0x0066ff, 0x7c3aed, 0xff1493, 0x00ff88];

    serviceNames.forEach((name, index) => {
      const blockGroup = new THREE.Group();
      
      // Create glass-like material
      const blockGeometry = new THREE.BoxGeometry(1.2, 1.2, 0.1);
      const blockMaterial = new THREE.MeshPhongMaterial({
        color: colors[index],
        transparent: true,
        opacity: 0.3,
        shininess: 100
      });
      
      const block = new THREE.Mesh(blockGeometry, blockMaterial);
      
      // Add border
      const borderGeometry = new THREE.EdgesGeometry(blockGeometry);
      const borderMaterial = new THREE.LineBasicMaterial({ 
        color: colors[index],
        transparent: true,
        opacity: 0.8
      });
      const border = new THREE.LineSegments(borderGeometry, borderMaterial);
      
      blockGroup.add(block);
      blockGroup.add(border);
      
      // Position blocks in orbit around laptop
      const angle = (index / serviceNames.length) * Math.PI * 2;
      const radius = 5;
      blockGroup.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 0.5) * 2,
        Math.sin(angle) * radius
      );
      
      scene.add(blockGroup);
      serviceBlocks.push(blockGroup);
    });

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x0066ff,
      size: 0.1,
      transparent: true,
      opacity: 0.6
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Camera position
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    // Store references
    sceneRef.current = { scene, camera, renderer, laptop: laptopGroup, serviceBlocks };

    // Animation loop
    const animate = () => {
      // Rotate laptop
      if (laptopGroup) {
        laptopGroup.rotation.y += 0.005;
      }

      // Orbit service blocks
      serviceBlocks.forEach((block, index) => {
        const time = Date.now() * 0.001;
        const angle = (index / serviceBlocks.length) * Math.PI * 2 + time * 0.3;
        const radius = 5;
        
        block.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle * 0.5) * 2 + Math.sin(time * 2 + index) * 0.5,
          Math.sin(angle) * radius
        );
        
        block.rotation.x += 0.01;
        block.rotation.y += 0.005;
      });

      // Animate particles
      if (particles) {
        particles.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default ThreeScene;