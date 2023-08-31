import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import VelikiSat from "../komponente/VelikiSat";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Welcome() {
    const navigate = useNavigate();

    if (localStorage.getItem("email") === null) window.location.replace("/");

    const logout = () => {
        localStorage.removeItem("email");

        Swal.fire({
            icon: "info",
            title: "Poruka",
            text: "Uspešno ste se odjavili!",
        });

        navigate("/");
    };

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                alt="Your Company"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                onClick={logout}
                                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only"></span>
                                                <ArrowLeftOnRectangleIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu
                                                as="div"
                                                className="relative ml-3"
                                            >
                                                <div>
                                                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only"></span>
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
                                                ></Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">
                                                Open main menu
                                            </span>
                                            {open ? (
                                                <XMarkIcon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Bars3Icon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3"></div>
                                <div className="border-t border-gray-700 pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white"></div>
                                            <div className="text-sm font-medium leading-none text-gray-400"></div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={logout}
                                            className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">
                                                View notifications
                                            </span>
                                            <ArrowLeftOnRectangleIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                            IT-DEV - strana aplikacije za zaposlene
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                            Trenutno vreme je:
                        </h1>
                        <VelikiSat />
                        <br />
                        <br />
                        <h4 className="text-center text-md ">
                            Ukoliko je vreme označeno crvenom bojom - Zakasnili
                            ste da se prijavite na vreme.
                        </h4>

                        <h4 className="text-center text-md">
                            Ukoliko je vreme označeno zelenom bojom - Hvala što
                            se se prijavili na vreme.
                        </h4>
                    </div>
                </main>
            </div>
        </>
    );
}
