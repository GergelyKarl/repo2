import Head from "next/head";
import { blogPosts } from "../../lib/data";

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title >{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl uppercase text-green-900 text-center my-6 font-bold">{title}</h1>
        <p className="leading-7 font-mono ">{content}</p>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const {params}=context
  return {
    props: blogPosts.find((item)=> item.slug === params.slug )
  };
}

export async function getStaticPaths() {
  
 const spath ={
    paths: blogPosts.map((item) => ({
        params: {
          slug: item.slug,
        },
      })),
  
      fallback: false,
 }
 console.log(JSON.stringify(spath,null," "));
  return spath
}
