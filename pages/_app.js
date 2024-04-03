import { useAuth } from "@/hooks/useAuth";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default useAuth(App);
