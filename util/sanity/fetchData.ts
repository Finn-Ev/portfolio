import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity.client';
import { TSocialIcon } from './types';

export const fetchSocialIcons = async () => {
  const query = groq`*[_type == "socialIcon"]{_id, name, url, bgColor}`;
  const socialIcons = await sanityClient.fetch(query);
  return socialIcons as TSocialIcon[];
};
