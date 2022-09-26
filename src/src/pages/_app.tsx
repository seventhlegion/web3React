import { Web3Provider } from '@ethersproject/providers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Web3ReactProvider } from '@web3-react/core';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function getLib(provider: any): Web3Provider {
  const lib = new Web3Provider(provider);
  lib.pollingInterval = 12000;
  return lib;
}

function MyApp({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Web3ReactProvider getLibrary={getLib}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </QueryClientProvider>
  )
}

export default MyApp
