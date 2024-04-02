export const metadata = {
    title: 'unOfficial Lego',
    description: 'Web site created with Next.js.',
  }

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
