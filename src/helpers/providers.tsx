'use client';

import {
    QueryClient,
    QueryClientProvider
  } from '@tanstack/react-query';

import { useState } from 'react';

  import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

  import { ReactNode } from 'react';

  export default function Providers({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    );
  }