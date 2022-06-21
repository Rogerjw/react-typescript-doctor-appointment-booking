import './styles.css';
import DoctorList from "./components/DoctorList"
import UserContextProvider from "./contexts/UserContextProvider"
import { Link } from 'react-router-dom';
function App() {
  return (
    <UserContextProvider >
      <div className="App w3-padding-large w3-large">
        <Link to="/AdminDashboard" className='w3-tag' style={{textDecoration:"none", position:"absolute", bottom:"0",right:"24px"}}><p>Admin</p></Link>
        <DoctorList />
      </div>
    </UserContextProvider>
  );
}

export default App;
