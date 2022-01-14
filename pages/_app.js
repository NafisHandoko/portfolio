import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      delay: 50
    });
  });
  return <Component {...pageProps} />
}

export default MyApp
