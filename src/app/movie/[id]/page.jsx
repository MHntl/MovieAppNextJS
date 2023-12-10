"use client";
import { options } from "@/constants/url";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [idData, setIdData] = useState();
  const id = params.id;
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setIdData(response))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: `cover` }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          idData?.backdrop_path || idData?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{idData?.title}</div>
        <div className="w-1/2">{idData?.overview}</div>
        <div className="my-3">
          {idData?.vote_average} - {idData?.release_date}
        </div>
        <div className="border w-32 hover:bg-white transition-all hover:text-black p-2 my-2 rounded-md text-center text-lg cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
