import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  console.log(process.env.REACT_APP_BACKEND_KEY);
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
