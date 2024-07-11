import express from 'express';
import { getBorrowers, createBorrower, updateBorrower, deleteBorrower } from '../controllers/borrowerController.js';

const router = express.Router();

router.get('/', getBorrowers);
router.post('/', createBorrower);
router.put('/:id', updateBorrower);
router.delete('/:id', deleteBorrower);

export default router;
