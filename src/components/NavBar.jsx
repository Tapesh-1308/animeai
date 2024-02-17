import { IoSearch } from "react-icons/io5";
import { MdOutlineMenuBook, MdOutlineHelpOutline } from "react-icons/md";

const navLinks = [
	{ name: "search", icon: <IoSearch />, href: "" },
	{ name: "book", icon: <MdOutlineMenuBook />, href: "" },
	{ name: "help", icon: <MdOutlineHelpOutline />, href: "" },
];

const NavBar = () => {
	return (
		<>
			<header className="flex justify-center items-center border-b-[1px] border-gray-700/80">
				<div className="my-2 mx-4 flex w-full justify-between items-center">
					<div className="">
						<h1 className="text-white text-3xl font-bold">Anime.ai</h1>
					</div>
					<nav className="hidden md:flex items-center">
						<ul className="flex justify-center items-center">
							{navLinks &&
								navLinks.map((item) => (
									<li className="m-4" key={item.name}>
										<a href={item.href} className="text-2xl text-secondary">
											{item.icon}
										</a>
									</li>
								))}
							<form className="">
								<select
									id="countries"
									className="bg-transparent text-darker text-sm"
									defaultValue={"English"}
								>
									<option>English</option>
								</select>
							</form>
						</ul>

						<div>
							<button
								type="button"
								className="px-3 py-1.5 text-[14px] rounded-[4px] bg-secondary text-white hover:bg-secondary/60 border-0 m-2"
							>
								Log In
							</button>
							<button
								type="button"
								className="px-1.5 py-1.5 text-[14px] rounded-[4px] bg-blue-600 text-white hover:bg-blue-600/60 border-0 m-2"
							>
								Sign Up
							</button>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default NavBar;
