import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Twinkle MC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Welcome to Twinkle MC
      <Link href="/page1">
        <a>Go to page 1</a>
      </Link>
    </div>
  );
}
