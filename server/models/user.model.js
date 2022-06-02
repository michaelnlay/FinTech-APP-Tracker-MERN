const mongoose = require("mongoose"); //import mongoose for model to regconize

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      minlength: [2, "User name must be at least 2 characters"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
      min: ["2020-01-01", "Date cannot be before 2020-01-01"],
    },
    category: {
      type: String,
      required: [true, "User name is required"],
      minlength: [2, "User name must be at least 2 characters"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is requried"],
      min: [0, "Can't be less than 0 dollar"],
    },
  },
  { timestamps: true } //for created and updated at
);

//use UserSchema - told DB what instruction to use
const User = mongoose.model("User", UserSchema); //DB table will save as User

module.exports = User;
