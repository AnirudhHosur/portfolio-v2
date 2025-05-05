// app/layout.tsx
import './globals.css';
import { ChakraProviders } from './components/chakra-provider';

export const metadata = {
  title: 'Anirudh Hosur | Portfolio',
  description: 'A Portfolio showcasing my work and skills as a software developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
