"use client"
import AboutMe from "@/components/aboutMe/aboutMe";
import HeroNav from "@/components/hero/hero";
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Hobbies from "@/components/hobbies/hobbies";
import Experience from "@/components/experience/experience";
import Skills from "@/components/skills/skills";

export default function Home() {
  useEffect(()=>{
    AOS.init();
  },)

  return (
    <main>
      <HeroNav></HeroNav>
      <AboutMe></AboutMe>
      <Hobbies></Hobbies>
      <Experience></Experience>
      <Skills></Skills>
    </main>
  );
}
