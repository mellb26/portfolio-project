import { Auth } from "./components/Auth";
import { SignUpScreen } from "./components/SignUpScreen";
import { Home } from "./components/Home";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Cards } from './components/Cards'
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="container">
      <div className="app">
        <Footer />
        <Routes>
          <Route
            path="/Home"
            element={
              <>
                <Home /> <NavBar /> <Cards/>
              </>
            }
          />
          <Route path="/" element={<Auth />} />
          <Route path="/signUp" element={<SignUpScreen />} />
          <Route path="/Home/Auth" element={<Auth />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
