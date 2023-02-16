import { TypedObject } from "sanity";

export type TGeneralConfig = {
  hero_text: TypedObject[];
  hero_image: string;
  more_info_link: string;
  contact_email: string;
};

export type TSocialIcon = {
  _id: string;
  name: string;
  url: string;
  bgColor: string;
};

export type TProject = {
  _id: string;
  title: string;
  description: TypedObject[];
  url: string;
  source_url: string;
  preview_image: string;
  stack: TTechnology[];
};

export type TTechnology = {
  _id: string;
  title: string;
  icon: string;
};
