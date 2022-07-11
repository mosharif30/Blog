import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
   const [categories, setCategories] = useState([]);

  //  useEffect(() => {
  //    getCategories().then((newCategories) => {
  //      setCategories(newCategories);
  //    });
  //  }, []);
  return (
    <div className="container mx-auto px-3 mb-8 ">
      <div className="border-b w-full inline-block border-gray-900 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl ">
              AMIR SIADAT
            </span>
          </Link>
        </div>
        {/* <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className=" md:float-left md:contents">
          <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer ">
            Resume
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
