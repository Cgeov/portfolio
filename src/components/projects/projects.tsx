import ProjectCard from "./projectCard";


export default function Projects(){
    return <div>
        <h2 className="bgTitle text-6xl font-bold text-center pt-16" data-aos="fade-down">Sobre Mi</h2>
        <div className="grid grid-cols-2 gap-4 items-center pb-2 px-10">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>

        </div>
    </div>
}