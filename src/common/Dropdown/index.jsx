// import { useState } from "react";
import { Fragment } from "react";

import { NavLink } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";

import { BsChevronDown } from "react-icons/bs";

const Dropdown = ({ button, links }) => {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="inline-flex items-center">
        {button}
        <BsChevronDown className="pl-2" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" absolute bottom-0 mt-2 w-[150px] translate-y-[105%] rounded-lg bg-blue-400 p-2 text-white">
          {links.map((link, index) => (
            <Menu.Item key={index}>
              {({ close }) => (
                <NavLink
                  className="k block py-1 duration-300 hover:bg-blue-300 hover:pl-2"
                  to={link.to}
                  onClick={() => close()}
                >
                  {link.label}
                </NavLink>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
