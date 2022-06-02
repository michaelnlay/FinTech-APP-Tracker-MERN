import React, { useState } from "react";
import axios from "axios"; //API call
import { useHistory } from "react-router-dom"; //redirect
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

//Step 1 - create a form
const NewUserForm = (props) => {
  // Step 2 - create state variable - for each one of the variable in the form
  let [name, setName] = useState("");
  let [date, setDate] = useState("");
  let [category, setCategory] = useState("");
  let [amount, setAmount] = useState("");

  //Step 4A - state variable to store validation errors inside of the form
  let [errors, SetErrors] = useState({});

  //instantiate history (redirect)
  let history = useHistory();

  //Step 3 - create submithandler
  const addExpense = (e) => {
    e.preventDefault();

    //Step 3A - package up the state variables into an object
    let formInfo = { name, date, category, amount };

    //Step 3B - make an API post to our backend
    axios
      .post("http://localhost:8000/api/users", formInfo)
      .then((res) => {
        console.log("res from posting formInfo", res);
        history.push("/");

        //Step 4 - Validation errors
        if (res.data.error) {
          SetErrors(res.data.error.errors);
        } else {
          //Step 3C - clear value after form submit
          setName("");
          setDate("");
          setCategory("");
          setAmount("");

          props.setNewExpenseToggle(!props.newExpenseToggle)
        }
      })
      .catch((err) => {
        console.log("err from post", err);
      });
  };

  return (
    <>
      
      <br />
      <br />
      <div>
        <h1>New Expense Form</h1> <br />
        <form onSubmit={addExpense}>
          <div className="form-group">
            {/* Step 2A - When update form info, the state varibles to also update the values inside the form is by using OnChange */}
            <label htmlFor="">Name:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              value={name}
            />
            {/* Step 4B - error message */}
            <p className="text-danger">{errors.name?.message}</p>
            {/* {errors.name?errors.name.message:null} <-can also write this*/}
          </div>
          <div className="form-group">
            <label htmlFor="">Date:</label>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
              value={date}
            />
            <p className="text-danger">{errors.date?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            {/* Step 3D - add value ={name} to clear the value after form submit */}
            <select
              className="form-control"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              defaultValue={"default"}
            >
              {/* <p className="text-danger">{errors.category?.message}</p> */}

              <option value="default" disabled>
                Please select a category
              </option>
              <option value="home_utilities">Home & Utilities</option>
              <option value="transportation">Transportation</option>
              <option value="groceries">Groceries</option>
              <option value="restaurant_dining">Restaurant & Dining</option>
              <option value="shop_entertainment">
                Shopping & Entertainment
              </option>
            </select>
            <div className="form-group">
              <label htmlFor="">Amount ($):</label>
              <input
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                className="form-control"
                value={amount}
              />
              <p className="text-danger">{errors.amount?.message}</p>
            </div>
            <input
              type="submit"
              value="Add Expense"
              className="btn btn-success m-2"
            />
            <Link to={"/"} className="btn btn-warning m-2 text-white">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewUserForm;
