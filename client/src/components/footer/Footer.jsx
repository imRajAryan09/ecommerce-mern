import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import "./footer.scss";

const SocialIcon = styled.div`
	background-color: #${(props) => props.color};
`;
const Footer = () => {
	return (
		<div className="footer">
			<div className="left">
				<h1 className="logo">SHOPPING</h1>
				<p className="desc">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
				</p>
				<div className="socialContainer">
					<SocialIcon color="3B5999" className="socialIcon">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F" className="socialIcon">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE" className="socialIcon">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023" className="socialIcon">
						<Pinterest />
					</SocialIcon>
				</div>
			</div>
			<div className="center">
				<h3>Useful Links</h3>
				<ul>
					<li>Home</li>
					<li>Cart</li>
					<li>Man Fashion</li>
					<li>Woman Fashion</li>
					<li>Accessories</li>
					<li>My Account</li>
					<li>Order Tracking</li>
					<li>Wishlist</li>
					<li>Wishlist</li>
					<li>Terms</li>
				</ul>
			</div>
			<div className="right">
				<h3>Contact</h3>
				<div className="contactItem">
					<Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
					Tobinchester 98336
				</div>
				<div className="contactItem">
					<Phone style={{ marginRight: "10px" }} /> +1 234 56 78
				</div>
				<div className="contactItem">
					<MailOutline style={{ marginRight: "10px" }} /> contact@raj.dev
				</div>
				<img
					src="https://i.ibb.co/Qfvn4z6/payment.png"
					className="payment"
					alt="payment"
				/>
			</div>
		</div>
	);
};

export default Footer;
