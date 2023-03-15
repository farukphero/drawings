import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-10/12 mx-auto">
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  );
}
