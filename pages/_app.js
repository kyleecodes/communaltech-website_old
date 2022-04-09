import "../styles/globals.css";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <div>

        <ThemeToggle />

    
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
