"use client";
import CountUp from "react-countup";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";

export default function HeroNav() {
  return (
    <section className="heroSection relative pb-4 md:pb-16 panel dark grid grid-cols-1 xl:mx-auto max-w-[1400px]">
      <div
        className="absolute -top-28 -right-0 w-322 h-308 bg-gradient-to-br from-purple-700 to-transparent rounded-full blur-[100px] w-[322px] h-[308px]"
        style={{ zIndex: -1000 }}
      ></div>
      <div className="grid grid-cols-[2fr_1fr] items-center pt-6  pb-2 px-10">
        <div>
          <h1 className="text-3xl font-bold">
            <TypeAnimation
            className="h-20 block"
              sequence={[
                "Hola!",
                2000,
                "Soy Christian Tobar",
                1500,
                "Un gusto tenerte aquí :)",
                1500,
              ]}
              speed={8}
              repeat={Infinity}
            ></TypeAnimation>
            <p>
              <span className="bgTitle text-6xl">Web Developer</span>
            </p>
          </h1>
          <p className="my-4">
            Descubre mi trabajo en programación y desarrollo web. Construyendo
            soluciones digitales desde la imaginación hasta la realidad..
          </p>
          <div className="flex flex-row gap-6 mt-6 touch- items-center [&>div]:border-purple-700 [&>div]:border-[1px] [&>div]:rounded-3xl [&>div]:transition [&>div]:duration-300 ">
           <div className="px-6 py-3 hover:bg-purple-700 hover:cursor-pointer">
              <a href="/cv.pdf" download>Descargar CV</a>
            </div>
            <div className="p-3 hover:bg-purple-700 hover:cursor-pointer">
             <a href="https://linkedin.com/in/cgeov"><FaLinkedinIn size={20}></FaLinkedinIn></a>
            </div>
            <div className="p-3 hover:bg-purple-700 hover:cursor-pointer">
              <a href="https://github.com/Cgeov"><PiGithubLogoFill size={20}></PiGithubLogoFill></a>
            </div>
          </div>
        </div>
        <img
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:rotate-6 duration-300 hidden md:block"
          src="/profile.png"
        ></img>
      </div>
      <div className="mt-2 sm:w-fit grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5 items-center justify-start px-10">
        <div className="flex items-center gap-3">
          <CountUp
            className="text-6xl font-bold"
            delay={0.5}
            duration={4}
            start={0}
            end={2}
          ></CountUp>
          <span className="text-sm">
            {" "}
            Años de <br /> Experiencia
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-6xl font-bold">
            <CountUp delay={0.5} duration={8} start={0} end={10}></CountUp>+
          </div>
          <span className="text-sm">
            {" "}
            Proyectos <br />
            Completados
          </span>
        </div>
      </div>
    </section>
  );
}
