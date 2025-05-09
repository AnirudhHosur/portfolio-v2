// lib/chakra-provider.tsx
'use client';

import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
