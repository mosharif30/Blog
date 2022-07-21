import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = (place) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  // place.map((plc) => console.log(plc));
  //categories.map((category) => console.log(category.name.toLowerCase()));
  return (
    <div className="   rounded-lg p-8 pb-4 mb-10 bg-customGray">
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`text-gray-200 font-bold cursor-pointer block hover:text-white p-3 mb-3 lg:text-right ${
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
          className={`text-gray-200 font-bold cursor-pointer block hover:text-white  p-3 mb-3 lg:text-right ${
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
          className={`text-gray-200 font-bold cursor-pointer block hover:text-white  p-3 mb-3 lg:text-right ${
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
