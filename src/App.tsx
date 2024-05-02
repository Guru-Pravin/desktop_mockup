import 'bootstrap/dist/css/bootstrap.min.css';
import Approvaldetail from './components/Approvaldetails.tsx';
import Memos from "./components/Memos.tsx";
import Navbar from './components/Navbar.tsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Memos />
      <Approvaldetail />
    </>
  )
}


