import { Metadata } from "next";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Games",
};
const Games = () => {
  return (
    <>
      <Head>
        <title>Games</title>
      </Head>
      <h1>Games</h1>
      <div>
        <h2>KJ Scorched Earth</h2>
        <div className="flex">
          <Image
            src={"/assets/images/KJScorched-Still.png"}
            alt="Scorched Screeenshot"
            width="320"
            height="240"
          />
          <video
            width="320"
            height="240"
            controls
            preload="/assets/images/KJScorched-Still.png"
          >
            <source src="/assets/video/KJScorched-Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>
          NOTE: Currently only available for Windows and has only been tested on
          Windows 11. Some large amount of work is in progress to make Cross
          Platform (Windows, OSX and Linux)
        </p>
        <p>
          <Link href="/downloads/KJScorched.zip">Download</Link> -{" "}
          <Link
            href="https://github.com/keithjasper83/Scorched2024"
            target="_blank"
          >
            View on GitHub.com
          </Link>
        </p>
      </div>
      <div>
        <h2>DevilApproaches</h2>
        <div className="flex">
          <Image
            src={"/assets/images/DevilApproaches-Still.png"}
            alt="Devil Approaches Screenshot"
            width="320"
            height="240"
          />
          <video
            width="320"
            height="240"
            controls
            preload="/assets/images/DevilApproaches-Still.png"
          >
            <source
              src="/assets/video/DevilApproaches-Video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>
          NOTE: Currently only available for Windows and has only been tested on
          Windows 11. Some progress has been made to make Cross Platform
          (Windows, OSX and Linux) however that is still ongoing.
        </p>
        <p>
          <Link href="/downloads/DevilApproaches.zip">Download</Link> -{" "}
          <Link
            href="https://github.com/keithjasper83/DevilApproaches"
            target="_blank"
          >
            View on GitHub.com
          </Link>
        </p>
      </div>
    </>
  );
};

export default Games;
