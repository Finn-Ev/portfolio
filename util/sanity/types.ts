export type TSocialIcon = {
  _id: string;
  name: string;
  url: string;
  bgColor: string;
};

export type TProject = {
  _id: string;
  title: string;
  source_url: string;
  preview_image: string;
  stack: TTechnology[];
};

export type TTechnology = {
  _id: string;
  name: string;
  icon: string;
};
