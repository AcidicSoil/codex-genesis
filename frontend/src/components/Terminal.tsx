import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import { Terminal as XTerm } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import '@xterm/xterm/css/xterm.css'

const Terminal = () => {
  const terminalRef = useRef<HTMLDivElement>(null)
  const xtermRef = useRef<XTerm | null>(null)

  useEffect(() => {
    if (terminalRef.current && !xtermRef.current) {
      const term = new XTerm({
        cursorBlink: true,
        theme: {
          background: '#1e1e1e',
        }
      })

      const fitAddon = new FitAddon()
      term.loadAddon(fitAddon)
      
      term.open(terminalRef.current)
      fitAddon.fit()
      
      term.write('Welcome to Codex Genesis!\r\n$ ')
      
      term.onData((data) => {
        // TODO: Implement terminal input handling
        term.write(data)
      })

      xtermRef.current = term

      return () => {
        term.dispose()
      }
    }
  }, [])

  return (
    <Box h="full" bg="gray.900" borderRadius="md" overflow="hidden">
      <div ref={terminalRef} style={{ height: '100%' }} />
    </Box>
  )
}

export default Terminal 