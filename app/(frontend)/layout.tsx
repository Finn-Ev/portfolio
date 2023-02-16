import '../../styles/global.css';
import { fetchSocialIcons } from '../../util/sanity/fetchData';
import Header from './components/Header';
import ThemeProvider from './ThemeProvider';

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
        <ThemeProvider>
          {/* @ts-expect-error Server Component */}
          <Header socialIcons={socialIcons} />
          <main className="overflow-x-hidden overflow-y-scroll bg-violet-50 text-zinc-800 dark:bg-zinc-900 dark:text-white ">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
