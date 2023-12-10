"use client";
import Movies from "@/components/Movies";
import { options } from "@/constants/url";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const keyword = params?.keyword;
  const [keyData, setKeyData] = useState();
  const [isError, setIsError] = useState(false);
  console.log(keyword);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setKeyData(response))
      .catch((err) => setIsError(true));
  }, [keyword]);
  return isError ? (
    <div>Couldn't Found!</div>
  ) : (
    <div className="flex justify-center flex-wrap gap-5">
      {keyData?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
