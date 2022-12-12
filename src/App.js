import Main from "./components/Main";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
