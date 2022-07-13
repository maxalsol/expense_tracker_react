import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    // function to save input child to parent
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // defining expenseData object
        const expenseData = {
            // copy in entered expenseData (expected object defined in the submitHandler)
            ...enteredExpenseData,
            // adding a new id key
            id: Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
