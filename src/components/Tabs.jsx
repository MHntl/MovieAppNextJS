"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const tabs = [
    {
      name: "Most Popular",
      url: "popular",
    },
    {
      name: "Top Rated",
      url: "top_rated",
    },
    {
      name: "Upcoming",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 flex items-center justify-center bg-gray-100 dark:bg-gray-900 gap-7 m=5">
      {tabs.map((tab, i) => (
        <Link
          className={`${
            tab.url === genre
              ? `underline text-amber-600 underline-offset-8`
              : ``
          }cursor-pointer hover:opacity-75 transition-opacity`}
          key={i}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
