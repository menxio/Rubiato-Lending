import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
  borrowerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Borrower', required: true },
  borrowedAmount: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  interest: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Loan = mongoose.model('Loan', LoanSchema);

export default Loan;
