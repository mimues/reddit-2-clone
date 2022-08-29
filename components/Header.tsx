import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
  LogoutIcon
} from "@heroicons/react/solid";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  //Renaming data
  const { data: session } = useSession();

  return (
    <div className="flex bg-white px-4 py-2 shadow-sm sticky top-0 z-30 items-center">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href='/'>
          <Image
            src="https://links.papareact.com/fqy"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      {/* Search box */}
      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="items-center text-gray-500 space-x-2 mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      {/* Sign in - Sign out button */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 cursor-pointer p-2"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              src="https://links.papareact.com/23l"
              alt="Sign Out Button"
              layout="fill"
            />
          </div>
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
          </div>
          <LogoutIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 cursor-pointer p-2"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              src="https://links.papareact.com/23l"
              alt="Sign In Button"
              layout="fill"
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}

      {/* Dropdown menu */}
      <div className="ml-5 flex items-center lg:hidden relative">
        {toggleMenu ? (
          <XIcon className="icon" onClick={() => setToggleMenu(false)} />
        ) : (
          <MenuIcon className="icon" onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className="flex z-20 justify-end items-end flex-col text-center py-1 absolute top-12 right-0 mt-1 border-r-6 scale min-w-max">
            <SparklesIcon className="icon" />
            <GlobeIcon className="icon" />
            <VideoCameraIcon className="icon" />
            <ChatIcon className="icon" />
            <BellIcon className="icon" />
            <PlusIcon className="icon" />
            <SpeakerphoneIcon className="icon" />
            {session ? (
              <div
                onClick={() => signOut()}
                className="flex items-center space-x-2 border border-gray-100 cursor-pointer p-2 mt-1"
              >
                <div className="relative h-5 w-5 flex-shrink-0">
                  <Image
                    src="https://links.papareact.com/23l"
                    alt="Sign Out Button"
                    layout="fill"
                  />
                </div>
                <div className="flex-1 text-xs">
                  <p className="truncate">{session?.user?.name}</p>
                </div>
                <LogoutIcon className="h-5 flex-shrink-0 text-gray-400" />
              </div>
            ) : (
              <div
                onClick={() => signIn()}
                className="flex items-center space-x-2 border border-gray-100 cursor-pointer p-2 mt-1"
              >
                <div className="relative h-5 w-5 flex-shrink-0">
                  <Image
                    src="https://links.papareact.com/23l"
                    alt="Sign In Button"
                    layout="fill"
                  />
                </div>
                <p className="text-gray-400">Sign In</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
