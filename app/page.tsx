"use client";
import React, { useRef } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs = {
    home: homeRef,
    skills: skillsRef,
    aboutMe: aboutMeRef,
    project: projectRef,
    contact: contactRef,
  };

  return (
    <main>
      <Navbar refs={refs} />
      <Home ref={homeRef} />
      <Skills ref={skillsRef} />
      <AboutMe ref={aboutMeRef} />
      <Projects ref={projectRef} />
      <Contact ref={contactRef} />
      <Footer />
    </main>
  );
}
