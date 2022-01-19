import React from "react";

const CarouselList = ({ pos, active }) => {
	return (
		<>
			<div className="CarouselInner">
				<div className={active ? "Carousel" : "Carousel_Inactive"}>
					<img src={pos.banner.img} />
					<div className={active ? "descBox" : "descBox_Inactive"}>
						<div>{pos.banner.title}</div>
						<div>{pos.banner.subTitle}</div>
						<hr></hr>
						<a>
							<span>바로가기</span>
							<span>
								<svg viewBox="0 0 18 18">
									<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
								</svg>
							</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarouselList;
