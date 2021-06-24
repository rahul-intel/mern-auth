import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.post('/:id', getPost);
router.post('/create', auth, createPost);
router.patch('/:id/update', auth, updatePost);
router.delete('/:id/delete', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;