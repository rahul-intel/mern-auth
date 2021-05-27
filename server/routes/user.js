import express from 'express';

const router = express.Router();

import { signin, signup, test } from '../controllers/user.js';

//router.use('/', test);
router.use('/signin', signin);
router.use('/signup', signup);

export default router;