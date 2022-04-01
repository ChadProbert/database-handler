import React, { Component } from "react";
import { Button } from "@mui/material";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

// stylesheets
import "./css/CarsTable.css";

export default class CarsTable extends Component {
	constructor(props) {
		super(props);

		// initial states
		this.state = {
			cars: [],
		};

		this.handleFilter = this.handleFilter.bind(this);
	}

	// captures the data found at localhost:5000/cars each time the page is loaded
	async componentDidMount() {
		await fetch("/cars")
			.then((res) => res.json())
			.then((cars) => {
				this.setState({
					cars: cars,
				});
			});
	}

	// filters the cars list to only show the cars that have a car year less than 2017
	async handleFilter() {
		await fetch("/find-older-than-5-years")
			.then((res) => res.json())
			.then((cars) => {
				this.setState({
					cars: cars,
				});
			});
	}

	// mapping out the list of cars inside a neat data table
	render() {
		let carData = this.state.cars.map((car) => {
			return (
				<tr key={car.registration}>
					<td>{car.registration}</td>
					<td>{car.make}</td>
					<td>{car.model}</td>
					<td>{car.year}</td>
					<td>{car.owner}</td>
				</tr>
			);
		});
		return (
			<div>
				<MDBTable hover className="table">
					<MDBTableHead textWhite>
						<tr>
							<th className="leftTableCorner">Registration</th>
							<th>Car Make</th>
							<th>Car Model</th>
							<th>Car Year</th>
							<th className="rightTableCorner">Car Owner</th>
						</tr>
					</MDBTableHead>
					<MDBTableBody>{carData}</MDBTableBody>
				</MDBTable>
				<Button
					className="filterButton"
					variant="contained"
					onClick={this.handleFilter}
				>
					show older than 5 years
				</Button>
			</div>
		);
	}
}

/* reference:

https://mdbootstrap.com/docs/react/tables/basic/

my own work from level 2 task 21

*/
