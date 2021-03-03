import Head from "next/head";
import { blogPosts } from "../lib/data";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog with next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="my-2 font-bold text-2xl">My Blog</h1>
      </main>

      <div>
        {blogPosts.map((item) => (
          <BlogListItem className=" border-solid border-black my-8 p-5" key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div>
      <div className=" border-dashed border border-black my-8 p-5">
        <Link href={`blog/${slug}`}>
          <a className="uppercase font-bold "> {title}</a>
        </Link>
        <div className="my-1 text-sm text-gray-500">{date.slice(0, 10)}</div>
        <div className="font-sans ">{content}</div>
      </div>
    </div>
  );
}
