import "../../styles/global.css";
import { fetchSocialIcons } from "../../util/sanity/fetchData";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const socialIcons = await fetchSocialIcons();
  return (
    <html>
      <head />
      <body className="bg-zinc-900 text-white">
        {/* <Header /> */}
        <main className="md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] m-auto px-10 py-6 lg:py-28">
          {children}
        </main>
      </body>
    </html>
  );
}
