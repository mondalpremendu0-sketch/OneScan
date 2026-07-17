
import DashboardHeader from '../components/DasboardHeader.jsx';
import ChangeLink from '../components/ChangeLink.jsx.jsx';
import SharePage from '../components/SharePage.jsx.jsx';
import AddLink from '../components/AddLink.jsx';


export default function App() {
  return (
    <div className="app-container">
      <DashboardHeader />
      <ChangeLink />
      <SharePage />
      <AddLink />
    </div>
  );
}
