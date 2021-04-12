import Head from "next/head";
import Avatar from "../components/Avatar";
import {
  ViewGridIcon,
  MicrophoneIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Footer from "../components/Footer";
export default function Home() {
  const searcInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searcInputRef.current.value;
console.log(term);
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className=" flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5 ">
        <Image
          src="https://www.google.hu/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl ">
          <SearchIcon className="h-5 mr-3 text-gray-500 " />
          <input
            ref={searcInputRef}
            type="text"
            className="focus:outline-none flex-grow  "
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>Google Serch</button>
          <button className="btn">I'm Feeling lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
