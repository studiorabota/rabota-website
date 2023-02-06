import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Trispace } from '@next/font/google'

const trispace = Trispace({ 
  subsets: ['latin'],
  axes: ['wdth']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={trispace.className}>
      <Component {...pageProps} />
    </main>
  )
}
