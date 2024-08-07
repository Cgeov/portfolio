import { BookText, CodeXml, Gamepad2, Music, Popcorn } from "lucide-react";
import { useState } from "react";
import { LiaChessSolid } from "react-icons/lia";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiPingPongLine } from "react-icons/ri";

const BlobPattern = ({ gradientId, hovered }: any) => {
  return (
    <svg className="w-full h-[100px]">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stopColor={hovered ? "rgba(126, 34, 206)" : "rgba(121, 121, 121)"}
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stopColor={hovered ? "rgba( 15, 7, 21)" : "rgba(90, 90, 90)"}
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M16.6,-19.7C24.1,-17.5,34.5,-16,39.5,-10.5C44.5,-5,44.1,4.6,38.5,9.6C32.9,14.7,22.2,15.2,14.9,18.6C7.6,22.1,3.8,28.4,-1.7,30.8C-7.2,33.1,-14.4,31.4,-17.5,26.6C-20.7,21.9,-19.8,14,-21,7.5C-22.1,1,-25.3,-4.1,-26.8,-11.6C-28.3,-19,-28.1,-28.8,-23.4,-31.9C-18.6,-35.1,-9.3,-31.7,-2.4,-28.4C4.6,-25.1,9.1,-22,16.6,-19.7Z"
        width="w-full"
        height="w-full"
        transform="translate(50 50)"
        strokeWidth="0"
        stroke={`url(#${gradientId})`}
      ></path>
    </svg>
  );
};

export default function Hobbies() {
  const info = [
    {
      name: "Musica",
      icon: <Music className="absolute top-9 left-10"></Music>,
    },
    {
      name: "Películas",
      icon: <Popcorn className="absolute top-9 left-10"></Popcorn>,
    },
    {
      name: "Programación",
      icon: <CodeXml className="absolute top-9 left-10"></CodeXml>,
    },
    {
      name: "Video Juegos",
      icon: <Gamepad2 className="absolute top-9 left-10"></Gamepad2>,
    },
    {
      name: "Tenis de Mesa",
      icon: (
        <RiPingPongLine className="absolute top-9 left-10 text-2xl"></RiPingPongLine>
      ),
    },
    {
      name: "Lectura",
      icon: <BookText className="absolute top-9 left-10"></BookText>,
    },
    {
      name: "Manualidades",
      icon: (
        <MdOutlineDesignServices className="absolute top-9 left-10 text-2xl"></MdOutlineDesignServices>
      ),
    },
    {
      name: "Juegos de mesa",
      icon: (
        <LiaChessSolid className="absolute top-9 left-10 text-2xl"></LiaChessSolid>
      ),
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="relative md:py-10 mx-auto px-[5%] text-center xl:mx-auto max-w-[1400px]">
      {/* <div
        className="overflow-hidden absolute top-[50%] left-[calc(50%_-_161px)] bg-gradient-to-br from-purple-700 to-transparent rounded-full blur-[100px] w-[322px] h-[308px]"
        style={{ zIndex: -1000 }}
      ></div> */}
      <div className="relative">
        <h2
          className="bgTitle text-6xl font-bold text-center py-10"
          data-aos="fade-down"
        >
          Mis Hobbies
        </h2>
        <h2
          className="titleSecond text-6xl font-bold text-center py-10"
          data-aos="fade-down"
        >
          Mis Hobbies
        </h2>
      </div>

      <div className="grid mt-6 grid-cols-[1fr] sm:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-6">
        {info.map((activity: any, index: number) => {
          return (
            <div
              key={index}
              className="relative group flex items-center rounded-md border-2 border-opacity-5 border-gray-400 hover:border-purple-600 transition-all duration-500"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              onTouchStart={() => handleMouseEnter(index)}
            >
              <div className="group-hover:absolute group-hover:bg-gradient-to-br group-hover:from-purple-700 group-hover:to-transparent group-hover:rounded-full group-hover:blur-[100px] group-hover:w-[200px] group-hover:h-[200px]"></div>
              <div className="relative w-[35%] min-w-32 transition-all duration-1000 delay-200">
                <BlobPattern
                  gradientId={"hover-" + index}
                  hovered={hoveredIndex === index}
                />
                {activity.icon}
              </div>

              <p className="group-hover:text-purple-700 text-lg transition-all duration-500">
                {activity.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
