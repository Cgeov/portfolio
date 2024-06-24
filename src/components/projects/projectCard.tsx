import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="relative group h-96  flex flex-col justify-center mt-5">
      <Image
        className="px-10 pt-10 rounded-xl bg-[#140c1c]"
        src={"/placeholder.jpg"}
        layout="fill"
        objectFit="cover"
        alt="Proyecto"></Image>
      <div className="hidden group-hover:block group-hover:ease-in-out group-hover:transition-all group-hover:delay-1000 py-5 rounded-xl px-4 absolute bottom-1 z-50 w-[calc(100%_-_20px)] bg-gradient-to-r from-[#8750F7] to-[#2A1454]">
        <h3 className="font-bold">Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dui
          at diam gravida elementum. Nulla sodales luctus ipsum a fermentum.
          Morbi mollis elementum viverra
        </p>
      </div>
    </div>
  );
}
