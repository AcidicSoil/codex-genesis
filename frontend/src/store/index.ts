import { create } from 'zustand'

interface CodexState {
  currentProject: string | null
  currentFile: string | null
  files: Record<string, string>
  setCurrentProject: (projectId: string | null) => void
  setCurrentFile: (filePath: string | null) => void
  updateFile: (filePath: string, content: string) => void
}

const useStore = create<CodexState>((set) => ({
  currentProject: null,
  currentFile: null,
  files: {},
  setCurrentProject: (projectId) => set({ currentProject: projectId }),
  setCurrentFile: (filePath) => set({ currentFile: filePath }),
  updateFile: (filePath, content) =>
    set((state) => ({
      files: {
        ...state.files,
        [filePath]: content,
      },
    })),
}))

export default useStore 