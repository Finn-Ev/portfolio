"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { urlFor } from "../../../sanity.client";
import { TProject } from "../../../util/sanity/types";

function ProjectTile({ project }: { project: TProject }) {
  return (
    <div className="p-5 bg-zinc-800 rounded-2xl">
      <Image src={urlFor(project.preview_image).url()} alt={project.title} height={1000} width={1000} />
      <div className="flex justify-between py-2">
        <h3 className="text-lg">{project.title}</h3>
        <div className="flex">
          {project.stack.map((technology) => (
            <Image
              src={urlFor(technology.icon).url()}
              title={technology.title}
              alt={technology.title}
              width={30}
              height={30}
              className="mr-2"
            />
          ))}
        </div>
      </div>
      <div className="mb-3">
        <PortableText value={project.description} />
      </div>
      <div className="flex justify-between items-center">
        <a href={project.url}>Zum Projekt</a>
        <a href={project.source_url} className="flex items-center">
          <span>Zum Git-Repository</span>
          <SocialIcon
            target={"_blank"}
            url={project.source_url}
            fgColor="#fff"
            bgColor="black"
            style={{ width: 35, height: 35 }}
            className="ml-2"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectTile;
