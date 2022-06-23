import './styles.css';
import DoctorList from "./components/DoctorList"
import UserContextProvider from "./contexts/UserContextProvider"
import { Link } from 'react-router-dom';
function App() {
  return (
    <UserContextProvider >
      <div className="App" style={{padding:"0px 20px 0px 20px"}}>
       
        <DoctorList />
        <Link to="/AdminDashboard" className='w3-tag' style={{textDecoration:"none", position:"absolute", bottom:"0",right:"20px"}}><p>Admin</p></Link>
      </div>
    </UserContextProvider>
  );
}

export default App;
