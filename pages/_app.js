import '../styles/globals.css'
import '../styles/mui.css'
import 'react-toastify/dist/ReactToastify.css'

import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { ToastContainer } from 'react-toastify'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  {
    console.log(router.locale)
  }
  return (
    <NextIntlClientProvider
      locale={router.locale}
      // timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <main className={inter.className}>
        <ToastContainer />
        <Component {...pageProps} />
      </main>
    </NextIntlClientProvider>
  )
}

export default MyApp
