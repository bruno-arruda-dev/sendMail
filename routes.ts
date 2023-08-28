import express from 'express';
import sendmailController from './controllers/sendmailController';

const router = express.Router();

router.post('/sendmail', sendmailController.post);

export default router;