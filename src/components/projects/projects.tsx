import ProjectCard from "./projectCard";

export default function Projects() {
  return (
    <div className="pb-16">
      <h2
        className="bgTitle text-6xl font-bold text-center py-10"
        data-aos="fade-down">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center pb-2 px-10">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
}
