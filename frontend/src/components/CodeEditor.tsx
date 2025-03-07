import { Box } from '@chakra-ui/react'
import Editor from '@monaco-editor/react'

const CodeEditor = () => {
  return (
    <Box h="full" borderRadius="md" overflow="hidden">
      <Editor
        height="100%"
        defaultLanguage="typescript"
        defaultValue="// Welcome to Codex Genesis Code Editor"
        theme="vs-dark"
        options={{
          minimap: { enabled: true },
          fontSize: 14,
          wordWrap: 'on',
          automaticLayout: true,
        }}
        onChange={(value) => {
          // TODO: Implement code change handling
        }}
      />
    </Box>
  )
}

export default CodeEditor 