import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProject from "./components/FeaturedProject";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#F9F3EF] text-[#1B3C53] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Internships />
      <Projects />
      <Skills />
      <Certificates />
      <Learning />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
