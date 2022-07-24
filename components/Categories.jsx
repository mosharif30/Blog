import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = (place, { cat }) => {
  const [categories, setCategories] = useState([]);
  console.log("cat", cat);
  useEffect(() => {
    getCategories().then((newCategories) => {
      console.log("new", newCategories);
      setCategories(newCategories);
    });
  }, []);
  // place.map((plc) => console.log(plc));
  //categories.map((category) => console.log(category.name.toLowerCase()));
  return (
    <div className="    lg:pt-3 pb-4 lg:mb-10  bg-customGray">
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`text-gray-200  font-bold cursor-pointer block hover:text-white p-2 mb-1 lg:mx-3  xl:text-base  lg:text-right  ${
              place.place == category.name.toLowerCase().replaceAll(" ", "-")
                ? "bg-white text-gray-500 hover:text-black"
                : "bg-customGray text-white"
            }`}
          >
            {category.name}
          </span>
        </Link>
      ))}
      <Link href={`/curriculum-vitae`}>
        <span
          className={`text-gray-200 font-bold cursor-pointer block hover:text-white  p-2 mb-1 lg:mx-3  xl:text-base  lg:text-right ${
            place.place == "curriculum-vitae"
              ? "bg-white text-gray-500 hover:text-black"
              : "bg-customGray"
          }`}
        >
          CURRICULUM VITAE
        </span>
      </Link>
      <Link href={`/about`}>
        <span
          className={`text-gray-200 font-bold cursor-pointer block hover:text-white  p-2 mb-1 lg:mx-3  xl:text-base  lg:text-right ${
            place.place == "about"
              ? "bg-white text-gray-500 hover:text-black"
              : "bg-customGray"
          }`}
        >
          ABOUT
        </span>
      </Link>
    </div>
  );
};

export default Categories;
export async function getServerSideProps() {
  getCategories().then((serverCategories) => {
    const cat = serverCategories;
    return {
      props: { cat },
    };
  });
}
