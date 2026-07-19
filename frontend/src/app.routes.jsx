import { createBrowserRouter } from "react-router";

import LandingPage from "./features/auth/pages/Landing.jsx";
import DasboardPage from "./features/dasboard/pages/DasboardPage.jsx";
import PublicPage from "./features/dasboard/pages/PublicPage.jsx";
import Protected from "./Protected.jsx";
import { PublicProfileProvider } from "./features/dasboard/publicProfile.context.jsx";

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
    },
    {
        path: "/u/:username",
        element: (
            <PublicProfileProvider>
                <PublicPage />
            </PublicProfileProvider>
        )
    }
]);

export { router };
