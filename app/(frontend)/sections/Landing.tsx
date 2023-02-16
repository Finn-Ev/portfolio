import Image from "next/image";
import portraitPhoto from "../../../public/portrait.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

function LandingSection() {
  return (
    <section id="home">
      <div className="flex flex-col lg:flex-row h-full justify-start lg:justify-between items-start lg:items-center relative">
        <div className="lg:order-last flex flex-1 justify-center lg:justify-end mb-8 lg:mb-0">
          <Image src={portraitPhoto} alt="Portrait" className="rounded-full md:order-last  h-2/3 w-2/3" />
        </div>
        <div className="flex-1">
          <h1 className="text-gradient text-5xl">Willkommen</h1>
          <h2 className="text-gradient text-5xl">zu meinem Portfolio</h2>
          <div className="text-xl mt-2 mb-6 max-w-xl">
            <p className="mb-5">
              Mein Name ist Finn Evermann und ich bin 21 Jahre alt. <br /> Ich bin ein Webentwickler, der seit 2020 bei
              der LEONEX Internet GmbH angestellt ist. In meiner Freizeit mache ich gerne Sport in Form von Calisthenics
              und programmiere an privaten Projekten.
              <br />
              Eine Auswahl dieser Projekte ist unten aufgelistet.
            </p>
            <div className="lg:flex">
              <span>
                Weitere Informationen zu meiner Person finden Sie&nbsp;
                <a target="_blank" className="" href="https://www.linkedin.com/in/finn-evermann-50148023b/">
                  <span className="text-gradient underline">hier</span>.
                  {/* <ArrowTopRightOnSquareIcon className="inline ml-1 mb-1" height={20} width={20} /> */}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
