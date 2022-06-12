import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Provider } from 'react-redux'
import { store } from '../redux/store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
    </Provider>
  )
}

export default MyApp
