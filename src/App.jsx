import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResumeLayout from "./component/resume/ResumeLayout.jsx";
import HomeLayout from "./component/HomeLayout/HomeLayout.jsx";
import React from "react";
import Complete from "./component/Navbar/complete.jsx";

const router = createBrowserRouter([
    {
        element: <Complete />, // Component to render
        children: [
            { path: "/", element: <ResumeLayout /> },
            { path: "/tariqon", element: <HomeLayout /> },
        ]
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;