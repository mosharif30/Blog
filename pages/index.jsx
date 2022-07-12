import Head from "next/head";
import { useEffect, useState } from "react";
import { PostCard, PostWidget, Categories } from "../components";
import { getPosts } from "../services/index";

const Home = ({ posts }) => {
  // const [sPosts, setSPosts] = useState([]);

  // useEffect(() => {
  //   getPosts().then((newPosts) => {
  //     setSPosts(newPosts.reverse());
  //   });
  // }, []);
  return (
    <>
      <Head>
        <title>Amir Siadat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-1 mb-2 ">
        <div className="grid  grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-4 col-span-1 ">
            <div className="lg:sticky relative top-8">
              <Categories />
              {/* <PostWidget /> */}
            </div>
          </div>
          <div className="grid  lg:grid-cols-2 lg:col-span-8 col-span-1 gap-6 ">
            {posts.reverse().map((post) => (
              <PostCard post={post.node} key={post.node.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
export async function getServerSideProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
