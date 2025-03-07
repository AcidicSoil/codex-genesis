import { FC, useRef, useEffect, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Grid } from '@react-three/drei'
import * as THREE from 'three'

interface Scene3DProps {
  data?: {
    nodes: Array<{
      id: string
      position: [number, number, number]
      type: string
      connections: string[]
    }>
    edges: Array<{
      from: string
      to: string
    }>
  }
  width?: string
  height?: string
}

const Scene = ({ data }) => {
  const { camera } = useThree()
  
  useEffect(() => {
    // Initial camera position
    camera.position.set(10, 10, 10)
    camera.lookAt(0, 0, 0)
  }, [camera])

  // Render nodes
  const renderNodes = () => {
    if (!data?.nodes) return null
    return data.nodes.map((node) => (
      <mesh key={node.id} position={node.position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={getNodeColor(node.type)} />
      </mesh>
    ))
  }

  // Render edges
  const renderEdges = () => {
    if (!data?.edges) return null
    return data.edges.map((edge, index) => {
      const fromNode = data.nodes.find(n => n.id === edge.from)
      const toNode = data.nodes.find(n => n.id === edge.to)
      if (!fromNode || !toNode) return null

      const points = [
        new THREE.Vector3(...fromNode.position),
        new THREE.Vector3(...toNode.position)
      ]
      
      return (
        <line key={`edge-${index}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#666666" />
        </line>
      )
    })
  }

  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 10, 10]} />
      <OrbitControls enableDamping dampingFactor={0.05} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Grid infiniteGrid fadeDistance={50} fadeStrength={5} />
      {renderNodes()}
      {renderEdges()}
    </>
  )
}

const Scene3D: FC<Scene3DProps> = ({ data, width = '100%', height = '100%' }) => {
  return (
    <div style={{ width, height }}>
      <Canvas
        shadows
        camera={{ position: [10, 10, 10], fov: 75 }}
        gl={{ antialias: true }}
      >
        <Scene data={data} />
      </Canvas>
    </div>
  )
}

// Utility function to determine node color based on type
const getNodeColor = (type: string): string => {
  const colors = {
    file: '#4CAF50',
    directory: '#2196F3',
    component: '#FFC107',
    service: '#9C27B0',
    default: '#757575'
  }
  return colors[type] || colors.default
}

export default Scene3D 