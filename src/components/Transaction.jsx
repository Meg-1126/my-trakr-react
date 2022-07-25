import React, { useState } from 'react';
import Category from './Category';

export default function Transaction(props) {
  // const accounts = props.accounts
  // const setTransactions = props.setTransactions
  // const transactions = props.transactions
  const [formData, setFormData] = useState({
    id: 0,
    type: '',
    amount: 0,
    description: '',
    accountId: 0,
    accountIdFrom: 0,
    accountIdTo: 0,
  });
  const { accounts, transactions, setTransactions } = props;
  const accountsOptions = accounts.map((account) => (
    <option value={account.id} key={account.id}>
      {account.name}
    </option>
  ));
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = { ...formData, id: transactions.length + 1 };
    const newTransactions = [...transactions, newFormData];
    setTransactions(newTransactions);
  };

  return (
    <section>
      <h2>New Transaction Form</h2>
      <form onSubmit={handleSubmit}>
        <div onChange={handleChange}>
          <input type='radio' name='type' value={'Deposit'} /> Deposit
          <input type='radio' name='type' value={'Withdrawal'} /> Withdrawal
          <input type='radio' name='type' value={'Transfer'} /> Transfer
        </div>
        <div>
          <label htmlFor='accountId'>Account: </label>
          <select name='accountId' onChange={handleChange} defaultValue=''>
            <option value={''} disabled>
              Select an account
            </option>
            {accountsOptions}
          </select>
        </div>
        <div>
          <label htmlFor='accountIdFrom'>From:</label>
          <select name='accountIdFrom' onChange={handleChange}>
            <option value={''} disabled>
              Select an account
            </option>
            {accountsOptions}
          </select>
        </div>
        <div>
          <label htmlFor='accountIdTo'>To:</label>
          <select name='accountIdTo' onChange={handleChange}>
            <option value={''} disabled>
              Select an account
            </option>
            {accountsOptions}
          </select>
        </div>
        <Category handleChange={handleChange} />
        <div>
          <label htmlFor='description'>Description:</label>
          <input type='text' name='description' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='amount'>Amount:</label>
          <input type='number' name='amount' onChange={handleChange} />
        </div>
        <button>Add Transaction</button>
      </form>
    </section>
  );
}
