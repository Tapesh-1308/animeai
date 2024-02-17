import { useRef } from "react";
import Card from "./Card";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Carousel = ({ data }) => {
	const carouselContainer = useRef();

	const navigation = (dir) => {
		const container = carouselContainer.current;
		const scrollAmount =
			dir === "left"
				? container.scrollLeft - (container.offsetWidth + 20)
				: container.scrollLeft + (container.offsetWidth + 20);

		container.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<div>
			<BsFillArrowLeftCircleFill
				className="text-[30px] cursor-pointer hidden bg-white rounded-full text-dark absolute z-10 top-[44%] -translate-y-1/2 md:block left-[130px]"
				onClick={() => navigation("left")}
			/>
			<BsFillArrowRightCircleFill
				className="text-[30px] cursor-pointer hidden bg-white rounded-full  text-dark absolute z-10 top-[44%] -translate-y-1/2 md:block right-[20px]"
				onClick={() => navigation("right")}
			/>
			<div
				className="flex overflow-auto md:overflow-hidden max-w-screen"
				ref={carouselContainer}
			>
				{data && data.map((obj) => <Card data={obj} key={obj?.external_id} />)}
			</div>
		</div>
	);
};

export default Carousel;
