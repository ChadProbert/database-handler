import React, { Component } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

// stylesheets
import "./css/UpdateCar.css";

// allows the user to make changes to an existing car
export default class UpdateCar extends Component {
	constructor(props) {
		super(props);

		// defining states
		this.state = {
			model: "",
			make: "",
			registration: "",
			owner: "",
			year: "",
		};

		this.handleRegistrationChange = this.handleRegistrationChange.bind(this);
		this.handleMakeChange = this.handleMakeChange.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handleYearChange = this.handleYearChange.bind(this);
		this.handleOwnerChange = this.handleOwnerChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// captures the user's inputs:

	handleRegistrationChange(e) {
		this.setState({ registration: e.target.value });
	}
	handleMakeChange(e) {
		this.setState({ make: e.target.value });
	}
	handleModelChange(e) {
		this.setState({ model: e.target.value });
	}
	handleYearChange(e) {
		this.setState({ year: e.target.value });
	}
	handleOwnerChange(e) {
		this.setState({ owner: e.target.value });
	}

	/* sends a put request to localhost:5000/update-car-by-registration of the changes
	that will be made to the specified registration */
	handleSubmit(e) {
		fetch("/update-car-by-registration", {
			method: "PUT",
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

	// rendering the form that the user will fill in to make updates to a car
	// assigning the relevant event handlers
	render() {
		return (
			<div className="form-wrapper">
				<form className="updateCarForm" onSubmit={this.handleSubmit}>
					<TextField
						className="carRegNumInput"
						required
						id="outlined-required"
						label="Registration"
						onChange={this.handleRegistrationChange}
						placeholder="ABC 123 GP"
					/>

					<TextField
						className="carMakeInput"
						required
						id="outlined-required"
						label="Make"
						onChange={this.handleMakeChange}
						placeholder="Ford"
					/>

					<TextField
						className="carModelInput"
						required
						id="outlined-required"
						label="Model"
						onChange={this.handleModelChange}
						placeholder="Fiesta"
					/>

					<TextField
						className="carYearInput"
						required
						id="outlined-required"
						label="Year"
						onChange={this.handleYearChange}
						placeholder="2009"
					/>

					<TextField
						className="carOwnerInput"
						required
						id="outlined-required"
						label="Owner"
						onChange={this.handleOwnerChange}
						placeholder="James Smith"
					/>

					<p className="caseSensitive">
						All fields are case sensitive and required!
					</p>

					<Button className="updateCarButton" variant="contained" type="submit">
						update car
					</Button>
				</form>
			</div>
		);
	}
}
