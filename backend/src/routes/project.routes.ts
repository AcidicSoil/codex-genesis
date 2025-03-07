import { Router } from 'express'
import { authenticateJWT } from '../middleware/auth'
import * as projectController from '../controllers/project.controller'

const router = Router()

// Project routes
router.get('/', authenticateJWT, projectController.listProjects)
router.post('/', authenticateJWT, projectController.createProject)
router.get('/:id', authenticateJWT, projectController.getProject)
router.put('/:id', authenticateJWT, projectController.updateProject)
router.delete('/:id', authenticateJWT, projectController.deleteProject)

// File operations within a project
router.get('/:id/files', authenticateJWT, projectController.listFiles)
router.post('/:id/files', authenticateJWT, projectController.createFile)
router.get('/:id/files/:fileId', authenticateJWT, projectController.getFile)
router.put('/:id/files/:fileId', authenticateJWT, projectController.updateFile)
router.delete('/:id/files/:fileId', authenticateJWT, projectController.deleteFile)

export default router 