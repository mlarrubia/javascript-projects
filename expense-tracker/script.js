
const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 }
];


let transactions = dummyTransactions;



// Add tranactions to DOM List

function addTransactionDOM(tranaction) {
  // Get sign
  const sign = tranaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add Class based on value
  item.classList.add(tranaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
    ${tranaction.text} <span>${sign}${Math.abs(tranaction.amount)}</span>
    <button class="delete-btn">X</button>
  `;

  list.appendChild(item);


}

// Update the balance, income and expense

function updateValues() {
  const amount = transactions.map(transaction => transaction.amount);

  const total = amount.reduce((acc, item) => {
    return acc += item;
  }, 0).toFixed(2);

  const income = amount
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);


  const expense = (amount
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    * -1)
    .toFixed(2);


  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;



}



















// Init app

function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();




































