import {
	ArrowDropDown,
	Search,
	ShoppingCartOutlined,
} from "@mui/icons-material";
import "./navbar.scss";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navWrapper">
				<div className="left">
					<span className="language">
						EN
						<ArrowDropDown />
					</span>
					<div className="searchContainer">
						<input type="text" placeholder="Search" />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</div>
				</div>
				<div className="center">
					<Link to="/" style={{ textDecoration: "none" }}>
						<h1 className="logo">SHOPPING</h1>
					</Link>
				</div>
				<div className="right">
					<div className="menuItem">Register</div>
					<div className="menuItem">Sign In</div>
					<Link to="/cart">
						<div className="menuItem">
							<Badge badgeContent={4} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
