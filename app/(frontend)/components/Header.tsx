import Link from 'next/link';
import { GrCloudlinux } from 'react-icons/gr';
import { SocialIcon } from 'react-social-icons';
import { fetchSocialIcons } from '../../../util/sanity/fetchData';
import { TSocialIcon } from '../../../util/sanity/types';

export default async function () {
  const socialIcons = await fetchSocialIcons();

  return (
    <header className="bg-violet-100 text-zinc-800 dark:bg-zinc-800 dark:text-white z-20 flex items-center justify-between px-5 py-3 shadow-lg h-[60] sticky top-0">
      <Link
        href={'/'}
        className="font-light text-lg tracking-widest flex items-center space-x-1"
      >
        <span>FE_DEV</span>
        <i>
          <GrCloudlinux className="h-4 w-4" />
        </i>
      </Link>
      <div className="hidden space-x-5 sm:flex sm:items-center">
        <a href="#technologies" className="text-sm font-light">
          Technologien
        </a>
        <a href="#about" className="text-sm font-light">
          Über mich
        </a>
        <a href="#projects" className="text-sm font-light">
          Projekte
        </a>
        <a href="#contact" className="text-sm font-light">
          Kontakt
        </a>
      </div>
      <div className="flex items-center space-x-2">
        {socialIcons.map(icon => (
          <SocialIcon
            url={icon.url}
            style={{ width: 30, height: 30 }}
            fgColor="white"
            bgColor={icon.bgColor}
            target={'_blank'}
            key={icon._id}
          />
        ))}
      </div>
    </header>
  );
}
