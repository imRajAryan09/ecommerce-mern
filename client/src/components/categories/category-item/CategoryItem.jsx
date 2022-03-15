import './categoryItem.scss';
import { Link } from "react-router-dom";
const CategoryItem = ({item}) => {
	return (
		<div className="categoryItem">
			<Link to={`/products/${item.cat}`}>
				<img src={item.img} alt="item" className="image" />
				<div className="info">
					<h1 className="title">{item.title}</h1>
					<button>SHOP NOW</button>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
