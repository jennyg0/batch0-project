"use client";

import type { NextPage } from "next";
import PollSwiper from "~~/components/PollSwiper";
import { useFetchPolls } from "~~/hooks/useFetchPolls";

const Vote: NextPage = () => {
  const fetchedPolls = useFetchPolls();

  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Voting</h1>
        <p className="text-neutral">Click through the polls and cast your votes.</p>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <PollSwiper polls={fetchedPolls} />
      </div>
    </>
  );
};

export default Vote;
