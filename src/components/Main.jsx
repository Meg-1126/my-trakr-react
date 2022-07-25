import React, { useState, useEffect } from 'react';
import Account from './Account';
import Transaction from './Transaction';
import axios from 'axios';

export default function Main() {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  // run useEffect every time the component re-render
  // useEffect(() => {
  //   axios.get('https://my-trakr-api.herokuapp.com/accounts').then((res) => {
  //     console.log('res', res.data);
  //     setAccounts(res.data);
  //   });
  // });

  // run useEffect once, when the page is first loaded
  useEffect(() => {
    axios.get('/accounts').then((res) => {
      console.log('res', res.data);
      setAccounts(res.data);
    });
  }, []);
  // run useEffect only when transactions state is changed
  // useEffect(() => {
  //   axios.get('https://my-trakr-api.herokuapp.com/accounts').then((res) => {
  //     console.log('res', res.data);
  //     setAccounts(res.data);
  //   });
  // }, [transactions]);
  return (
    <main>
      <Account accounts={accounts} setAccounts={setAccounts} />
      <Transaction
        transactions={transactions}
        setTransactions={setTransactions}
        accounts={accounts}
      />
    </main>
  );
}
