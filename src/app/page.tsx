"use client";
import AboutMe from "@/components/aboutMe/aboutMe";
import HeroNav from "@/components/hero/hero";
import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Hobbies from "@/components/hobbies/hobbies";
import Experience from "@/components/experience/experience";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import Knowlegde from "@/components/knowledge/knowledge";
import Services from "@/components/services/services";
import { motion } from "framer-motion";

// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
// const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  

  useEffect(() => {
    AOS.init();
  }, []);

  

  return (
    <main>
      {/* <div>
          <HeroNav></HeroNav>
          <AboutMe></AboutMe>
          <Hobbies></Hobbies>
          <Experience></Experience>
          <Skills></Skills>
          <Projects></Projects>
          <Knowlegde></Knowlegde>
          <Services></Services>
        </div> */}
      <section>
        <motion.div
          initial={false}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <HeroNav></HeroNav>
        </motion.div>
      </section>
      <section>
        <motion.div
          initial={false}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <AboutMe></AboutMe>
        </motion.div>
      </section>
      <section>
        <motion.div
          initial={false}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <Hobbies></Hobbies>
        </motion.div>
      </section>
      <section>
        <motion.div
          initial={false}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <Experience></Experience>
        </motion.div>
      </section>





      <section>
        <motion.div
          initial={false}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <Skills></Skills>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={false}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <Projects></Projects>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={false}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <Knowlegde></Knowlegde>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={false}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <Services></Services>
        </motion.div>
      </section>
    </main>
  );
}
