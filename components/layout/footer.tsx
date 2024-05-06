import Link from "next/link";
import { Icons } from "../icons";

export const Footer = () => {
  const today = new Date();
  return (
    <footer className=" w-full flex justify-center bg-[linear-gradient(_var(--tw-gradient-stops))] to-[#13191f] via-[#13191f] from-[#13191f] border-t-2 border-[#1e2730] p-1 m-0">
      <div className="row flex justify-around py-3">
        <ul>
          <li>&copy; Keith Jasper {today.getFullYear()}</li>
          <li></li>
          <li></li>
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
            <Link href="/downloads/" className="flex items-center">
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
      </div>
    </footer>
  );
};
