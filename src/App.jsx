import "./App.css";
import AdminPanel from "./Components/Admin/AdNavbar";
import AllRoutes from "./Routes/AllRoutes";
let activeUser = JSON.parse(localStorage.getItem("user")) || {};

function App() {
  let checkLength = Object.keys(activeUser).length
  console.log('checkLength:', checkLength)

  return (
    <div className="App">
      {checkLength !== 0 && activeUser.isAdmin === true ? (
        <AdminPanel />
        ) : (
          <AllRoutes />
      )} 
       {/* <AdminPanel/> */}
      {/* <AllRoutes /> */}

    </div>
  );
}

export default App;
