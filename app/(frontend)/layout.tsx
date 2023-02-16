import '../../styles/global.css';
import { fetchSocialIcons } from '../../util/sanity/fetchData';
import Header from './components/Header';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialIcons = await fetchSocialIcons();
  return (
    <html>
      <head />
      <body>
        {/* @ts-expect-error Server Component */}
        <Header socialIcons={socialIcons} />
        <main>{children}</main>
      </body>
    </html>
  );
}
