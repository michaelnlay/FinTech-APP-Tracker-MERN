const express = require("express"); //importing express
const cors = require("cors"); //import CORS - cross origin resource sharing
const app = express(); //create our app variable which is an instance of express
const port = 8000; //declaring port for backend api to run in

//NEED this to handle POST Results. Have these two lines before the routes!!!
app.use(express.json()); //lets our app convert form into json
app.use(express.urlencoded({ extended: true })); //lets our app parse form information
app.use(cors()); //enable cors so that we can share resources back and forth between the backend and frontend

//routes here - MAKE SURE ROUTES IMPORT IS BELOW ALL THE APP.USE COMMANDS ABOVE
require("./server/routes/user.routes")(app);

//Mongoose connection
require("./server/config/mongoose.config");

app.listen(port, () => console.log(`Listening on port: ${port}`));
