/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border-none bg-slate-200 px-3 py-3 text-md font-large text-gray-700 outline-none">
          <AiOutlineMenu />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {links.map((e) => (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    key={e.label}
                    className={classNames(
                      active ? " bg-gray-100 text-gray-700" : "text-gray-500",
                      "block px-4 py-2 text-md"
                    )}
                  >
                    {e.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="py-1">
            {credlinks.map((e) => (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    key={e.label}
                    className={classNames(
                      active ? " bg-gray-100 text-gray-700" : "text-gray-500",
                      "block px-4 py-2 text-md"
                    )}
                  >
                    {e.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

const links = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Topic",
    href: "#",
  },
  {
    label: "Latest",
    href: "#",
  },
  {
    label: "More",
    href: "#",
  },
];
const credlinks = [
  {
    label: "Login",
    href: "#",
  },
  {
    label: "Sign up",
    href: "#",
  },
];
