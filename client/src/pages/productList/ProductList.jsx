import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcment";
import "./productList.scss";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";
import { useLocation } from "react-router";
import { useState } from "react";
const ProductList = () => {
	const location = useLocation();
	const cat = location.pathname.split("/")[2];
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState("newest");
	const handleFilters = (e) => {
		const value = e.target.value;
		setFilters({
			...filters,
			[e.target.name]: value,
		});
	};
	return (
		<div className="productList">
			<Announcement />
			<Navbar />
			<h1 className="title">Dresses</h1>
			<div className="filterContainer">
				<div className="filter">
					<span className="filterText">Filter Products:</span>
					<select name="color" onChange={handleFilters}>
						<option disabled>Color</option>
						<option>White</option>
						<option>Black</option>
						<option>Red</option>
						<option>Blue</option>
						<option>Yellow</option>
						<option>Green</option>
					</select>
					<select name="size" onChange={handleFilters}>
						<option disabled>Size</option>
						<option>XS</option>
						<option>S</option>
						<option>M</option>
						<option>L</option>
						<option>XL</option>
					</select>
				</div>
				<div className="filter">
					<span className="filterText">Sort Products:</span>
					<select onChange={(e) => setSort(e.target.value)}>
						<option value="newest">Newest</option>
						<option value="asc">Price (Asc)</option>
						<option value="desc">Price (Desc)</option>
					</select>
				</div>
			</div>
			<Products cat={cat} filters={filters} sort={sort} />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default ProductList;
