import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { mobile } from "../../responsive";
import "./slider.scss";

const Container = styled.div`
	${mobile({ display: "none" })}
`;

const Arrow = styled.div`
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	background-color: #${(props) => props.bg};
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container className="container">
			<Arrow
				direction="left"
				onClick={() => handleClick("left")}
				className="arrow"
			>
				<ArrowBackIos />
			</Arrow>
			<Wrapper slideIndex={slideIndex} className="wrapper">
				{sliderItems.map((item) => (
					<Slide bg={item.bg} key={item.id} className='slide'>
						<div className="imageContainer">
							<img src={item.img} alt="modles" className="image" />
						</div>
						<div className="infoContainer">
							<h1 className="title">{item.title}</h1>
							<p className="desc">{item.desc}</p>
							<button>SHOW NOW</button>
						</div>
					</Slide>
				))}
			</Wrapper>
			<Arrow
				direction="right"
				onClick={() => handleClick("right")}
				className="arrow"
			>
				<ArrowForwardIos />
			</Arrow>
		</Container>
	);
};

export default Slider;
