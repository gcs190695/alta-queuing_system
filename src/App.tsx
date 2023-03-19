import { createFirebaseData } from './state/firebase/actions/generalFirebaseActions'; 
import { ReadAllFirebaseData } from './utils/ReadAllFirebaseData';
import { MainLayout } from './components';
import { useLocation } from 'react-router-dom';
import { UpdatePath } from './utils/RUDPath';
import './App.css';

function App() {

  // This Function Call Only Once After Component Mount
  ReadAllFirebaseData()

  // Update Path
  const location = useLocation()
  const pathSnippets = window.location.pathname === '/' ? ['/'] : location.pathname.split('/').filter((i) => i);
  UpdatePath(pathSnippets)

  return (
    <div className="App">
      {/* Generate Dummy Data Button - To Using This button, you need to change display to inline-block or remove style */}
        <button type='button' onClick={createFirebaseData} style={{ display: 'none' }}>Create Data</button>
      {/* --------------------------------------------------------------------------------- */}
      <MainLayout />
    </div>
  );
}

export default App;
