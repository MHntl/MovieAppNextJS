"use client";
import Movies from "@/components/Movies";
import { options } from "@/constants/url";
import React, { useEffect, useState } from "react";

const Page = ({ searchParams }) => {
  const [fetchData, setFetchData] = useState();
  const genre = searchParams.genre;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${genre}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setFetchData(response))
      .catch((err) => console.error(err));
  }, [genre]);
  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {fetchData?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
