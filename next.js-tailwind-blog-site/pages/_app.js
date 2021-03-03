import "../styles/globals.css";
import Link from "next/link"
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><a><Link href="/about">About</Link></a></li>
         
        </ul>
      </nav>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
