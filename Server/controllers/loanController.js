import Loan from '../models/Loan.js';

export const getLoans = async (req, res) => {
  try {
    const loans = await Loan.find().populate('borrowerId', 'name email phone');
    res.json(loans);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const createLoan = async (req, res) => {
  const { borrowerId, borrowedAmount, interestRate, interest } = req.body;

  try {
    const newLoan = new Loan({ borrowerId, borrowedAmount, interestRate, interest });
    const loan = await newLoan.save();
    res.json(loan);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const updateLoan = async (req, res) => {
  const { id } = req.params;
  const { borrowedAmount, interestRate, interest } = req.body;

  try {
    const loan = await Loan.findByIdAndUpdate(
      id,
      { borrowedAmount, interestRate, interest },
      { new: true }
    );
    res.json(loan);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const deleteLoan = async (req, res) => {
  const { id } = req.params;

  try {
    await Loan.findByIdAndDelete(id);
    res.json({ msg: 'Loan deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
