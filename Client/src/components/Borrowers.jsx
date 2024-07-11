import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Borrowers = () => {
  const [borrowers, setBorrowers] = useState([]);

  useEffect(() => {
    const fetchBorrowers = async () => {
      const res = await axios.get('/api/borrowers');
      setBorrowers(res.data);
    };

    fetchBorrowers();
  }, []);

  const deleteBorrower = async (id) => {
    await axios.delete(`/api/borrowers/${id}`);
    setBorrowers(borrowers.filter(borrower => borrower._id !== id));
  };

  return (
    <div>
      <h1>Borrowers</h1>
      <ul>
        {borrowers.map((borrower) => (
          <li key={borrower._id}>
            {borrower.name} - {borrower.email} - {borrower.phone}
            <button onClick={() => deleteBorrower(borrower._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Borrowers;
