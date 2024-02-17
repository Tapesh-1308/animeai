import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Feed, Home } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "feed", element: <Feed /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
