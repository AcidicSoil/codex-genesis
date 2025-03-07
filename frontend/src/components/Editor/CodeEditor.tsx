import { FC } from 'react'
import { editor } from 'monaco-editor'

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language?: string
  theme?: string
}

const CodeEditor: FC<CodeEditorProps> = ({ value, onChange, language = 'typescript', theme = 'vs-dark' }) => {
  // TODO: Implement Monaco editor integration
  // TODO: Add editor configuration and theme support
  // TODO: Implement onChange handlers
  // TODO: Add language support
  return (
    <div className="code-editor">
      {/* Monaco editor will be mounted here */}
    </div>
  )
}

export default CodeEditor 