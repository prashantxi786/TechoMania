import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import AdminPanel from "./Components/Admin/AdNavbar";
import AdProducts_Loading from "./Components/Admin/AdComponents/AdProducts_Loading";
import Cart from "./Pages/Cart";

function App() {
  const activeUser = JSON.parse(localStorage.getItem("user"));
  console.log("activeUser:", activeUser);

  return (
    <div className="App">
      {/* {activeUser.isAdmin ? <AdminPanel /> : <AllRoutes />} */}
      {activeUser.isAdmin ?  <AllRoutes /> :  <AdminPanel />}
    </div>
  );
}

export default App;
