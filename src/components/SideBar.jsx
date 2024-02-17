import { MdExplore, MdAddBox } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { IoChatbubbles } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";

const tabs = [
	{ label: "Home", icon: <GoHomeFill />, to: "" },
	{ label: "Feed", icon: <MdExplore />, to: "" },
	{ label: "Create", icon: <MdAddBox />, to: "" },
	{ label: "Chats", icon: <IoChatbubbles />, to: "" },
	{ label: "Community", icon: <HiUserGroup />, to: "" },
];
const SideBar = () => {
	return (
		<>
			<div className="fixed hidden md:flex h-full">
				<ul className="flex flex-col items-center mt-5 ml-3">
					{tabs &&
						tabs.map((item, idx) => (
							<li
								key={item.label}
								className={`flex flex-col items-center w-full my-3 text-primary hover:bg-secondary px-2 py-1 rounded-md cursor-pointer ${
									idx === 0 && "bg-secondary"
								}`}
							>
								<i className="text-xl">{item.icon}</i>
								<p className="text-[12px] mt-1">{item.label}</p>
							</li>
						))}
				</ul>
			</div>
			;
		</>
	);
};

export default SideBar;
