import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import BackToTopArrow from "./components/BackToTopArrow"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Resume from "./pages/Resume"
import About from "./pages/About"
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <NavBar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/About" element={<About />} />
              <Route path="/ProjectOne" element={<ProjectOne />} />
              <Route path="/ProjectTwo" element={<ProjectTwo />} />
              <Route path="/ProjectThree" element={<ProjectThree />} />
            </Routes>
          </main>
          <BackToTopArrow />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
