import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //Use it to access match
import { useHistory } from "react-router-dom"; //redirect
import moment from 'moment'

const EditUserForm = () => {
  //Step 2A - create state variable to store info from the backend
  const [userInfo, setUserInfo] = useState({});

  //Step 1A - Pre-populated form using useParam
    const { _id } = useParams();
    
//Step 4 - after updated, redirect to home page
    const history = useHistory();

  useEffect(() => {
    //Step 2 - to pre-populated the form, we need get and then put
    axios
      .get(`http://localhost:8000/api/users/${_id}`)
      .then((res) => {
        console.log("res from get one expense->", res);
        setUserInfo(res.data.results);
      })
      .catch((err) => console.log("err from get one expense->", err));
  }, []);
    
    //Step 2C - changeHandler pass on the onChange{} to edit the prepopulated info
    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo, //to show all userInfo
            //this is how your updated pre-populated objects
            [e.target.name]:e.target.value

        })
    }
    
    //Step 3 - submitHandler for the post
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/users/${_id}`, userInfo)
            .then(res => {
                console.log("res from submitHandler", res)
                history.push("/")
            })
            .catch(err => {
            console.log("err from submitHandler", err)
        })
    }

  return (
    <>
      <br />
      <br/>
      <div>
      <h1>Edit Expense</h1> <br />
      {/* Step 1 - copy/paste form from NewUserForm */}
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="">Name:</label>
          {/* Step 2B- Now we can prepopulated by passing state varible to value
          ;however, you will need onChange to modify the prepopulated value */}
                  <input type="text"
                      name="name" className="form-control" onChange={changeHandler}
                      value={userInfo.name} />
        </div>
        <div className="form-group">
          <label htmlFor="">Date:</label>
                  <input type="date"
                      name="date"
                      className="form-control"
                      onChange={changeHandler}
                      value={moment.utc(userInfo.date?.toLocaleString()).format("YYYY-MM-DD")} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>

                  <select name="category" className="form-control"
                      name="category"
                      onChange={changeHandler} value={userInfo.category}>
            <option value="disable" disabled>
              Please selected:
            </option>
            <option value="home_utilities">Home & Utilities</option>
            <option value="transportation">Transportation</option>
            <option value="groceries">Groceries</option>
            <option value="restaurant_dining">Restaurant & Dining</option>
            <option value="shop_entertainment">Shopping & Entertainment</option>
          </select>
          <div className="form-group">
            <label htmlFor="">Amount ($):</label>
                      <input type="number"
                          className="form-control"
                          name="amount"
                          onChange={changeHandler}value={userInfo.amount} />
          </div>
          <input
            type="submit"
            value="Update Expense"
            className="btn btn-success mt-2"
          />
        </div>
      </form>
      </div>
      </>
  );
};

export default EditUserForm;
