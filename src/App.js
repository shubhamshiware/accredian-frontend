import "./App.css";
import Home from "./home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import ReferAndEarn from "./refer/refer";
import Login from "./login/login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/ReferAndEarn"} element={<ReferAndEarn />} />
        <Route path={"/Login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
