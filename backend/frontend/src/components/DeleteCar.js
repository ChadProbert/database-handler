import React, { Component } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

// stylesheets
import "./css/DeleteCar.css";

/* deletes a car with the specified registration (specified by the user) from the 
list of cars */
export default class DeleteCar extends Component {
	constructor(props) {
		super(props);

		// defining states
		this.state = {
			registration: "",
		};

		this.handleRegistrationDelete = this.handleRegistrationDelete.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// captures the registration input from the user
	handleRegistrationDelete(e) {
		this.setState({ registration: e.target.value });
	}

	/* sends a delete request to localhost:5000/delete-car-by-registration to
	delete the car with the specified registration from the list of cars */
	handleSubmit(e) {
		fetch("/delete-car-by-registration", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ registration: this.state.registration }),
		}).then((res) => res.json());
	}

	// add the user input form to delete a car
	// assigned the relevant event handlers
	render() {
		return (
			<div className="form-wrapper">
				<form className="removeCarForm" onSubmit={this.handleSubmit}>
					<TextField
						className="carRegNumInput"
						required
						id="outlined-required"
						label="Registration"
						placeholder="ABC 123 GP"
						onChange={this.handleRegistrationDelete}
					/>

					<p className="caseSensitive">
						All fields are case sensitive and required!
					</p>

					<Button className="removeCarButton" variant="contained" type="submit">
						remove car
					</Button>
				</form>
			</div>
		);
	}
}
