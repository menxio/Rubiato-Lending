// client/src/components/Loans.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Loans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const res = await axios.get('/api/loans');
      setLoans(res.data);
    };

    fetchLoans();
  }, []);

  const deleteLoan = async (id) => {
    await axios.delete(`/api/loans/${id}`);
    setLoans(loans.filter((loan) => loan._id !== id));
  };

  return (
    <div>
      <h1>Loans</h1>
      <ul>
        {loans.map((loan) => (
          <li key={loan._id}>
            {loan.borrowerId.name} - {loan.borrowedAmount} - {loan.interestRate}% - {loan.interest}
            <button onClick={() => deleteLoan(loan._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Loans;
