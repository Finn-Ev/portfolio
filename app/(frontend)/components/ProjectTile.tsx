import Image from "next/image";
import { urlFor } from "../../../sanity.client";
import { TProject } from "../../../util/sanity/types";

function ProjectTile({ project }: { project: TProject }) {
  return (
    <div>
      <Image src={urlFor(project.preview_image).url()} alt={project.title} height={400} width={400} />
      <h3 className="text-lg">{project.title}</h3>
      <div className="flex">
        {project.stack.map((technology) => (
          <Image
            src={urlFor(technology.icon).url()}
            title={technology.name}
            alt={technology.name}
            width={30}
            height={30}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectTile;
