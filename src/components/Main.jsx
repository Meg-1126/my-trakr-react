import React, { useState, useEffect } from 'react';
import Account from './Account';
import Transaction from './Transaction';
import axios from 'axios';

export default function Main() {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    //get request
    axios.get('/accounts').then((response) => {
      console.log('get acc response', response.data);
      setAccounts([...response.data]);
    });
  }, []);
  useEffect(() => {
    //get request
    axios.get('/transactions').then((response) => {
      console.log('get transactions response', response.data);
      setTransactions([...response.data]);
    });
  }, []);
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
