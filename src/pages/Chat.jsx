import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";

const initial_data = {
	external_id: "TlvNBISvMi_6FAklaaz-JtWFnyR_D0g4jDILr3ql3D0",
	title: 'Lieutenant Simon "Ghost" Riley',
	greeting: "Greetings, callsign's Ghost... stay frosty.",
	description:
		'Lieutenant Simon "Ghost" Riley is a British special forces operator, and a prominent member of Task Force 141, known for his iconic skull-patterned balaclava, headset, and dark red sunglasses.',
	avatar_file_name:
		"uploaded/2022/11/21/odf8SEJmobi3vLkOwzB2wZaNz-JvqIyxxgOtf5eEVTI.webp",
	visibility: "PUBLIC",
	copyable: false,
	participant__name: "Ghost",
	user__username: "Fritz_",
	img_gen_enabled: false,
	default_voice_id: null,
	max_last_interaction: "2024-02-18T07:06:01.934Z",
};

const Chat = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [data, setData] = useState(initial_data);

	const [messageText, setMessageText] = useState("");

	useEffect(() => {
		// TODO
		// const characterData = getCharacterById(id);
		// setData(characterData);
	}, [id]);

	const handleAddMessage = (e) => {
		e.preventDefault();
		// TODO
		console.log(messageText);

		setMessageText("");
	};

	return (
		<div className="max-w-screen-md mx-auto py-4 flex flex-col ">
			<header className="p-2 pb-5 m-2 flex justify-between items-center border-b-[1px] border-white/10">
				<div className="flex gap-5 items-center justify-center ">
					<IoIosArrowBack
						className="text-3xl text-primary cursor-pointer"
						onClick={() => navigate(-1)}
					/>
					<div className="flex flex-col items-start justify-center text-primary ml-5">
						<h2 className="text-lg font-semibold">{data.participant__name}</h2>
						<p className="text-[13px] text-darker/80">
							created by @{data.user__username}
						</p>
					</div>
				</div>
			</header>
			<main className="h-[440px]"></main>
			<footer className="p-2 pt-5 m-2 flex justify-between items-center border-t-[1px] border-white/10">
				<form
					className="flex items-center justify-between p-2 px-4 bg-secondary/60 w-full rounded-lg shadow-sm gap-4"
					onSubmit={handleAddMessage}
				>
					<button className="text-darker text-lg " type="button">
						<RiAttachment2 />
					</button>
					<input
						type="text"
						placeholder=" Type a message"
						className="bg-transparent text-darker outline-none border-none w-full"
						value={messageText}
						onChange={(e) => setMessageText(e.target.value)}
					/>
					<button className="text-darker text-lg " type="submit">
						<IoSend />
					</button>
				</form>
			</footer>
		</div>
	);
};

export default Chat;
