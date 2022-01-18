import React, { useState } from "react";
import { images } from "../src/CarouselData";
import "./Carousel.css";
import CarouselList from "./CarouselList";

const Carousel = () => {
	const [currImg, setCurrImg] = useState(5);
	return (
		<>
			<div className="CarouselBox">
				<div className="BannerBox">
					<div className="Banner">
						<div className="CarouselInner">
							<CarouselList
								images={images}
								currImg={currImg}
								setCurrImg={setCurrImg}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
