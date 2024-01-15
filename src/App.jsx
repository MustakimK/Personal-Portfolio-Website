import React from 'react';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Project from './pages/projects.jsx';
import Skills from './pages/skills.jsx';
import Contact from './pages/contact.jsx';
import Footer from './components/footer.jsx';
import './index.css'; // Assuming your CSS is here


const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function App() {
  const [showScrollTopButton, setShowScrollTopButton] = React.useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const checkScrollTop = debounce(() => {
      const shouldShow = window.scrollY > 400;
      setShowScrollTopButton(shouldShow);
    }, 100);

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="container">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Project /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </div>
      <button 
        onClick={scrollTop} 
        className={`scroll-top-btn ${showScrollTopButton ? 'show' : ''}`}
        aria-label="Scroll to top"
        role="button"
        tabIndex="0"
      >
      </button>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
