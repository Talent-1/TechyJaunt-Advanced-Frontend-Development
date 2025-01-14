// script.js
class Person {
    constructor(firstName, lastName, accountBalance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountBalance = accountBalance;
        this.transactionHistory = [];
    }

    getDetails() {
        return `Dear ${this.firstName} ${this.lastName}, your account balance is $${this.accountBalance}.`;
    }

    deposit(amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            this.recordTransaction("Deposit", amount);
            return `Deposited $${amount}. New balance: $${this.accountBalance}`;
        } else {
            return "Invalid deposit amount.";
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.accountBalance) {
            this.accountBalance -= amount;
            this.recordTransaction("Withdrawal", amount);
            return `Withdrew $${amount}. New balance: $${this.accountBalance}`;
        } else if (amount <= 0) {
            return "Invalid withdrawal amount.";
        } else {
            return "Insufficient funds.";
        }
    }

    recordTransaction(type, amount) {
        const now = new Date();
        const transaction = {
            type: type,
            amount: amount,
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        this.transactionHistory.push(transaction);
        this.updateTransactionHistoryDisplay(); // Update display after each transaction
    }

    getTransactionHistory() {
        return this.transactionHistory;
    }
    updateTransactionHistoryDisplay() {
        const transactionList = document.getElementById('transaction-list');
        transactionList.innerHTML = ''; // Clear the list

        this.transactionHistory.forEach(transaction => {
            const li = document.createElement('li');
            li.textContent = `${transaction.type} of $${transaction.amount} on ${transaction.date} at ${transaction.time}`;
            transactionList.appendChild(li);
        });
    }
}

// Create a person object (you can get this data from user input later)
const person = new Person("Chibuzo", "Hillary", 1000);

// Update the HTML with the account holder's name and initial balance
document.getElementById("account-holder").textContent = person.getDetails().split(",")[0];
document.getElementById("account-balance").textContent = person.getDetails().split(",")[1];

// Handle transactions
const transactionButton = document.getElementById("make-transaction");
transactionButton.addEventListener("click", () => {
    const transactionType = document.getElementById("transaction-type").value;
    const transactionAmount = parseFloat(document.getElementById("transaction-amount").value);

    if (isNaN(transactionAmount) || transactionAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let message;
    if (transactionType === "deposit") {
        message = person.deposit(transactionAmount);
    } else if (transactionType === "withdrawal") {
        message = person.withdraw(transactionAmount);
    }

    document.getElementById("account-balance").textContent = person.getDetails().split(",")[1];
    alert(message);
});

person.updateTransactionHistoryDisplay(); // Initial display of transaction history