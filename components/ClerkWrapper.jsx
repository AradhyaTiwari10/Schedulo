'use client';

import { ClerkProvider } from '@clerk/clerk-react';

export default function ClerkWrapper({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}
