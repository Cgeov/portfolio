"use client";
import CountUp from "react-countup";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";

export default function HeroNav() {
  return (
    <section className="heroSection relative pb-16 panel dark">
      <div
        className="absolute -top-28 -right-0 w-322 h-308 bg-gradient-to-br from-purple-700 to-transparent rounded-full filter blur-[100px] w-[322px] h-[308px]"
        style={{ zIndex: -1000 }}
      ></div>
      <div className="grid grid-cols-[2fr_1fr] items-center pt-6  pb-2 px-10">
        <div>
          <h1 className="text-3xl font-bold">
            <TypeAnimation
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-row gap-6 mt-6 items-center [&>div]:border-purple-700 [&>div]:border-[1px] [&>div]:rounded-3xl [&>div]:transition [&>div]:duration-300 ">
            <div className="px-6 py-3 hover:bg-purple-700 hover:cursor-pointer">
              Descargar CV
            </div>
            <div className="p-3 hover:bg-purple-700 hover:cursor-pointer">
              <FaLinkedinIn size={20}></FaLinkedinIn>
            </div>
            <div className="p-3 hover:bg-purple-700 hover:cursor-pointer">
              <PiGithubLogoFill size={20}></PiGithubLogoFill>
            </div>
          </div>
        </div>
        <img
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:rotate-6 duration-300"
          src="/profile.png"
        ></img>
      </div>
      <div className="flex flex-row flex-wrap gap-16 items-center justify-start px-10">
        <div className="flex items-center gap-3">
          <CountUp className="text-6xl font-bold" delay={0.5} duration={4} start={0} end={2}></CountUp>
          <span className="text-sm"> Años de  <br/> Experiencia</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-6xl font-bold"><CountUp delay={0.5} duration={8} start={0} end={10}></CountUp>+</div>
          <span className="text-sm"> Proyectos <br/>Completados</span>
        </div>
      </div>
    </section>
  );
}
