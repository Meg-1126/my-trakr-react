# App Idea

myTrakr - React Version

# User stories

User Story | Job Story
as a <role> | When I <action>
I want <goal> | I want <goal>
so that <gain> | so that <gain>

## Story 1 (Account Form):

As a user,
I want create a new account
so that I can make transactions

When I create my account
I want to select my account as sender or receiver of the transaction
so that I can post my own transactions

# Story 2 (Transaction Form):

As a user,
I want create a new transaction
so that I can keep the history of my transactions

When I create my transaction
I want to show in the transactions list
so that I can filter my transactions by account

# Story 3 (Category Form):

As a user,
I want create a new category
so that I can group related transactions

When I create my category
I want to be able to select as the category of my transaction
so that I can categorize transactions

# Story 4 (Account Summary):

As a user,
I want to see my acounts and its balance
so that I can easily decide how much I want to transfer

When I create my category
I want to be able to select as the category of my transaction
so that I can categorize transactions

# Story 4 (Filter Section):

As a user,
I want to filter my transactions by account
so that I can reduce the amount of transaction shown in the list

When I filter my transactions
I want to be able to see only transactions of a specific account
so that I can easily find an old transaction

# Data Structure

```js
//account
const account  = {
    id:0,
    name:''
}
//list of accounts
const accounts = [
    account1, account2, ...
]
//transaction
const transaction = {
    id:0,
    type:'',
    amount:0,
    description:'',
    accountId:0,
    accountIdFrom:0,
    accountIdTo:0
}
//list of transactions
const transactions = [transaction1,transaction2,... ]

//category
const category = {id:0, name:''}
//list of categories
const categories = [category1, category2, ...]
```

# HTML Structure

- body
  - header
    - h1 title
  - main
    - section new account
      - form new account
    - section new transaction
      - form new transaction
    - section account summary
      - ul
        - li account + balance
    - section transactions list
      - filter
      - table

# Component Structure

- App
  - Header
  - Main (accounts, transactions)
    - Account
    - Transaction
      - Category (categories)
    - AccountSummary
    - TransactionsList
      - Filter
      - Table

# Data Map
