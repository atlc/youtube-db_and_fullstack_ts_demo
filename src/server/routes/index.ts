import * as express from 'express';
import itemsRouter from './items';

const router = express.Router();

router.use('/items', itemsRouter);

export default router;