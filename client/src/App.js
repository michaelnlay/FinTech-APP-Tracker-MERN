import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AllUser from "./components/AllUsers";
import Navbar from "./components/Navbar";
import NewUserForm from "./components/NewUserForm";
import EditUserForm from "./components/EditUserForm";
import Main from "./components/Main";
// import Filter from "./components/Filter";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  //Step to connect AllExpenses and NewExpenseForm so the useEffect on the AllExpenses can re-render to update the newly add Expense
  const [newExpenseToggle, setNewExpenseToggle] = useState(false);
  //create a state variable to store expense
  let [expenses, setExpenses] = useState([]);
  //filter expenses
  let [filterExpenses, setFilterExpenses] = useState([]);
  //toggle

  const getUserExpenses = () => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        console.log("response from axios.get", res);
        setExpenses(res.data.results);
        setFilterExpenses(res.data.results);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    getUserExpenses();
  }, []);

  const filterCat = (e, catType) => {
    e.preventDefault(); //to prevent the route
    console.log("the category is", catType);
    setFilterExpenses(expenses.filter((e) => e.category == catType)); //
    // props.onCatChange(filterExpenses)

    // setSelectCat(catType); //don't need
  };

  const onSearch = (searchquery) => {
    console.log(searchquery);
    // let result = [];
    // for (exp of expenses) {

    setFilterExpenses(
      filterExpenses.filter((e) =>
        e.name.toLowerCase().includes(searchquery.toLowerCase())
      )
    );
    // }
  };
  return (
    <BrowserRouter>
      <div className="App container">
        <Navbar onSearch={onSearch} expenses={filterExpenses}></Navbar>
        <br />
        <br />
        <br />
        <br />

        <Switch>
          <Route exact path="/">
            <br />
            <h1>Financial Application Tracker</h1>

            <hr />
            <h3>Filter by Category:</h3>

            <button
              className="btn btn-hover"
              onClick={(e) => filterCat(e, "shop_entertainment")}
              style={{ backgroundColor: "#ff6384", color: "white" }}
            >
              Shopping & Entertainment
            </button>
            <button
              className="btn"
              onClick={(e) => filterCat(e, "transportation")}
              style={{ backgroundColor: "#36a2eb", color: "white" }}
            >
              Transporation
            </button>
            <button
              className="btn"
              onClick={(e) => filterCat(e, "restaurant_dining")}
              style={{ backgroundColor: "#ffcd56", color: "white" }}
            >
              Restaurant & Dining
            </button>
            <button
              className="btn"
              onClick={(e) => filterCat(e, "home_utilities")}
              style={{ backgroundColor: "#800080", color: "white" }}
            >
              Home & Utilities
            </button>
            <button
              className="btn"
              onClick={(e) => filterCat(e, "groceries")}
              style={{ backgroundColor: "#008000", color: "white" }}
            >
              Groceries
            </button>
            <hr />
            {/* <Main expenses={expenses}></Main> */}
            <Main expenses={filterExpenses}></Main>

            <hr />
            <AllUser //this is our all expenses
              expenses={filterExpenses}
            ></AllUser>
          </Route>

          <Route exact path="/new">
            <NewUserForm></NewUserForm>
          </Route>

          <Route exact path="/edit/:_id">
            <EditUserForm></EditUserForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
