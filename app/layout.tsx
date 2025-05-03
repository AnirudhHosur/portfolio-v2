// app/layout.tsx
import './globals.css';
import { ChakraProviders } from './components/chakra-provider';

export const metadata = {
  title: 'My App',
  description: 'A Next.js App with Chakra UI',
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
