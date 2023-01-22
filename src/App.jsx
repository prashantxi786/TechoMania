import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Homepage from './Pages/Homepage';
import AdminPanel from './Components/Admin/AdNavbar';
import AdProducts_Loading from './Components/Admin/AdComponents/AdProducts_Loading';

function App() {
  return (
    <div className='App'>
      {/* <AllRoutes /> */}
      <AdminPanel />
      {/* <AdProducts_Loading/> */}

    </div>
  );
}

export default App;
