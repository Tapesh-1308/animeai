import { Link } from "react-router-dom";
import { IMG_CDN_URL, chats } from "../constants";

const AllChats = () => {
	return (
		<div className="mx-4 md:ml-36 md:mr-8">
			<section>
				<h1 className="text-lg text-primary">Continue Chatting</h1>
				<ul>
					{chats &&
						chats.map((obj) => (
							<Link
								to={obj.external_id}
								className="m-2 p-2 flex justify-between items-cener gap-3 max-w-[400px] rounded-md hover:bg-secondary/80 transition-all"
							>
								<img
									src={IMG_CDN_URL + obj.avatar_file_name}
									alt={obj.external_id}
									className="rounded-full max-w-12 object-cover h-12"
								/>
								<div className="flex items-center w-full">
									<h1 className="font-semibold text-lg text-primary">
										{obj.participant__name}
									</h1>
								</div>
							</Link>
						))}
				</ul>
			</section>
		</div>
	);
};

export default AllChats;
