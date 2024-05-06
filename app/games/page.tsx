import { Metadata } from 'next';
import { Icons } from '../../components/icons';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Games',
};
const Games = () => {
  return (
    <>
      <Head>
        <title>Games</title>
      </Head>
      <div className="row">
        <div className="py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                Games
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-500">
                Developed on C++ games and bellow has some scrrenshots and video
                about the game and feel free to install and play it. Test it
                out!
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
            >
              <li>
                <Image
                  className="rounded-2xl"
                  src={'/assets/images/KJScorched-Still.png'}
                  alt="Scorched Screeenshot"
                  width="320"
                  height="240"
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-200">
                  KJ Scorched Earth
                </h3>
                <p className="text-base leading-7 text-gray-500">
                  Developement started on 2023
                </p>
                <p className="mt-4 text-base leading-7 text-gray-500">
                  NOTE: Currently only available for Windows and has only been
                  tested on Windows 11. Some large amount of work is in progress
                  to make Cross Platform (Windows, OSX and Linux)
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <Link
                      className="text-gray-400 hover:text-gray-500"
                      href="/downloads/KJScorched.zip"
                    >
                      <Icons name="download" />
                      Download
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-400 hover:text-gray-500"
                      href="https://github.com/keithjasper83/Scorched2024"
                      target="_blank"
                    >
                      <Icons name="github" />
                      View Code
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <video
                  width="320"
                  height="240"
                  controls
                  preload="/assets/images/KJScorched-Still.png"
                >
                  <source
                    src="/assets/video/KJScorched-Video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </li>

              <li>
                <Image
                  className="rounded-2xl"
                  src={'/assets/images/DevilApproaches-Still.png'}
                  alt="Devil Approaches Screenshot"
                  width="320"
                  height="240"
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-200">
                  Devil Approaches
                </h3>
                <p className="text-base leading-7 text-gray-500">
                  Developement started on 2024
                </p>
                <p className="mt-4 text-base leading-7 text-gray-500">
                  NOTE: Currently only available for Windows and has only been
                  tested on Windows 11. Some progress has been made to make
                  Cross Platform (Windows, OSX and Linux) however that is still
                  ongoing.
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <Link
                      className="text-gray-400 hover:text-gray-500"
                      href="/downloads/DevilApproaches.zip"
                    >
                      <Icons name="download" />
                      Download Game
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-400 hover:text-gray-500"
                      href="https://github.com/keithjasper83/DevilApproaches"
                      target="_blank"
                    >
                      <Icons name="github" />
                      View Code
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
