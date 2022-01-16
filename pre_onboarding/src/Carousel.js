import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../src/CarouselData";

const Carousel = () => {
	const [currImg, setCurrImg] = useState(0);

	return (
		<div className="CarouselBox">
			<div className="CarouselInner">
				<div
					className="Carousel"
					style={{ backgroundImage: `url(${images[currImg].img})` }}
				>
					<div className="descBox">
						<div>해, 커리어 EP 02 공개</div>
						<div>마지막 관문 2라운드의 승자는?</div>
						<hr></hr>
						<div>
							<span>바로가기</span>
							<span>
								<svg viewBox="0 0 18 18">
									<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
								</svg>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
