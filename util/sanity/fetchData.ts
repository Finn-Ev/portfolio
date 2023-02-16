import { groq } from "next-sanity";
import { sanityClient } from "../../sanity.client";
import { TSocialIcon, TProject } from "./types";

export const fetchSocialIcons = async () => {
  const query = groq`*[_type == "socialIcon"]{_id, name, url, bgColor}`;
  const socialIcons = await sanityClient.fetch(query);
  return socialIcons as TSocialIcon[];
};

export const fetchProjects = async () => {
  const query = groq`*[_type == "project"] {
  _id, title, url, preview_image, stack[] -> {
    _id, title, icon 
  } 
  }`;
  const projects = await sanityClient.fetch(query);
  return projects as TProject[];
};
