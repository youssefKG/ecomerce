import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/20/solid";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/16/solid";

interface ProfilBackDropProps {}

const ProfilBackDrop = ({}) => {
  return (
    <Popover className="z-40">
      <PopoverButton className=" outline-none ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsz-ePYChlKmmDp0G6-3nUZOJQ3d8KmY7DA&s" />
        <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="mt-2 transition ease-out text-gray-800 duration-400  from-neutral-800
        bg-white data-[closed]:scale-95 data-[closed]:opacity-0 flex flex-col gap-2
        border-collapse border border-gray-100-200  shadow w-52  text-sm rounded-md
        "
      >
        <Link
          className="block data-[focus]:bg-blue-100 hover:opacity-100 opacity-95 p-2 hover:bg-gray-100 transition ease-out duration-300"
          to="/account"
        >
          <div className="flex gap-2 items-center">
            <UserIcon className="size-5" />
            <p>My Account</p>
          </div>
        </Link>
        <Link
          className="block data-[focus]:bg-blue-100 hover:opacity-100 opacity-95 p-2 hover:bg-gray-100 transition ease-out duration-300"
          to="/account/orders"
        >
          My orders
        </Link>
        <Link
          className="block data-[focus]:bg-blue-100 hover:opacity-100 opacity-95 p-2 hover:bg-gray-100 transition ease-out duration-300"
          to="/license"
        >
          My returns
        </Link>
        <Link
          className="block data-[focus]:bg-blue-100 hover:opacity-100 opacity-95 p-2 hover:bg-gray-100 transition ease-out duration-300"
          to="/license"
        >
          <div className="flex gap-2 items-center">
            <ArrowLeftEndOnRectangleIcon className="size-5" />
            <p>Logout</p>
          </div>
        </Link>
      </PopoverPanel>
    </Popover>
  );
};

export default ProfilBackDrop;
