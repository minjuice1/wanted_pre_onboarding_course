import React from "react";
import "./Carousel.css";
import CarouselList from "./CarouselList";

const Carousel = () => {
	return (
		<div className="CarouselBox">
			<div className="BannerBox">
				<div className="Banner">
					<div className="CarouselInner">
						<CarouselList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
