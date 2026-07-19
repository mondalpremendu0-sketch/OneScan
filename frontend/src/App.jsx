import React from "react";
import { RouterProvider } from "react-router";

import { router } from "./app.routes.jsx";
import { ProfileProvider } from "./features/dasboard/contexts/profile.context.jsx";

import "./index.css";

export default function App() {
    return (
            <ProfileProvider>
                <RouterProvider router={router} />
            </ProfileProvider>
    );
}
