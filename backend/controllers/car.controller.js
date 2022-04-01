// performs CRUD operations to 'cars' collection inside 'Car Control' database

const Car = require("../models/car.model.js");
const mongoose = require("mongoose");

// creates and saves a new car document to 'cars' collection
exports.createNewCar = function (req, res) {
	let carModel = new Car({
		registration: req.body.registration,
		make: req.body.make,
		model: req.body.model,
		year: req.body.year,
		owner: req.body.owner,
	});
	carModel.save(function (err, data) {
		if (err) {
			console.log(err);
			res.status(500).send({
				message: "An error occurred while creating a new car document.",
			});
		} else {
			console.log(data);
			res.send("Successfully created a new car!");
		}
	});
};

// reads all documents inside of the cars collection
exports.findAllCars = function (req, res) {
	Car.find(function (err, cars) {
		if (err) {
			console.log(err);
			res
				.status(500)
				.send({ message: "An error occurred while reading car documents." });
		} else {
			res.send(cars);
		}
	});
};

/* updates the document which has the specified registration (specified by the user)
with new data. */
exports.updateByRegistration = function (req, res) {
	Car.findOneAndUpdate(
		{ registration: req.body.registration },
		{
			make: req.body.make,
			model: req.body.model,
			year: req.body.year,
			owner: req.body.owner,
		},
		// returns the document after the update is applied
		{ new: true },
		function (err) {
			if (err) {
				console.log("An error occurred while updating the car's documents.");
				res.send(err);
			} else {
				res.send("Successfully updated the car!");
			}
		}
	);
};

// updates the owner's name of multiple cars' documents
exports.updateOwnerOfCars = function (req, res) {
	Car.updateMany(
		{ owner: req.body.currentOwner },
		{ $set: { owner: req.body.newOwner } },
		function (err) {
			if (err) {
				console.log(
					"An error occurred while updating the owner of the cars' documents."
				);
				res.send(err);
			} else {
				res.send("Successfully updated the owner of the cars!");
			}
		}
	);
};

// deletes a car with the specified registration
// used registration numbers because they are unique.
exports.deleteByRegistration = function (req, res) {
	Car.findOneAndRemove({ registration: req.body.registration }, function (err) {
		if (err) {
			console.log("An error occurred while removing the car's documents.");
			res.send(err);
		} else {
			res.send("Successfully removed the car!");
		}
	});
};

// finds car documents that contain year: <less than 2017>
exports.findOlder = function (req, res) {
	Car.find({ year: { $lt: 2017 } }, function (err, cars) {
		if (err) {
			console.log(err);
			res.status(500).send({
				message: "An error occurred while finding cars older than 5 years.",
			});
		} else {
			res.send(cars);
		}
	});
};

/* references:

https://mongoosejs.com/docs/tutorials/findoneandupdate.html

https://success.jitterbit.com/display/CS/Database+Update+or+Upsert+Activity

https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/

Level 3 Task 7 Databases IV pdf

https://github.com/moralesmiguel/MERN-Car-CRUD

*/
