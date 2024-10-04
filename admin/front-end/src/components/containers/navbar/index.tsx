import { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import {
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  SunIcon,
  BellIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Avatar } from "@mui/material";
import Button from "../../common/button";

const Navbar = () => {
  const { toggleMode, mode } = useContext(GlobalContext);
  return (
    <div className="bg-white dark:bg-neutral-900 dark-text-white flex z-40 flex-col-reverse md:flex-row gap-2 items-center p-2 md:px-6 sticky top-0 justify-between border-b shadow-sm">
      <div
        className="flex justify-between px-4 p-2 w-full max-w-xl text-sm
       rounded-md text-gray-600 bg-gray-50"
      >
        <input
          placeholder="Search for products and client"
          className="outline-none flex-1 bg-transparent"
        />
        <MagnifyingGlassIcon className="size-5 " />
      </div>
      <div className="flex gap-4 items-center text-gray-500 dark:text-white">
        <button>
          <ChatBubbleLeftRightIcon className="size-5" />
        </button>
        <button>
          <BellIcon className="size-6 " />
        </button>
        <Button handleClick={toggleMode}>
          {mode === "ligth" ? (
            <MoonIcon className="size-6" />
          ) : (
            <SunIcon className="size-6" />
          )}
        </Button>
        <button>
          <Avatar
            alt="avater imgae"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dh-hCRQx8d2VZzrmMMLcpUhAh53KlS1s5A&s"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
