const mongoose = require("mongoose");

// describes the data and data types thats will be stored for each document.
/* when data is created or retrieved from the database the data will be handled
 by these models */
let carSchema = mongoose.Schema({
	registration: { type: String, required: true },
	make: { type: String, required: true },
	model: { type: String, required: true },
	year: { type: Number, required: true },
	owner: { type: String, required: true },
});

// "cars" will be the name of the collection inside of the CarControl database
module.exports = mongoose.model("cars", carSchema);

/* references:

Level 3 Task 7 Databases IV pdf

*/
