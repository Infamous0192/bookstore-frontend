"use client";

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Button } from "@/components/elements";
import Link from "next/link";
import { IconBell, IconMenu2, IconX } from "@tabler/icons-react";
import { useAuth } from "@/hooks/auth";

export const Navbar: React.FC = () => {
  const [top, setTop] = useState(true);
  const router = useRouter();
  const { creds, logout } = useAuth();

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const handleLogout = async () => {
    // dispatch({ type: 'LOGOUT' })
    await logout();
    router.push("/");
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${
        !top
          ? "bg-white shadow-lg"
          : "bg-white md:bg-transparent shadow-lg md:shadow-none"
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      href="/"
                      className="font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm"
                    >
                      Home
                    </Link>
                    {creds != null && (
                      <>
                        <Link
                          href="/collection"
                          className="font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm"
                        >
                          Your Collection
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {creds != null ? (
                    <>
                      <div className="text-sm flex items-center mr-2">
                        Your Point {creds.point}
                      </div>
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs rounded-full flex items-center text-sm">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              width={32}
                              height={32}
                              src="https://dummyimage.com/100/dfdfdf/dfdfdf"
                              alt=""
                            />
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
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/collection"
                                  className={`${
                                    active && "bg-slate-100"
                                  } block px-4 py-2 text-sm text-slate-900`}
                                >
                                  Check your Collection
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={handleLogout}
                                  className={`${
                                    active && "bg-slate-100"
                                  } block px-4 py-2 text-sm w-full text-left text-slate-900`}
                                >
                                  Sign Out
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/auth/login"
                        className="whitespace-nowrap text-base font-medium text-slate-600 hover:text-slate-900"
                      >
                        Login
                      </Link>
                      <Link href="/auth/register">
                        <Button color="secondary" size="md" className="ml-8">
                          Register
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:text-slate-500 hover:bg-slate-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IconX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IconMenu2 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Disclosure.Button
                  as={Link}
                  href="/home"
                  className="text-slate-600 text-sm hover:text-slate-900 hover:bg-slate-100 rounded block px-3 py-2"
                >
                  Home
                </Disclosure.Button>
                {creds && (
                  <Disclosure.Button
                    as={Link}
                    href="/collection"
                    className="text-slate-600 text-sm hover:text-slate-900 hover:bg-slate-100 rounded block px-3 py-2"
                  >
                    Your collection
                  </Disclosure.Button>
                )}
              </div>
              <div className="pt-4 pb-3 border-t border-slate-300">
                {!creds ? (
                  <div className="px-5">
                    <Link href="/auth/register">
                      <Button size="md" color="secondary" className="w-full">
                        Register
                      </Button>
                    </Link>
                    <p className="mt-4 text-center text-sm text-slate-500">
                      Already have account?{" "}
                      <Link
                        href="/auth/login"
                        className="text-sunglow-600 hover:text-sunglow-500"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full"
                          src="https://dummyimage.com/100/dfdfdf/dfdfdf"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-slate-900">
                          {creds?.name}
                        </div>
                        <div className="text-sm text-slate-600">
                          {creds?.username}
                        </div>
                      </div>
                      <div className="ml-auto text-sm flex items-center mr-2">
                        Your Point {creds.point}
                      </div>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      <button
                        onClick={handleLogout}
                        className="text-slate-600 text-sm hover:text-slate-900 hover:bg-slate-100 w-full text-left rounded block px-3 py-2"
                      >
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
