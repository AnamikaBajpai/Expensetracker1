// Function to handle form submission
function addExpense(event) {
    event.preventDefault();

    // Get form values
    const expenseAmount = document.getElementById('expenseAmount').value;
    const expenseDescription = document.getElementById('expenseDescription').value;
    const expenseCategory = document.getElementById('expenseCategory').value;

    // Create new expense object
    const expense = {
      amount: expenseAmount,
      description: expenseDescription,
      category: expenseCategory
    };

    // Retrieve existing expenses from localStorage
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Add new expense to the expenses array
    expenses.push(expense);

    // Save expenses array to localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Clear form fields
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseDescription').value = '';
    document.getElementById('expenseCategory').value = '';

    // Update expense list on the browser
    updateExpenseList();
  }

  // Function to update expense list on the browser
  function updateExpenseList() {
    // Retrieve expenses from localStorage
    let expenses = JSON.parse(localStorage.getItem('expenses'));

    // Get expense list element
    const expenseList = document.getElementById('expenseList');

    // Clear existing expense list
    expenseList.innerHTML = '';

    // Loop through expenses and create list items
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `Amount: ${expense.amount} | Description: ${expense.description} | Category: ${expense.category}`;

        //Create delete button --

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent ='Delete';
        deleteButton.addEventListener('click' ,() => {

 // The line expenses.splice(index, 1) is used to remove the expense from the expenses array 
//when the user clicks the delete button
            
            expenses.splice(index,1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            updateExpenseList();

        });

         li.appendChild(deleteButton);

         //Create edit button --

         const editButton = document.createElement('button');
         editButton.className = 'edit-btn';
         editButton.textContent = 'Edit';

              editButton.addEventListener('click', () => {

    document.getElementById('expenseAmount').value = expense.amount;
    document.getElementById('expenseDescription').value = expense.description;
    document.getElementById('expenseCategory').value = expense.category;

    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateExpenseList();
  });
  li.appendChild(editButton);

  expenseList.appendChild(li);
});
}

// Add event listener to form
document.getElementById('expenseForm').addEventListener('submit', addExpense);

// Load expense list on page load
window.onload = updateExpenseList;

// Add event listener to form
document.getElementById('expenseForm').addEventListener('submit', addExpense);

// Load expense list on page load
window.onload = updateExpenseList;





























































