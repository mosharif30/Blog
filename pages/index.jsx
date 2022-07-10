import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";
const posts = [
  { title: "react", excerpt: "learn1" },
  { title: "react2", excerpt: "learn2" },
];
const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-900">
      <Head>
        <title>Cms Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-12  text-white p-8  ">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
