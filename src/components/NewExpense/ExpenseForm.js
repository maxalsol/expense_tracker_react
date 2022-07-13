import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // states for title, amount, date
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    // function to handle title change
    const titleChangeHandler = (evt) => {
        console.log("Title changed!", evt.target.value);
        setEnteredTitle(evt.target.value);
        // setUserInput((prevState) => {
        //    return { ...prevState, enteredTitle: evt.target.value };
        //    });
    };

    // function to handle amount change
    const amountChangeHandler = (evt) => {
        console.log("Amount changed!", evt.target.value);
        setEnteredAmount(evt.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: evt.target.value};
        // });
    };

    // function to handle date change
    const dateChangeHandler = (evt) => {
        console.log("Date changed", evt.target.value);
        setEnteredDate(evt.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: evt.target.value};
        // });
    };

    // function to handle form submit
    const submitHandler = (evt) => {
        // prevent default behavior
        evt.preventDefault();
        console.log("Form submitted");

        // combined object for the expense data from state
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        // console.log(expenseData);

        // props from Newexpense component
        props.onSaveExpenseData(expenseData);

        // Two-Way-Binding clearance
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <fieldset className="new-expense__controls">
                <legend>New Expense</legend>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                        placeholder="i.e. Music Tickets"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                        placeholder="i.e. 69.98"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </fieldset>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
