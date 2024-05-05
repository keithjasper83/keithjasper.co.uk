import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavData = [
  {
    content: "Home",
    location: "/",
    image: "fa-solid fa-house ",
  },
  {
    content: "Contact",
    location: "/contact",
    image: "fa-solid fa-house",
  },
  {
    content: "TicTacToe",
    location: "/tictactoe",
    image: "fa-solid fa-house",
  },
];

// @ts-ignore
export const Nav = () => {
  return (
    <div className="bg-orange-500 w-full flex justify-center">
      <div className="max-w-screen-xl w-full h-100px justify-between flex items-center">
        <h1 className="w-200px">Keith Jasper</h1>
        <ul className="flex items-center">
          {NavData.map((i) => (
            <li>
              <a href={i.location} className="flex py-2 px-6 ">
                <i className={i.image}></i>
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
