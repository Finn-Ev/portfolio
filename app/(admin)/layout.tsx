export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <main> {children}</main>
      </body>
    </html>
  );
}
