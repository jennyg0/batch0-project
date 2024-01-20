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
        <p className="text-neutral">Swipe through the polls and cast your votes.</p>
      </div>
      <PollSwiper polls={fetchedPolls} />
    </>
  );
};

export default Vote;
