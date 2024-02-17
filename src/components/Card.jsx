import { IMG_CDN_URL } from "../constants";

const Card = ({ data }) => {
	return (
		<div className="flex flex-col min-w-[200px] items-center justify-between bg-secondary/40 p-3 pb-1 mx-2 my-4 rounded-lg cursor-pointer hover:bg-secondary/70 transition-all">
			<img
				src={IMG_CDN_URL + data?.avatar_file_name}
				alt={data?.name}
				className="w-[108px] h-[108px] object-cover rounded-md"
			/>
			<h1 className="text-primary font-semibold mt-3">{data?.name}</h1>
			<p className="text-darker text-sm mt-3 text-center">
				{data?.greeting.slice(0, 70)}...
			</p>
			<div className="flex w-full mt-5 justify-between items-center text-darker/70">
				<em className="text-xs">@{data?.user__username}</em>
				<p>50m</p>
			</div>
		</div>
	);
};

export default Card;
