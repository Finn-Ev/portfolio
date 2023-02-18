import { fetchProjects } from "../../../util/sanity/fetchData";
import ProjectTile from "../components/ProjectTile";

async function ProjectsSection() {
  const projects = await fetchProjects();

  return (
    <section id="projects" className="mb-14">
      <div className="w-20 sm:w-40 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full" />
      <h1 className="text-gradient pt-10 pb-2 text-3xl lg:text-5xl">Meine Projekte</h1>
      <h2 className="pb-5 text-xl">Hier sehen sie eine Auswahl meiner privat erstellten Projekte.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  place-items-center gap-6">
        {projects.map((project) => (
          <ProjectTile project={project} key={project._id} />
        ))}
        <ProjectTile project={projects[0]} />
        <ProjectTile project={projects[0]} />
      </div>
    </section>
  );
}

export default ProjectsSection;
