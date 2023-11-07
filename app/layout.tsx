import './globals.css';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Roots',
  description: 'Your garden at you fingertips',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className='bg-local ...'
        style={{
          backgroundImage: `url('../images/main-background.jpg')`,
          backgroundSize: 'cover', // or 'contain' or '100% 100%' to adjust the zoom
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center', // Adjust as needed to position your image
        }}
      >
        <main className='min-h-screen flex flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
