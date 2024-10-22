const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalExpenseDisplay = document.getElementById('total-expense');
let totalExpenses = 0;

expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (!isNaN(expenseAmount) && expenseAmount > 0) {
        // Add expense to the list
        const expenseItem = document.createElement('div');
        expenseItem.className = 'expense-item';
        expenseItem.innerHTML = `<span>${expenseName}</span><span>$${expenseAmount.toFixed(2)}</span>`;
        expenseList.appendChild(expenseItem);

        // Update total expenses
        totalExpenses += expenseAmount;
        totalExpenseDisplay.innerText = `Total Expenses: $${totalExpenses.toFixed(2)}`;

        // Clear the input fields
        this.reset();
    } else {
        alert("Please enter a valid amount");
    }
});