import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Punjabi from "./pages/Punjabi";
import Chinese from "./pages/Chinese";
import Italian from "./pages/Italian";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
    return (
        <Router>
            <div
                className="App bg-light d-flex flex-column justify-content-center p-2"
                style={{ height: "100vh" }}
            >
                {/* <span className="d-flex justify-content-center sticky-navbar">
                    <Navigation></Navigation>
                </span> */}
                <div>
                    <span className="d-flex justify-content-center sticky-navbar">
                        <Navigation></Navigation>
                    </span>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/italian" element={<Italian />}></Route>
                        <Route path="/chinese" element={<Chinese />}></Route>
                        <Route path="/punjabi" element={<Punjabi />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
