import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import "./product.scss";

const Product = ({ item }) => {
	return (
		<div className="productSingle">
			<div className="circle"></div>
			<img src={item.image} alt="item" className="image" />
			<div className="info">
				<div className="icon">
					<ShoppingCartOutlined />
				</div>
				<div className="icon">
					<SearchOutlined />
				</div>
				<div className="icon">
					<FavoriteBorderOutlined />
				</div>
			</div>
		</div>
	);
};

export default Product;
