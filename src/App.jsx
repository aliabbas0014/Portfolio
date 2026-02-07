import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';


// AOS Library for Scroll Animations
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

function App() {
  useEffect(() => {
    // Animation initialize karein
    AOS.init({
      duration: 1000, // 1 second animation length
      once: true,     // Animation sirf ek baar chale jab scroll karein
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="bg-[#0f172a] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section - Fade in effect */}
      <div data-aos="fade-zoom-in">
        <Hero />
      </div>

      {/* About Section - Slide Up */}
      <div data-aos="fade-up">
        <About />
      </div>

      {/* Experience Section - Slide from Left */}
      <div data-aos="fade-right">
        <Experience />
      </div>

      {/* Education Section - Slide from Right */}
      <div data-aos="fade-left">
        <Education />
      </div>

      {/* Projects Section - Staggered Slide Up */}
      <div data-aos="fade-up">
        <Projects />
      </div>

      {/* Contact & Footer Section - Simple Fade */}
      <div data-aos="fade-in">
        <Footer />
      </div>
    </div>
  );
}

export default App;