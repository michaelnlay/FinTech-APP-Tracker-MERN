//import model file here to connect with controller
const User = require("../models/user.model");


//Find all users
module.exports.findAllUsers = (req,res) => {
    User.find()
        .then(allUsers => {
            res.json({results:allUsers})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}    

//Create a user
module.exports.createUser = (req, res) => {
    //req.body represents form information
    User.create(req.body)
        .then(newlyCreateUser => {
        res.json({results:newlyCreateUser})
    })
    .catch(err => {
        res.json({ msg: "Something went wrong", error: err })
})
    
}

//Find one user
module.exports.findOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(foundUser => {
            res.json({results:foundUser})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Update a user
module.exports.updateUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id },//specify which users to update by id
        req.body,
    {new:true,runValidators:true}) //specify the form information to update the user
        .then(updateUser => {
            res.json({results:updateUser})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Delete a user
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(deleteUser => {
            res.json({results:deleteUser})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//Random users by index
module.exports.findRandomUser = (req,res) => {
    User.find()
        .then(allUsers => {
            //get a random index number from index 0 up to but not including the allQuotes.length
            let randomIdx=Math.floor(Math.random()*allUsers.length)

            res.json({results:allUsers[randomIdx]})
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
    })
}