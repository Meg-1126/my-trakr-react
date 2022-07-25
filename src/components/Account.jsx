import React, { useState } from 'react';
import axios from 'axios';

export default function Account(props) {
  // const accounts = props.accounts;
  // const setAccounts = props.setAccounts;
  const { accounts, setAccounts } = props;
  const [accountName, setAccountName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted', accountName);
    const newAccount = {
      id: accounts.length + 1,
      name: accountName,
    };
    axios
      .post('/accounts', { newAccount })
      .then((res) => {
        console.log('res', res);
        setAccounts(res.data);
      })
      .catch((err) => console.log('err', err));
    // accounts.push(newAccount); BAD IDEA
    // const updatedAccounts = [...accounts, newAccount];
    // setAccounts(updatedAccounts);
  };
  const handleInputChange = (e) => {
    setAccountName(e.target.value);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>New Account</h2>
        <input value={accountName} onChange={handleInputChange} />
        <button>Add new account</button>
      </form>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>{account.name}</li>
        ))}
      </ul>
    </section>
  );
}
