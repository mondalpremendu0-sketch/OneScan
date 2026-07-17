import React from "react";
import "../styles/DashboardHeader.css";

const DashboardHeader = () => {
    return (
        <div className="card dashboard-header">
            <div className="dashboard-text">
                <h2>Your Dashboard</h2>
                <p>Manage your link-in-bio page</p>
            </div>
            <div className="avatar">N</div>
        </div>
    );
};

export default DashboardHeader;
