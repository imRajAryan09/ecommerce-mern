import Announcment from "../../components/announcement/Announcment";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./cart.scss";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const TopButton = styled.button`
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;
const ProductColor = styled.div`
	background-color: ${(props) => props.color};
`;
const SummaryItem = styled.div`
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;
const Cart = () => {
	return (
		<div className="cart">
			<Announcment />
			<Navbar />
			<div className="cartWrapper">
				<h1 className="title">YOUR BAG</h1>
				<div className="top">
					<TopButton className="topButton">CONTINUE SHOPPING</TopButton>
					<div className="topTexts">
						<span>Shopping Bag (2)</span>
						<span>Your Wishlist (0)</span>
					</div>
					<TopButton type="filled" className="topButton">
						CHECKOUT NOW
					</TopButton>
				</div>
				<div className="bottom">
					<div className="info">
						<div className="product">
							<div className="productDetail">
								<img
									src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
									alt="shoes"
								/>
								<div className="details">
									<span className="productName">
										<b>Product:</b> JESSIE THUNDER SHOES
									</span>
									<span className="productId">
										<b>ID:</b> 93813718293
									</span>
									<ProductColor color="black" className="productColor" />
									<span className="productSize">
										<b>Size:</b> 37.5
									</span>
								</div>
							</div>
							<div className="priceDetail">
								<div className="productAmountContainer">
									<Remove />
									<div className="productAmount">2</div>
									<Add />
								</div>
								<div className="productPrice">$ 30</div>
							</div>
						</div>
						<hr />
						<div className="product">
							<div className="productDetail">
								<img
									src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
									alt="shoes"
								/>
								<div className="details">
									<span className="productName">
										<b>Product:</b> HAKURA T-SHIRT
									</span>
									<span className="productId">
										<b>ID:</b> 93813718293
									</span>
									<ProductColor color="gray" className="productColor" />
									<span className="productSize">
										<b>Size:</b> M
									</span>
								</div>
							</div>
							<div className="priceDetail">
								<div className="productAmountContainer">
									<Remove />
									<div className="productAmount">1</div>
									<Add />
								</div>
								<div className="productPrice">$ 20</div>
							</div>
						</div>
					</div>
					<div className="summary">
						<h1 className="summaryTitle">ORDER SUMMARY</h1>
						<SummaryItem className="summaryItem">
							<span className="summaryItemText">Subtotal</span>
							<span className="summaryItemPrice">$ 80</span>
						</SummaryItem>
						<SummaryItem className="summaryItem">
							<span className="summaryItemText">Shipping Discount</span>
							<span className="summaryItemPrice">$ -5.90</span>
						</SummaryItem>
						<SummaryItem type="total" className="summaryItem">
							<span className="summaryItemText">Total</span>
							<span className="summaryItemPrice">$ 80</span>
						</SummaryItem>
						{/* <button>CHECKOUT NOW</button> */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
