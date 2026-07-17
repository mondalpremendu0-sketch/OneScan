
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/react";

createRoot(document.getElementById("root")).render(
    <ClerkProvider>
        <App />
    </ClerkProvider>
);
