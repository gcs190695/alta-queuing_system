import { createFirebaseData } from './state/firebase/actions/generalFirebaseActions'; 
import { ReadAllFirebaseData } from './utils/ReadAllFirebaseData';
import { Routes, Route } from 'react-router-dom'
import { Dashboard, Device, Service, Progression, Report, Role, Account, ActivityHistory, Login, ForgotPassword, Profile, NotFound } from './components';
import { Link } from 'react-router-dom'
import './App.css';

function App() {

  // This Function Call Only Once After Component Mount
  ReadAllFirebaseData()

  return (
    <div className="App">
      {/* Generate Dummy Data Button - To Using This button, you need to change display to inline-block or remove style */}
        <button type='button' onClick={createFirebaseData} style={{ display: 'none' }}>Create Data</button>
      {/* --------------------------------------------------------------------------------- */}

      <Link to='/'>Dashboard</Link>
      <Link to='/device' style={{ marginInline: '1rem' }}>Device</Link>
      <Link to='/service'>Service</Link>
      <Link to='/progression' style={{ marginInline: '1rem' }}>Progression</Link>
      <Link to='/report'>Report</Link>
      <Link to='/role' style={{ marginInline: '1rem' }}>System → Role</Link>
      <Link to='/account'>System → Account</Link>
      <Link to='/log' style={{ marginInlineStart: '1rem' }}>System → Log</Link>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/device' element={<Device />} />
        <Route path='/service' element={<Service />} />
        <Route path='/progression' element={<Progression />} />
        <Route path='/report' element={<Report />} />
        <Route path='/role' element={<Role />} />
        <Route path='/account' element={<Account />} />
        <Route path='/log' element={<ActivityHistory />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
