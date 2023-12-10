"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState();
  const searchFn = (e) => {
    if (e.key === `Enter` && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword(``);
    }
  };
  const menu = [
    {
      name: `About`,
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];
  return (
    <div className=" flex items-center gap-5 h-20 p-5">
      <Link
        href={"/"}
        className="bg-amber-600 p-3 text-2xl text-black rounded-lg font-bold"
      >
        MovieApp
      </Link>
      <div className="flex flex-1 p-3 items-center rounded-lg gap-2 border">
        <input
          value={keyword}
          onKeyDown={searchFn}
          onChange={(e) => setKeyword(e.target.value)}
          className="outline-none bg-transparent flex-1"
          placeholder="Search..."
          type="text"
        />
        <BiSearch className="cursor-pointer" size={25} />
      </div>
      <ThemeComp />
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}
    </div>
  );
};

export default Header;
