'use client';
import { Icons } from "../icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Added type definition for NavItem
type NavItem = {
  content: string;
  location: string;
  image: string;
};

const NavData: NavItem[] = [
  {
    content: "Home",
    location: "/",
    image: "home", // removed extra space
  },
  // {
  //   content: "Contact",
  //   location: "/contact",
  //   image: "send",
  // },
  // {
  //   content: "Newsletter",
  //   location: "/newsletter",
  //   image: "envelope",
  // },
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
  // {
  //   content: "Blog",
  //   location: "/blog",
  //   image: "blog",
  // },
];

export default function Nav() {
  const pathname = usePathname();
  
  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 border-b-2 border-t-1 border-[#1e2730]">
      <div className="max-w-screen-xl w-full py-4 justify-between flex items-center">
        <Link href="/">
          <h1 className="font-bold text-xl text-white">Keith Jasper</h1>
        </Link>
        <ul className="flex items-center">
          {NavData.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.location} 
                className={`flex py-2 px-6 items-center text-white hover:text-gray-800 transition-colors gap-2 
                  ${pathname === item.location ? 'font-bold bg-orange-700 rounded-md' : ''}`}
              >
                <Icons name={item.image} className="mr-1" />
                {item.content}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
