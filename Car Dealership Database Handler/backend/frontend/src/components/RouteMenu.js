import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

// stylesheets
import "./css/RouteMenu.css";

/* a basic reusable component that holds a header and a onClick dropdown 
with navigations to different routes */
const RouteMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="none">
				<Toolbar disableGutters>
					<Box>
						<Tooltip title="Menu">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ mr: 1 }}
								style={{ color: "white" }}
							>
								<MenuIcon />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorEl)}
							onClose={handleCloseUserMenu}
						>
							<Link to={"/AddCar"} className="routeLink">
								<MenuItem onClick={handleCloseUserMenu}>
									<Typography textAlign="center">Add Car</Typography>
								</MenuItem>
							</Link>
							<Link to={"/UpdateCar"} className="routeLink">
								<MenuItem onClick={handleCloseUserMenu}>
									<Typography textAlign="center">Update Car</Typography>
								</MenuItem>
							</Link>
							<Link to={"/UpdateCars"} className="routeLink">
								<MenuItem onClick={handleCloseUserMenu}>
									<Typography textAlign="center">Update Cars</Typography>
								</MenuItem>
							</Link>
							<Link to={"/DeleteCar"} className="routeLink">
								<MenuItem onClick={handleCloseUserMenu}>
									<Typography textAlign="center">Delete Car</Typography>
								</MenuItem>
							</Link>
						</Menu>
					</Box>
					<Typography
						className="headerName"
						variant="h6"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						Car Control
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default RouteMenu;

/* references:

https://mui.com/components/app-bar/

https://www.positronx.io/react-mern-stack-crud-app-tutorial/

my own work from level 2 task 21 

*/
