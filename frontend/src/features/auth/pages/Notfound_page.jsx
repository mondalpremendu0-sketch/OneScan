import React from "react";
import { useNavigate } from "react-router";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Notfound_page.css";
export default function NotFound() {
    const navigate = useNavigate();

    return (
    <div className="not-found-container">
        <DotLottieReact
            src="https://lottie.host/43d096ee-b6e7-4ad4-b7d7-5d123849691e/3LYEuBqejs.json"
            loop
            autoplay
        />

        <button
            className="back-home-btn"
            onClick={() => navigate("/")}
        >
          Go Back
        </button>
    </div>
);
}
