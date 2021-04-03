import express from 'express';

const router = express.Router();

import { signin, signup } from '../controllers/user.js';

router.use('user/signin', signin);
router.use('user/signup', signup);

export default router;