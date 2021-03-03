import Head from "next/head";
import { blogPosts } from "../../lib/data";

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <p>{content}</p>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const {params}=context
  console.log("juuuuuu"+params);
  return {
    props: blogPosts.find((item)=> item.slug === params.slug )
  };
}

export async function getStaticPaths() {
  
 const foo ={
    paths: blogPosts.map((item) => ({
        params: {
          slug: item.slug,
        },
      })),
  
      fallback: false,
 }
 console.log(JSON.stringify(foo,null," "));
  return foo
}
