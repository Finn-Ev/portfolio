import { fetchProjects } from "../../../util/sanity/fetchData";
import BackgroundAnimation from "../components/BackgroundAnimation";
import ProjectTile from "../components/ProjectTile";

async function ProjectsSection() {
  const projects = await fetchProjects();

  return (
    <section id="projects" className="w-[100%] mb-16">
      <div className="w-20 sm:w-40 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full" />
      <h1 className="text-gradient py-10 text-5xl">Meine Projekte</h1>
      <p className="text-lg font-light"></p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6">
        {projects.map((project) => (
          <ProjectTile project={project} />
        ))}
        <ProjectTile project={projects[0]} />
        <ProjectTile project={projects[0]} />
        <ProjectTile project={projects[0]} />
      </div>
    </section>
  );
}

export default ProjectsSection;
