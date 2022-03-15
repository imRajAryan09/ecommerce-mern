import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Announcment from "../../components/announcement/Announcment";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

const Home = () => {
	return (
		<div className="home">
			<Announcment />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
