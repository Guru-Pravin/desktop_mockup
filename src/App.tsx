import 'bootstrap/dist/css/bootstrap.min.css';
import Approvaldetail from './components/Approvaldetails.tsx';
import Memos from "./components/Memos.tsx";
import Navbar from './components/Navbar.tsx';
import TabButtons from './components/TabButtons.tsx';
import FilterComponent from './components/FilterComponent.tsx';

export default function App() {
  return (
    <>
      <Navbar />
      <TabButtons numberOfApprovals={89} />
      <FilterComponent />
      <Memos />
      <Approvaldetail />
    </>
  )
}


