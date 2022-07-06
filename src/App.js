import About from "./components/About";
import Skill from "./components/Skill";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import { useEffect } from "react";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";

function App() {
  useEffect(() => {
    document.title = "M. Fandi Arfabuma";
  });

  return (
    <div>
      <Header />
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Experience/>
        <Project/>
        <Contact/>
        <Social/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
