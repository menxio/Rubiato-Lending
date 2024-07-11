import mongoose from 'mongoose';

const BorrowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

const Borrower = mongoose.model('Borrower', BorrowerSchema);

export default Borrower;
