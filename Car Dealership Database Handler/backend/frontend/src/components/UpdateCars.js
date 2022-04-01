import React, { Component } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

// stylesheets
import "./css/UpdateCars.css";

// allows the user to change the owner name of multiple cars
export default class UpdateCars extends Component {
	constructor(props) {
		super(props);

		// defining states
		this.state = {
			currentOwner: "",
			newOwner: "",
		};

		this.handleCurrentOwner = this.handleCurrentOwner.bind(this);
		this.handleNewOwner = this.handleNewOwner.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// captures the user inputs:

	handleCurrentOwner(e) {
		this.setState({ currentOwner: e.target.value });
	}
	handleNewOwner(e) {
		this.setState({ newOwner: e.target.value });
	}

	/* sends a put request to localhost:5000/update-owner-of-cars to change 
	all the cars that have the current owner input as the owner of the car
	to have the new owner input as the owner of the car */
	handleSubmit(e) {
		fetch("/update-owner-of-cars", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				currentOwner: this.state.currentOwner,
				newOwner: this.state.newOwner,
			}),
		}).then((res) => res.json());
	}

	// rendering the form that allows the user to change the owner of multiple cars
	// assigning the relevant event handlers
	render() {
		return (
			<div className="form-wrapper">
				<form className="updateCarsForm" onSubmit={this.handleSubmit}>
					<TextField
						className="currentOwnerInput"
						required
						id="outlined-required"
						label="Current Owner"
						placeholder="James Smith"
						onChange={this.handleCurrentOwner}
					/>

					<TextField
						className="newOwnerInput"
						required
						id="outlined-required"
						label="New Owner"
						placeholder="Susan Smith"
						onChange={this.handleNewOwner}
					/>

					<p className="caseSensitive">
						All fields are case sensitive and required!
					</p>

					<Button
						className="updateCarsButton"
						variant="contained"
						type="submit"
					>
						update cars
					</Button>
				</form>
			</div>
		);
	}
}

/*references:

https://stackoverflow.com/questions/37269808/react-js-uncaught-in-promise-syntaxerror-unexpected-token-in-json-at-posit

*/
