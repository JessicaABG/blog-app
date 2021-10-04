import Router from 'express'
import * as controllers from '../controllers/posts.js'

const router = Router()

router.get('/posts', controllers.getPosts)
router.get('/posts:id', controllers.getPosts)
router.post('/posts', controllers.createPost)
router.put('/products/:id', controllers.updatePost)
router.delete('/products/:id', controllers.deletePost)

export default router
