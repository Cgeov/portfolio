import ProjectCard from "./projectCard";

export default function Projects() {
  return (
    <div>
      <div className="relative">
        <h2
          className="bgTitle text-6xl font-bold text-center py-10"
          data-aos="fade-down">
          Servicios
        </h2>
        <h2
          className="titleSecond text-6xl font-bold text-center py-10"
          data-aos="fade-down">
          Servicios
        </h2>
      </div>

      <div className="flex flex-row justify-center pb-10 flex-wrap">
        <div className="card">
          <img src="/iconGrid.svg" />
          <div className="card-content">
            <h2>Card Heading</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              exercitationem iste, voluptatum, quia explicabo laboriosam rem
              adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
              asperiores harum? Dicta odio aut hic.
            </p>
            <a href="#" className="button">
              Find out more
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/iconGrid.svg" />
          <div className="card-content">
            <h2>Card Heading</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              exercitationem iste, voluptatum, quia explicabo laboriosam rem
              adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
              asperiores harum? Dicta odio aut hic.
            </p>
            <a href="#" className="button">
              Find out more
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/iconGrid.svg" />
          <div className="card-content">
            <h2>Card Heading</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              exercitationem iste, voluptatum, quia explicabo laboriosam rem
              adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
              asperiores harum? Dicta odio aut hic.
            </p>
            <a href="#" className="button">
              Find out more
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/iconGrid.svg" />
          <div className="card-content">
            <h2>Card Heading</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              exercitationem iste, voluptatum, quia explicabo laboriosam rem
              adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
              asperiores harum? Dicta odio aut hic.
            </p>
            <a href="#" className="button">
              Find out more
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center pb-2 px-10">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div> */}

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div className="group relative h-72">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
            <div className="hidden h-full p-5 group-hover:absolute group-hover:ease-in-out group-hover:transition-all group-hover:delay-1000 py-5 rounded-xl px-4 bottom-1 z-50 w-full bg-gradient-to-r from-[#8750F7] to-[#2A1454]">
              <h3 className="font-bold">Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                non dui at diam gravida elementum. Nulla sodales luctus ipsum a
                fermentum. Morbi mollis elementum viverra
              </p>
            </div>
          </div>
          <div className="h-44">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
          </div>
          <div className="h-60">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="h-[340px]">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
          </div>
          <div className="h-96">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/placeholder.jpg"
              alt=""
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
