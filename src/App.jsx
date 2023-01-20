import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Homepage from './Pages/Homepage';
import AdminPanel from './Components/Admin/AdNavbar';
function App() {
  return (
    <div className='App'>
      <AllRoutes />
      <AdminPanel />
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
