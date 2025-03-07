import { ChakraProvider, Box, Grid, GridItem } from '@chakra-ui/react'
import Terminal from './components/Terminal'
import CodeEditor from './components/CodeEditor'
import Visualization from './components/Visualization'

function App() {
  return (
    <ChakraProvider>
      <Box h="100vh" p={4}>
        <Grid
          h="full"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Terminal />
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <CodeEditor />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Visualization />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App
