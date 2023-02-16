import { groq } from "next-sanity";
import { sanityClient } from "../../sanity.client";
import { TSocialIcon, TProject, TGeneralConfig } from "./types";

export const fetchGeneralConfig = async () => {
  const query = groq`*[_type == "generalConfig"] {
  _id, hero_text, hero_image, more_info_link, contact_email
  }`;

  const [config] = await sanityClient.fetch(query);

  return config as TGeneralConfig;
};

export const fetchSocialIcons = async () => {
  const query = groq`*[_type == "socialIcon"]{_id, name, url, bgColor}`;
  const socialIcons = await sanityClient.fetch(query);
  return socialIcons as TSocialIcon[];
};

export const fetchProjects = async () => {
  const query = groq`*[_type == "project"] {
  _id, title, description, url, source_url, preview_image, stack[] -> {
    _id, title, icon 
  } 
  }`;
  const projects = await sanityClient.fetch(query);
  return projects as TProject[];
};
