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
    <div className="text-white  shadow-lg rounded-lg p-8 pb-4 mb-10 bg-gray-900">
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block hover:border-l-8  p-3 mb-3 ${
              place.place == category.name.toLowerCase().replaceAll(" ", "-")
                ? "bg-white text-gray-900"
                : "bg-gray-900"
            }`}
          >
            {category.name}
          </span>
        </Link>
      ))}
      <Link href={`/about`}>
        <span className={`cursor-pointer block hover:border-l-8  p-3 mb-3`}>
          ABOUT
        </span>
      </Link>
    </div>
  );
};

export default Categories;
