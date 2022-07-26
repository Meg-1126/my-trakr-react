import axios from 'axios';
import React, { useState } from 'react';
import Category from './Category';
// import axios from 'axios';

export default function Transaction(props) {
  const { setTransactions, transactions } = props;
  const [formData, setFormData] = useState({
    id: 0,
    type: '',
    amount: 0,
    description: '',
    accountId: 0,
    accountIdFrom: 0,
    accountIdTo: 0,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted form transaction');
    axios
      .post('/transaction', { newTransaction: formData })
      .then((response) => {
        setTransactions([...transactions, response.data]);
      });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    let value;
    if (
      name === 'accountId' ||
      name === 'accountIdFrom' ||
      name === 'accountIdTo' ||
      name === 'amount'
    ) {
      value = Number(event.target.value);
    } else {
      value = event.target.value;
    }
    const newFormData = { ...formData, [name]: value };
    console.log('newFormData', newFormData);
    setFormData(newFormData);
  };

  const accountsOptions = props.accounts.map((account) => (
    <option key={account.id} value={account.id}>
      {account.name}
    </option>
  ));
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
          <select name='accountId' defaultValue='' onChange={handleChange}>
            <option value={''} disabled>
              Select an account
            </option>
            {accountsOptions}
          </select>
        </div>
        <div>
          <label htmlFor='accountIdFrom'>From:</label>
          <select name='accountIdFrom' defaultValue='' onChange={handleChange}>
            <option value={''} disabled>
              Select an account
            </option>
            {accountsOptions}
          </select>
        </div>
        <div>
          <label htmlFor='accountIdTo'>To:</label>
          <select name='accountIdTo' defaultValue='' onChange={handleChange}>
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
          <input type='number' name='amount' onChange={handleChange} required />
        </div>
        <button>Add Transaction</button>
      </form>
    </section>
  );
}
