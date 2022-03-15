import { Send } from "@mui/icons-material";
import "./newsletter.scss";
const Newsletter = () => {
	return (
		<div className="newsletter">
			<h1 className="title">Newsletter</h1>
			<div className="desc">Get timely updates from your favorite products</div>
			<div className="inputContainer">
                <input type="text" placeholder="Your Email" />
				<button>
					<Send />
				</button>
			</div>
		</div>
	);
};

export default Newsletter;
