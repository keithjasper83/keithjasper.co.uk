import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../icons";
import Link from "next/link";

const NavData = [
  {
    content: "Home",
    location: "/",
    image: "home ",
  },
  {
    content: "Contact",
    location: "/contact",
    image: "send",
  },
  {
    content: "TicTacToe",
    location: "/tictactoe",
    image: "code",
  },
  {
    content: "Games",
    location: "/games",
    image: "gamepad",
  },
];

// @ts-ignore
export const Nav = () => {
  return (
    <div className=" w-full flex justify-center bg-gradient-to-r  from-orange-500 via-orange-600 to-orange-500 border-b-2 border-t-1 border-[#1e2730]">
      <div className="max-w-screen-xl w-full h-100px justify-between flex items-center">
        <Link href="/">
          <h1 className="w-200px">Keith Jasper</h1>
        </Link>
        <ul className="flex items-center">
          {NavData.map((i, index) => (
            <li key={index}>
              {" "}
              {/* Add key prop */}
              <a href={i.location} className="flex py-2 px-6 items-center ">
                <Icons name={i.image} />
                {i.content}
              </a>
            </li>
          ))}
        </ul>

        <div></div>
      </div>
    </div>
  );
};
