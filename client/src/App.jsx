import "./App.scss";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
	// const user = useSelector((state) => state.user.currentUser);
	const user = true;
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" index element={<Home />} />
					<Route path="/products/:category" element={<ProductList />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
					<Route
						path="/login"
						element={user ? <Navigate to="/" /> : <Login />}
					/>
					<Route
						path="/register"
						element={user ? <Navigate to="/" /> : <Register />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
// user ? <Link to="/" /> :
