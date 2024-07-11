import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateLoan = () => {
  const [borrowerId, setBorrowerId] = useState('');
  const [borrowedAmount, setBorrowedAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [interest, setInterest] = useState('');
  const [borrowers, setBorrowers] = useState([]);

  useEffect(() => {
    const fetchBorrowers = async () => {
      const res = await axios.get('/api/borrowers');
      setBorrowers(res.data);
    };

    fetchBorrowers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newLoan = { borrowerId, borrowedAmount, interestRate, interest };
    await axios.post('/api/loans', newLoan);
    // Reset form
    setBorrowerId('');
    setBorrowedAmount('');
    setInterestRate('');
    setInterest('');
  };

  return (
    <form onSubmit={onSubmit}>
      <select
        value={borrowerId}
        onChange={(e) => setBorrowerId(e.target.value)}
      >
        <option value="">Select Borrower</option>
        {borrowers.map((borrower) => (
          <option key={borrower._id} value={borrower._id}>
            {borrower.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Borrowed Amount"
        value={borrowedAmount}
        onChange={(e) => setBorrowedAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />
      <button type="submit">Create Loan</button>
    </form>
  );
};

export default CreateLoan;
