import React, { useState } from 'react'

export default function Transaction() {
    const [transactions, setTransactions] = useState([]);
    const [formData, setFormData] = useState({});
    const [radioData, setRadioData] = useState({});
    const [idFrom, setIdFrom] = useState({});
    const [idTo, setIdTo] = useState({});

    const handleChangeRadio = (e) => {
      console.log('radio val', e.target.value);
      const newRadioData = {...radioData, type:e.target.value};
      setRadioData(newRadioData);
      console.log(newRadioData);
    }
    const handleChange = (e) => {
        console.log('name',e.target.name)
        console.log('value',e.target.value)
        const newFormData = {...formData, [e.target.name]:e.target.value}
        setFormData(newFormData)
        console.log(formData);
    }
    const handleChangeIdFrom = (e) => {
      console.log('id from: ',e.target.name)
    }
    const handleChangeIdTo = (e) => {
      console.log('id to: ',e.target.name)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
           id: transactions.length+1,
           type: radioData.type,
           accountId: formData.accountId,
           description: "",
           amount: 0,
           category: "",
           accountIdFrom: 0,
           accountIdTo: 0
        }
        const updateTransactions = [...transactions, newTransaction];
        setTransactions(updateTransactions);
        console.log(updateTransactions);
    }

    

  return (
    <section>
           <h2>New Transaction Form</h2>
           <form onSubmit={handleSubmit}>
            <div onChange={handleChangeRadio} name="types">
                <input type="radio" name="type" value={'Deposit'} /> Deposit
                <input type="radio" name="type" value={'Withdrawal'}/> Withdrawal
                <input type="radio" name="type" value={'Transfer'}/> Transfer
            </div>
            <select onChange={handleChange} name="accountId" >
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <select onChange={handleChangeIdFrom} name="accountIdFrom" >
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <select onChange={handleChangeIdTo} name="accountIdTo" >
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <select name="category" ></select>
             <input type="text" name='description' />
             <input type="number" name='amount' />
             <button>Add new transaction</button>
           </form>
         </section>
  )
}
