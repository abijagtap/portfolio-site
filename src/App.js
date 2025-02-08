import './App.css';
import ScrollToTop from "./scrollToTop";
import Header from './components/Header';
import Footer from './components/Footer'
import Banner from './components/Banner';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import HomeAbout from "./components/HomeAbout";
import HomePortfolio from './components/HomePortfolio';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header
          homeText="Home"
          aboutText="About"
          portfolioText="Portfolio"
          contactText="Contact"
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Banner exploreBtnText="Explore My Work" />
                <HomeAbout aboutTitle="About" readMoreText="Read More" />
                <HomePortfolio
                  portfolioTitle="Portfolio"
                  readMoreText="Read More"
                  visitBtnText="Visit Site"
                />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <About aboutTitle="About" downloadBtnText="Download CV" />
              </>
            }
          />
          <Route
            exact
            path="/portfolio"
            element={
              <>
                <Portfolio
                  portfolioTitle="Portfolio"
                  visitBtnText="Visit Site"
                />
              </>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <>
                <Contact contactTitle="Contact" downloadBtnText="Download CV" />
              </>
            }
          />
        </Routes>
        {/* <Banner /> */}
        <Footer
          homeText="Home"
          aboutText="About"
          portfolioText="Portfolio"
          contactText="Contact"
        />
      </Router>
    </div>
  );
}

export default App;
