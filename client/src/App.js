import "./App.css";
// import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved/index.js";
import Search from "./pages/Search/index.js";
import Navbar from "./components/NavBar/index.js";
import Footer from "./components/Footer/index.js";
import Wrapper from "./components/Wrapper/index.js";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
//  const [state, setState] = useState({})

  document.title = "Google Book Search";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
