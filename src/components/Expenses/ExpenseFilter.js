import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = () => {
    const dropdownChangeHandler = (evt) => {
        console.log(evt.target.value);
    };

    return (
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Filter by year</label>
                <select onChange={dropdownChangeHandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
