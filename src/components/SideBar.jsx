import { MdExplore, MdAddBox } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { IoChatbubbles } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const tabs = [
	{ label: "Home", icon: <GoHomeFill />, to: "/" },
	{ label: "Feed", icon: <MdExplore />, to: "/feed" },
	{ label: "Create", icon: <MdAddBox />, to: "/create" },
	{ label: "Chats", icon: <IoChatbubbles />, to: "/chats" },
	{ label: "Community", icon: <HiUserGroup />, to: "/community" },
];
const SideBar = () => {
	return (
		<>
			<div className="fixed hidden md:flex h-full">
				<ul className="flex flex-col items-center mt-5 ml-3">
					{tabs &&
						tabs.map((item, idx) => (
							<NavLink
								key={item.label}
								to={item.to}
								className={({ isActive }) =>
									`flex flex-col items-center w-full my-3 text-primary hover:bg-secondary py-2 rounded-md cursor-pointer transition-all ${
										isActive && "bg-blue-900 text-white hover:bg-blue-700"
									}`
								}
							>
								<i className="text-xl">{item.icon}</i>
								<p className="text-[12px] mt-1">{item.label}</p>
							</NavLink>
						))}
				</ul>
			</div>
			;
		</>
	);
};

export default SideBar;
