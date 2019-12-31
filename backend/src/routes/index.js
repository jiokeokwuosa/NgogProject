import { Router } from 'express';

import authRouter from './auth.route';
import applicationRouter from './application.route';

const router = Router();

router.use('/auth', authRouter);
router.use('/application', applicationRouter);

export default router;