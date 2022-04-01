import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route } from "react-router-dom";

// components
import RouteMenu from "./components/RouteMenu";
import AddCar from "./components/AddCar";
import UpdateCar from "./components/UpdateCar";
import UpdateCars from "./components/UpdateCars";
import DeleteCar from "./components/DeleteCar";
import CarsTable from "./components/CarsTable";

// created routes for the CRUD operation components
function App() {
	return (
		<div className="App">
			<RouteMenu />
			<Container fluid>
				<Row>
					<Col md={3}>
						<Route path="/AddCar" component={AddCar} />
						<Route path="/UpdateCar" component={UpdateCar} />
						<Route path="/UpdateCars" component={UpdateCars} />
						<Route path="/DeleteCar" component={DeleteCar} />
					</Col>
					<Col md={9}>
						<CarsTable />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;

/* references:

https://react-bootstrap.github.io/layout/grid/

https://www.positronx.io/react-mern-stack-crud-app-tutorial/

https://react-bootstrap.github.io/

https://github.com/moralesmiguel/MERN-Car-CRUD

https://www.npmjs.com/package/react-router-dom

*/
