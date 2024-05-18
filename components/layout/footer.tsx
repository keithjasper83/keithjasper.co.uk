// Code: Footer Component

import Link from "next/link";
import { Icons } from "../icons";
import { utilGetCounter } from "../requestCounterAPI/getcounter";
import { Tooltip } from "@nextui-org/tooltip";

export const Footer = ({ counter }: any) => {
  const today = new Date();

  // Server Action
  async function getServerCounterValue() {
    const counter = await utilGetCounter();
    return counter;
  }

  return (
    <footer className=" w-full flex justify-center bg-[linear-gradient(_var(--tw-gradient-stops))] to-[#13191f] via-[#13191f] from-[#13191f] border-t-2 border-[#1e2730] p-1 m-0">
      <div className="row flex justify-around py-3">
        <ul>
          <li>&copy; Keith Jasper {today.getFullYear()}</li>
          <li>
            <Tooltip
              className="bg-orange-500 border-12 border-orange-500 p-2 m-3 rounded-lg"
              content="This counter has been cached by your browser. Using no-cache or CTRL+SHIFT+R will retrieve a new value."
            >
              <span>
                Server Counter: {getServerCounterValue()} (Server Side Rendered)
              </span>
            </Tooltip>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              className="flex items-center"
              target="_blank"
              href="https://www.linkedin.com/in/keith-jasper-uk/"
            >
              <Icons name="linkedin" />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center"
              target="_blank"
              href="https://www.youtube.com/podman99"
            >
              <Icons name="youtube" />
              YouTube
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center"
              target="_blank"
              href="https://www.x.com/podman99"
            >
              <Icons name="x-twitter" />X
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/games/" className="flex items-center">
              <Icons name="download" />
              Downloads
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/keithjasper83/"
              className="flex items-center"
            >
              {" "}
              <Icons name="github" />
              GitHub
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/apitest/documentation/" className="flex items-center">
              API Docs
            </Link>{" "}
            <i>EXAMPLE</i>
          </li>
          <li>
            <Link href="/apitest/users/" className="flex items-center">
              Users
            </Link>{" "}
            <i>EXAMPLE</i>
          </li>
        </ul>
      </div>
    </footer>
  );
};
