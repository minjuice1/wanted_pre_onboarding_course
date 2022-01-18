import React from "react";
import BannerInfo from "./BannerInfo";

const CarouselList = ({ currImg, setCurrImg, images }) => {
	return (
		<>
			{/* <div className="CarouselLeft"></div> */}
			<div
				className="Carousel"
				style={{ backgroundImage: `url(${images[currImg].img})` }}
			>
				<BannerInfo images={images} currImg={currImg} setCurrImg={setCurrImg} />
				<button
					className="arrowLeftBtn"
					onClick={() => {
						currImg > 0 && setCurrImg(currImg - 1);
					}}
				>
					<span>
						<svg viewBox="0 0 18 18">
							<path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
						</svg>
					</span>
				</button>
				<button
					className="arrowRightBtn"
					onClick={() => {
						currImg < images.length - 1 && setCurrImg(currImg + 1);
					}}
				>
					<span>
						<svg viewBox="0 0 18 18">
							<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
						</svg>
					</span>
				</button>
			</div>
			{/* <div className="CarouselRight"></div> */}
		</>
	);
};

export default CarouselList;