import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import { useEffect } from "react";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";
import { useRecoilValue } from "recoil";
import { isThemeDark } from "./utils/recoil";

function App() {
  const isDark = useRecoilValue(isThemeDark);
  useEffect(() => {
    document.title = "M. Fandi Arfabuma";
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark');
  }, [isDark])

  return (
    <>
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
    </>
  );
}

export default App;
