import DashboardHeader from '../components/DasboardHeader.jsx';
import ChangeLink from '../components/ChangeLink.jsx';
import SharePage from '../components/SharePage.jsx';
import AddLink from '../components/AddLink.jsx';
import YourLinks from '../components/YourLinks.jsx';
import './Dasboard.css'




export default function DashboardPage() {

  return (
    <div className="app-container">
      <DashboardHeader />
      <ChangeLink />
      <SharePage />
      <AddLink />
      <YourLinks />
    </div>
  );
}
