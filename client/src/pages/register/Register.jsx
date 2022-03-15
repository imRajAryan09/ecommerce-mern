import "./register.scss";

const Register = () => {
	return (
		<div className="registerContainer">
			<div className="registerWrapper">
				<h1 className="title">CREATE AN ACCOUNT</h1>
				<form>
					<input placeholder="First Name" type="text" />
					<input placeholder="Last Name" type="text" />
					<input placeholder="Username" type="text" />
					<input placeholder="Email" type="text" />
					<input placeholder="Password" type="password" />
					<input placeholder="Confirm Password" type="password" />
					<span className="agreement">
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</span>
					<button>CREATE ACCOUNT</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
