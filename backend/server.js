const express = require("express");
const cookieParser = require("cookie-parser");
let mongoose = require("mongoose");
const app = express();

// .env file contains information that must not be shared - the database username and password).
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const car = require("./controllers/car.controller");

// routes for the crud operations
app.get("/cars", car.findAllCars);
app.post("/add-car", car.createNewCar);
app.put("/update-car-by-registration", car.updateByRegistration);
app.put("/update-owner-of-cars", car.updateOwnerOfCars);
app.delete("/delete-car-by-registration", car.deleteByRegistration);
app.get("/find-older-than-5-years", car.findOlder);

// connecting to the database:

const url = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@chad-probert-001.r7fct.mongodb.net/CarControl?retryWrites=true`;

mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on("error", function () {
	console.log("Could not connect to the database. Exiting now...");
	process.exit();
});

mongoose.connection.once("open", function () {
	console.log("Successfully connected to the database!");
});

// port can be dynamically bound to the production environment port
const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`Listening on PORT ${PORT}`);

/*references: 

my own work from level 2 task 21

Level 3 Task 7 Databases IV pdf 

https://www.npmjs.com/package/express

https://mongoosejs.com/docs/

https://www.positronx.io/react-mern-stack-crud-app-tutorial/

https://github.com/moralesmiguel/MERN-Car-CRUD

https://stackoverflow.com/questions/42335016/dotenv-file-is-not-loading-environment-variables

*/
