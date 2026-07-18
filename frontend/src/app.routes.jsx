import { createBrowserRouter } from "react-router";

import LandingPage from "./features/auth/pages/Landing.jsx";
import DasboardPage from "./features/dasboard/pages/DasboardPage.jsx";
import Protected from "./Protected.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/dashboard",
        element: (
            <Protected>
                <DasboardPage />
            </Protected>
        )
    }
]);

export { router };
