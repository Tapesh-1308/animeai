import { Carousel } from "../components";
import { recommended } from "../constants";

const Home = () => {
	return (
		<div className="mx-4 md:ml-36 md:mr-8">
			<section>
				<h1 className="text-lg text-primary">Recommended</h1>
				<Carousel data={recommended} />
			</section>
		</div>
	);
};

export default Home;
