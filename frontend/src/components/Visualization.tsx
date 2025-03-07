import { Box } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Visualization = () => {
  return (
    <Box h="full" borderRadius="md" overflow="hidden">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {/* TODO: Add 3D visualization components */}
      </Canvas>
    </Box>
  )
}

export default Visualization 