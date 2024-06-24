import Image from "next/image";

export default function ProjectCard(){
    return <div className="relative group h-64  flex flex-col justify-center">
        <Image className="px-10 pt-10 rounded-xl bg-[#140c1c]" src={"/placeholder.jpg"} layout="fill" objectFit="cover" alt="Proyecto"></Image>
        <div className=" group-hover:block absolute bottom-0 z-50 w-[calc(100%_-_20px)] card-gradient">
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dui at diam gravida elementum. Nulla sodales luctus ipsum a fermentum. Morbi mollis elementum viverra</p>
        </div>
    </div>
}