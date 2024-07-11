import Borrower from '../models/Borrower.js';

export const getBorrowers = async (req, res) => {
  try {
    const borrowers = await Borrower.find();
    res.json(borrowers);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const createBorrower = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newBorrower = new Borrower({ name, email, phone });
    const borrower = await newBorrower.save();
    res.json(borrower);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const updateBorrower = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const borrower = await Borrower.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true }
    );
    res.json(borrower);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const deleteBorrower = async (req, res) => {
  const { id } = req.params;

  try {
    await Borrower.findByIdAndDelete(id);
    res.json({ msg: 'Borrower deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
