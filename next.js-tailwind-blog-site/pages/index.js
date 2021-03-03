import Head from "next/head";
import { blogPosts } from "../lib/data";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My Blog</h1>
      </main>

      <div>
        {blogPosts.map((item) => (
          <div key={item.slug}>
            <Link href={`blog/${item.slug}`}>
              <a> {item.title}</a>
            </Link>
            <div>{item.date.slice(0, 10)}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
