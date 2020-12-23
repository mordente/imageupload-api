import { Router } from 'express';
import UploadController from '../controllers/UploadController.js';

const router = new Router();

import upload from '../multer.js';



router.get('/', UploadController.index);
router.post('/', upload.array('file', 20), UploadController.create);
router.delete('/:id', UploadController.delete);

export default router;