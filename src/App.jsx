import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const App = () => {
	return (
		<>
			<div className="min-h-screen w-full bg-primary">
				<NavBar />
				<SideBar />
				<main>
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default App;
