import { categories } from "../../data";
import CategoryItem from "./category-item/CategoryItem";
import "./categories.scss";
const Categories = () => {
	return (
		<div className="categories">
			{/* <h1>Exclusive Brands With Newest Trends</h1> */}
			<div className="categoriesItems">
				{categories.map((item) => (
					<CategoryItem item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default Categories;
