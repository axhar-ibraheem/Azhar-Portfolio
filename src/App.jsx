
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import PersonalInfo from "./components/PersonalInfo";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <PersonalInfo />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
