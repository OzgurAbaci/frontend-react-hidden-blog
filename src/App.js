import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Routes} from "./pages/Routes";

import {NavBar} from "./Components/NavBar";
import {Blog} from "./pages/Blog";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Routes/>
            </div>
        </Router>
    );
}

export default App;
