import React, { PureComponent, useState } from "react";
import { images } from "../src/CarouselData";
import "./Carousel.css";
import CarouselList from "./CarouselList";

const DIRECTIOM_TYPE = {
	next: "NEXT",
	prev: "PREV",
};

class Carousel extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			images: images,
			current: 2,
			needTransition: true,
			direction: "",
		};
	}

	handleSliderTranslateEnd = () => {
		const { direction } = this.state;
		switch (direction) {
			case DIRECTIOM_TYPE.next:
				this.vaildNextSlider();
				break;
			case DIRECTIOM_TYPE.prev:
				this.vaildPrevSlider();
				break;
			default:
				break;
		}
	};

	vaildNextSlider = () => {
		const { current, images } = this.state;
		let _current = current;
		if (_current > images.length - 3) {
			_current -= 1;
			const _nums = [...images, ...images.slice(0, 1)].slice(-9);
			this.setState({
				needTransition: false,
				current: _current,
				images: _nums,
			});
		}
	};

	vaildPrevSlider = () => {
		const { current, images } = this.state;
		let _current = current;
		if (_current < 1) {
			_current += 1;
			const _nums = [...images.slice(-1), ...images].slice(0, 9);
			this.setState({
				needTransition: false,
				current: _current,
				images: _nums,
			});
		}
	};

	handleNext = () => {
		const { current, images } = this.state;
		let _current = current + 1;
		if (_current > images.length - 1) return;
		this.setState({
			needTransition: true,
			current: _current,
			direction: DIRECTIOM_TYPE.next,
		});
	};

	handlePrev = () => {
		const { current } = this.state;
		let _current = current - 1;
		if (_current < 0) return;
		this.setState({
			needTransition: true,
			current: _current,
			direction: DIRECTIOM_TYPE.prev,
		});
		console.log(current);
	};

	transLateVal = () => {
		return -(this.state.current * 11.1111);
	};

	sliderStyle = () => {
		if (this.state.needTransition) {
			return {
				transform: `translateX(${this.transLateVal()}%)`,
				transition: "transform 0.3s ease-in-out",
			};
		}

		return {
			transform: `translateX(${this.transLateVal()}%)`,
		};
	};

	render() {
		return (
			<>
				<div className="CarouselBox">
					<div className="BannerBox">
						<div className="Banner">
							<div
								className="CarouselInner"
								style={this.sliderStyle()}
								onTransitionEnd={this.handleSliderTranslateEnd}
							>
								{this.state.images.map((pos, i) => (
									<CarouselList key={i} pos={pos} />
								))}
							</div>
						</div>
						<div>
							<button
								onClick={this.handlePrev}
								className="arrowLeftBtn"
								onClick={() => {
									this.handlePrev();
								}}
							>
								<span>
									<svg viewBox="0 0 18 18">
										<path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
									</svg>
								</span>
							</button>
							<button
								onClick={this.handleNext}
								className="arrowRightBtn"
								onClick={() => {
									this.handleNext();
								}}
							>
								<span>
									<svg viewBox="0 0 18 18">
										<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Carousel;
