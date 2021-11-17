
import '../styles/global.scss'


export default function App({ Component, pageProps }) {
  console.log("pageprops", pageProps)
    return <Component {...pageProps} />
  }