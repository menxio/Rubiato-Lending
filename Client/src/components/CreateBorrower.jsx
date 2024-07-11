// client/src/components/CreateBorrower.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateBorrower = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const newBorrower = { name, email, phone };
    await axios.post('/api/borrowers', newBorrower);
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Create Borrower</button>
    </form>
  );
};

export default CreateBorrower;
