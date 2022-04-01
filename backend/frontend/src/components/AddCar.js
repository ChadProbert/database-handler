import React, { Component } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

// stylesheets
import "./css/AddCar.css";

export default class AddCar extends Component {
	constructor(props) {
		super(props);

		// initial states
		this.state = {
			registration: "",
			make: "",
			model: "",
			year: "",
			owner: "",
		};

		this.handleRegistration = this.handleRegistration.bind(this);
		this.handleMake = this.handleMake.bind(this);
		this.handleModel = this.handleModel.bind(this);
		this.handleYear = this.handleYear.bind(this);
		this.handleOwner = this.handleOwner.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// captures new car details input by the user:

	handleRegistration(e) {
		this.setState({ registration: e.target.value });
	}
	handleMake(e) {
		this.setState({ make: e.target.value });
	}
	handleModel(e) {
		this.setState({ model: e.target.value });
	}
	handleYear(e) {
		this.setState({ year: e.target.value });
	}
	handleOwner(e) {
		this.setState({ owner: e.target.value });
	}

	// sends a post request with new car details (input by user) to localhost:5000/add-car
	handleSubmit(e) {
		fetch("/add-car", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model: this.state.model,
				make: this.state.make,
				year: this.state.year,
				registration: this.state.registration,
				owner: this.state.owner,
			}),
		}).then((res) => res.json());
	}

	// rendering the form for the user to fill in the new car details
	// assigning the relevant event handlers to user inputs
	render() {
		return (
			<div className="form-wrapper">
				<form className="addCarForm" onSubmit={this.handleSubmit}>
					<TextField
						className="carRegNumInput"
						required
						id="outlined-required"
						label="Registration"
						onChange={this.handleRegistration}
						placeholder="ABC 123 GP"
					/>

					<TextField
						className="carMakeInput"
						required
						id="outlined-required"
						label="Make"
						onChange={this.handleMake}
						placeholder="Ford"
					/>

					<TextField
						className="carModelInput"
						required
						id="outlined-required"
						label="Model"
						onChange={this.handleModel}
						placeholder="Fiesta"
					/>

					<TextField
						className="carYearInput"
						required
						id="outlined-required"
						label="Year"
						onChange={this.handleYear}
						placeholder="2009"
					/>

					<TextField
						className="carOwnerInput"
						required
						id="outlined-required"
						label="Owner"
						onChange={this.handleOwner}
						placeholder="James Smith"
					/>

					<p className="caseSensitive">
						All fields are case sensitive and required!
					</p>

					<Button className="addCarButton" variant="contained" type="submit">
						add car
					</Button>
				</form>
			</div>
		);
	}
}

/* references: 

https://mui.com/

https://www.positronx.io/react-mern-stack-crud-app-tutorial/

https://github.com/moralesmiguel/MERN-Car-CRUD

*/
