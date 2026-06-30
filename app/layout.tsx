import '../src/index.css';
import { ClientProviders } from './ClientProviders';

export const metadata = {
  title: 'Game Studio Hub',
  description: 'Game Studio Hub is Live',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
