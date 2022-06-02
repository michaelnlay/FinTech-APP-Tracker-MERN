//import controller file here
const UserController = require("../controllers/user.controller");

module.exports=(app)=> {

    //random user
    // app.get('/api/users/random', UserController.findRandomUser);

    //route to find all users
    app.get("/api/users", UserController.findAllUsers);

    //route to create a user
    app.post("/api/users", UserController.createUser);

    //route to find a user
    app.get("/api/users/:id", UserController.findOneUser);

    //route to update a user
    app.put("/api/users/:id", UserController.updateUser)

    //route to delete a user
    app.delete("/api/users/:id", UserController.deleteUser);
}
