import { useState } from "react";
import Button from "../Button/Button";
import NavBarLinks from "./NavBarLinks";
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import ReactIcon from "../../assets/react.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="py-5">
        <div className="flex font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full cursor-pointer flex justify-between">
            <img
              src={ReactIcon}
              alt="Afritech Logo"
              className="dark:invert cursor-pointer h-12 w-12"
              width={35}
              height={30}
            />
            <div
              className="text-3xl md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                className="h-12 w-12 font-extrabold"
                src={isOpen ? CloseIcon : MenuIcon}
                alt="Mobile menu"
              />
            </div>
          </div>

          <ul className="md:flex hidden md:uppercase md:gap-8  md:font-[Poppings] duration-500">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "py-7 px-3 inline-block bg-indigo-500"
                    : "py-7 px-3 inline-block"
                }
              >
                Home
              </NavLink>
            </li>
            <NavBarLinks />
          </ul>
          <div className="md:flex hidden">
            <Link to="/add-job">
              {" "}
              <Button
                style="bg-indigo-500 text-white px-6 rounded-full"
                text="POST A JOB"
              />
            </Link>
          </div>
          {/* mobile nav view */}
          <ul
            className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
              isOpen ? "left-0" : "left-[-100%]"
            } `}
          >
            <li>
              <Link to="/add-job" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavBarLinks />
            <div className="py-3">
              <Button
                style="bg-indigo-500 text-white px-6 py-2 rounded-full flex justify-center"
                onClick={() => console.log("Create a form")}
                text="POST A JOB"
              />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
