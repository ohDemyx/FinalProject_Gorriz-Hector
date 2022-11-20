import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Structure from '../components/Structure';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }: AppProps) {
  return(
    <Structure>
      <ToastContainer limit={1} />
      <Component {...pageProps} />
    </Structure>
  )
}

export default App;
