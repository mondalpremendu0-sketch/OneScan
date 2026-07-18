import {Show,UserButton} from "@clerk/react"
import "../styles/DasboardHeader.css";



const DashboardHeader = () => {
  
  
    return (
        <div className="card dashboard-header">
            <div className="dashboard-text">
                <h2>Your Dashboard</h2>
                <p>Manage your link-in-bio page</p>
            </div>
            <div className="avatar">
                <Show when="signed-in">
                    <UserButton fallbackRedirectUrl="/landingPage"/>
                </Show>
            </div>
        </div>
    );
};

export default DashboardHeader;
