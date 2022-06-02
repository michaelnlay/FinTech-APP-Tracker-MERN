import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import moment from "moment"; //date formatting

const AllUser = (props) => {

  //delete a user
  const deleteUser = (id) => {
    console.log("delete use with its id", id);
    axios
      .delete(`http://localhost:8000/api/users/${id}`)
      .then((res) => {
        console.log("delete one user", res);
        // setDeleteToggle(!deleteToggle);
      })
      .catch((err) => {
        console.log("eeer", err);
      });
  };

  const totalExpense = () => {
    let sum = 0;
    for (let expense of props.expenses) {
      sum += expense.amount;
    }
    return sum;
  };

  return (
    <div>
      <h3>
        Total Expenses: <span className="text-info">${totalExpense()}</span>
      </h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Category</th>
            <th scope="col">Amount ($)</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.expenses.map((userObj, idx) => (
            <tr>
              <td>
                {/* <Link to={`/users/${userObj._id}`}> </Link>{" "} */}
                {userObj.name}
              </td>
              <td>
                {/* {userObj.date} */}
                {moment
                  .utc(userObj.date.toLocaleString())
                  .format("MMM Do, YYYY")}
              </td>
              <td>{userObj.category}</td>
              <td>{userObj.amount}</td>

              <td>
                <Link
                  to={`/edit/${userObj._id}`}
                  className="btn btn-warning m-1"
                >
                  Edit
                </Link>
                <button
                  onClick={(e) => {
                    deleteUser(userObj._id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
