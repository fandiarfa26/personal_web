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
import { RecoilRoot } from "recoil";

function App() {
  useEffect(() => {
    document.title = "M. Fandi Arfabuma";
  });

  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
}

export default App;
