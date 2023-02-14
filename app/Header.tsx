import Link from 'next/link';
import { GrCloudlinux } from 'react-icons/gr';
import { SocialIcon } from 'react-social-icons';

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
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
        <SocialIcon
          url="https://www.linkedin.com/in/finn-evermann-50148023b/"
          style={{ width: 30, height: 30 }}
          fgColor="white"
          target={'_blank'}
        />
        <SocialIcon
          url="https://github.com/Finn-Ev"
          style={{ width: 30, height: 30 }}
          fgColor="white"
          bgColor="black"
          target={'_blank'}
        />
      </div>
    </header>
  );
};

export default Header;
