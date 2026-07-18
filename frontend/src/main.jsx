import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/react";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";


const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
    <ClerkProvider publishableKey={publishableKey}>
        
            <App />
        
    </ClerkProvider>
);
