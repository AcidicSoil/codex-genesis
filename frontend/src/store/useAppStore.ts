import create from 'zustand'

interface AppState {
  // Terminal state
  terminalHistory: string[]
  addTerminalEntry: (entry: string) => void
  clearTerminal: () => void

  // Editor state
  currentFile: string | null
  fileContent: string
  setCurrentFile: (file: string) => void
  updateFileContent: (content: string) => void

  // Visualization state
  visualizationData: any // TODO: Define proper visualization data type
  updateVisualization: (data: any) => void
}

const useAppStore = create<AppState>((set) => ({
  // Terminal state implementation
  terminalHistory: [],
  addTerminalEntry: (entry) => set((state) => ({
    terminalHistory: [...state.terminalHistory, entry]
  })),
  clearTerminal: () => set({ terminalHistory: [] }),

  // Editor state implementation
  currentFile: null,
  fileContent: '',
  setCurrentFile: (file) => set({ currentFile: file }),
  updateFileContent: (content) => set({ fileContent: content }),

  // Visualization state implementation
  visualizationData: null,
  updateVisualization: (data) => set({ visualizationData: data })
}))

export default useAppStore 