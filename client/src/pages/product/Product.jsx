import "./product.scss";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcment";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
const FilterColor = styled.div`
	background-color: ${(props) => props.color};
`;
const Product = () => {
	return (
		<div className="product">
			<Announcement />
			<Navbar />
			<div className="wrapper">
				<div className="imgContainer">
					<img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="product" />
				</div>
				<div className="infoContainer">
					<h1 className="title">Denim Jumpsuit</h1>
					<p className="desc">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
						iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
						tristique tortor pretium ut. Curabitur elit justo, consequat id
						condimentum ac, volutpat ornare.
					</p>
					<div className="filterContainer">
						<span className="price">$ 20</span>
						<div className="filter">
							<h1 className="filterTitle">Colors </h1>
							<FilterColor color="black" className="filterColor" />
							<FilterColor color="darkblue" className="filterColor" />
							<FilterColor color="gray" className="filterColor" />
						</div>
						<div className="filter">
							<h1 className="filterTitle">Size</h1>
							<select className="filterSize">
								<option>XS</option>
								<option>S</option>
								<option>M</option>
								<option>L</option>
								<option>XL</option>
							</select>
						</div>
						<div className="amountContainer">
							<Remove className="icon" />
							<span className="amount">1</span>
							<Add className="icon" />
						</div>
					</div>
					<div className="addContainer">
						<button>ADD TO CART</button>
					</div>
				</div>
			</div>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Product;
