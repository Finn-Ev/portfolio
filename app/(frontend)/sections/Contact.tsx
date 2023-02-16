import { SocialIcon } from "react-social-icons";
import { fetchSocialIcons } from "../../../util/sanity/fetchData";

async function ContactSection() {
  const socialIcons = await fetchSocialIcons();
  return (
    <section id="contact">
      <div className="w-20 sm:w-40 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full" />
      <h1 className="text-gradient py-10 text-5xl">Kontakt</h1>

      {/* <div className="border-b border-gray-500 w-full my-10"></div> */}
      <p className="font-bold text-gray-500 text-lg">E-Mail</p>
      <a href="mailto:finn.evermann@icloud.com" className="text-gradient text-lg">
        finn.evermann@icloud.com
      </a>
      <div className="flex items-center pt-10">
        {socialIcons.map((icon) => (
          <>
            <SocialIcon
              title={icon.name}
              url={icon.url}
              bgColor={icon.bgColor}
              fgColor="white"
              style={{ width: 30, height: 30 }}
              key={icon._id}
            />
            <a href={icon.url} className="inline-block ml-2 mr-5 hover:underline ">
              {icon.name}
            </a>
          </>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;
