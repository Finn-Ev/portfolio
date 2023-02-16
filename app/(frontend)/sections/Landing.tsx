import Image from "next/image";
import { ArrowTopRightOnSquareIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { urlFor } from "../../../sanity.client";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "sanity";

function LandingSection({
  heroText,
  heroImage,
  moreInfoLink,
}: {
  heroText: TypedObject[];
  heroImage: string;
  moreInfoLink: string;
}) {
  return (
    <section id="home" className="mb-8 lg:mb-0">
      <div className="flex flex-col lg:flex-row-reverse justify-start lg:justify-between items-start lg:items-center relative">
        <div className="flex flex-1 justify-center lg:justify-end mb-3">
          <Image
            src={urlFor(heroImage).url()}
            alt="Portrait"
            width={500}
            height={500}
            className="rounded-full h-1/2 w-1/2 lg:h-2/3 lg:w-2/3"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-gradient text-3xl lg:text-5xl">Willkommen</h2>
          <h1 className="text-gradient text-3xl lg:text-5xl">zu meinem Portfolio</h1>
          <div className="text-xl mt-2 mb-6 max-w-xl">
            <div className="mb-5">
              <PortableText value={heroText} />
            </div>
            <div className="lg:flex">
              <span>
                Weitere Informationen zu meiner Person finden Sie&nbsp;
                <a target="_blank" className="" href={moreInfoLink}>
                  <span className="text-gradient underline">hier</span>.
                  {/* <ArrowTopRightOnSquareIcon className="inline ml-1 mb-1" height={20} width={20} /> */}
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* <a href="#projects" className="hidden self-center">
          <ChevronDoubleDownIcon height={45} width={45} />
        </a> */}
      </div>
    </section>
  );
}

export default LandingSection;
