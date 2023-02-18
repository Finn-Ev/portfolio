"use client";

import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { urlFor } from "../../../sanity.client";
import { TProject } from "../../../util/sanity/types";

function ProjectTile({ project }: { project: TProject }) {
  return (
    <div className="p-3 bg-zinc-800 rounded-2xl">
      <Image
        src={urlFor(project.preview_image).url()}
        alt={project.title}
        height={1000}
        width={1000}
        className="rounded-2xl"
      />
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
              key={technology.title}
            />
          ))}
        </div>
      </div>
      <div className="mb-5">
        <PortableText value={project.description} />
      </div>
      <div className="flex items-center justify-between text-md ">
        <a
          href={project.url}
          target={"_blank"}
          className="text-white py-2 px-3 rounded-2xl bg-gradient-to-r from-rose-500 to-violet-500"
        >
          Live-Demo <ArrowTopRightOnSquareIcon className="inline mb-1" height={20} width={20} />
        </a>
        <a href={project.source_url} target={"_blank"} className="flex items-center justify-center">
          <span>Quell-Code</span>
          <SocialIcon
            url={project.source_url}
            fgColor="#fff"
            bgColor="black"
            style={{ width: 35, height: 35 }}
            className="ml-2"
          />
          {/* <CodeBracketIcon className="ml-2 " width={25} height={25} /> */}
        </a>
      </div>
    </div>
  );
}

export default ProjectTile;
