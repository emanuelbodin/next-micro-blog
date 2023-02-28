'use client'
import { SessionProvider } from 'next-auth/react'
import { ClientProvider } from '@/utils/TrpcClient'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ClientProvider>{children}</ClientProvider>
    </SessionProvider>
  )
}

export default Providers
