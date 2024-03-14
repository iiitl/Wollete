import '../styles/globals.css'
import '../styles/mui.css'
import 'react-toastify/dist/ReactToastify.css'

import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <ToastContainer />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
