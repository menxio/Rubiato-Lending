import React from 'react';
import Borrowers from './components/Borrowers';
import CreateBorrower from './components/CreateBorrower';
import Loans from './components/Loans';
import CreateLoan from './components/CreateLoan';

const App = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CreateBorrower />
      <Borrowers />
      <CreateLoan />
      <Loans />
    </div>
  );
};

export default App;
