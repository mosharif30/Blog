import Link from "next/link";
import { useContext } from "react";

const categories = [
  { name: "React", slug: "react" },
  { name: "Web", slug: "web" },
];
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Amir Hossein Siadat
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden md:float-left md:contents">
          <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
            Resume
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
