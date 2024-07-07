import angular from "languajes/angular.svg";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="py-10 mx-auto px-[5%] text-center xl:mx-auto max-w-[1400px]">
      <div className="relative">
      <h2
        className="bgTitle text-6xl font-bold text-center py-16"
        data-aos="fade-down">
        My Skills
      </h2>
      <h2
        className="titleSecond text-6xl font-bold text-center py-16"
        data-aos="fade-down">
        My Skills
      </h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:[&>div]:p [&>div]:text-[#8750f7] [&>div]:pb-8 [&>div>div]:mb-3 [&>div]:w-full [&>div]:items-center">
        <div className="flex flex-col group w-fit">
          <div className="bg-[#140c1c] rounded-md p-6 hover:bg-[#2a1454] hover:border-[1px] hover:rounded-md hover:border-[#8750f7] w-fit transition duration-500">
            <Image
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-1000"
              src={"/languajes/angular.svg"}
              width={100}
              height={100}
              alt="Angular"></Image>
          </div>
          <p>Angular</p>
        </div>

        <div className="flex flex-col group w-fit">
          <div className="bg-[#140c1c] rounded-md p-6 hover:bg-[#2a1454] hover:border-[1px] hover:rounded-md hover:border-[#8750f7] w-fit transition duration-500">
            <Image
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-1000"
              src={"/languajes/nodejs.svg"}
              width={100}
              height={100}
              alt="NodeJS"></Image>
          </div>
          <p>Node JS</p>
        </div>

        <div className="flex flex-col group w-fit">
          <div className="bg-[#140c1c] rounded-md p-6 hover:bg-[#2a1454] hover:border-[1px] hover:rounded-md hover:border-[#8750f7] w-fit transition duration-500">
            <Image
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-1000"
              src={"/languajes/react.svg"}
              width={100}
              height={100}
              alt="React"></Image>
          </div>
          <p>React</p>
        </div>

        <div className="flex flex-col group w-fit">
          <div className="bg-[#140c1c] rounded-md p-6 hover:bg-[#2a1454] hover:border-[1px] hover:rounded-md hover:border-[#8750f7] w-fit transition duration-500">
            <Image
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-1000"
              src={"/languajes/sass.svg"}
              width={100}
              height={100}
              alt="Sass"></Image>
          </div>
          <p>Sass</p>
        </div>

        <div className="flex flex-col group w-fit">
          <div className="bg-[#140c1c] rounded-md p-6 hover:bg-[#2a1454] hover:border-[1px] hover:rounded-md hover:border-[#8750f7] w-fit transition duration-500">
            <Image
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-1000"
              src={"/languajes/tailwind.svg"}
              width={100}
              height={100}
              alt="Tailwind"></Image>
          </div>
          <p>Tailwind</p>
        </div>

        <div className="flex flex-col group w-fit">
          <div className="bg-[#140c1c] rounded-md p-6 hover:bg-[#2a1454] hover:border-[1px] hover:rounded-md hover:border-[#8750f7] w-fit transition duration-500">
            <Image
              className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-1000"
              src={"/languajes/firebase.svg"}
              width={100}
              height={100}
              alt="Tailwind"></Image>
          </div>
          <p>Firebase</p>
        </div>
      </div>
    </div>
  );
}
