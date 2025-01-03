import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  })
  
  return (
    <ThemeProvider attribute='class' enableSystem={false}>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}
