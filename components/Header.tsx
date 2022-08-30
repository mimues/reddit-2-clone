import React, { useState } from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  XIcon,
  LogoutIcon,
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
        <Link href="/">
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      {/* Search box */}
      <form className="ml-7 flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
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
              src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
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
              src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
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
          <div className="flex z-20 justify-end items-end flex-col text-center py-2 px-2 absolute top-12 -right-1.5 mt-1 scale min-w-max bg-white">
            <SparklesIcon className="icon" />
            <GlobeIcon className="icon" />
            <VideoCameraIcon className="icon" />
            <ChatIcon className="icon" />
            <BellIcon className="icon" />
            <PlusIcon className="icon" />
            <SpeakerphoneIcon className="icon" />
            {session ? (
              <LogoutIcon
                onClick={() => signOut()}
                className=" text-gray-400 icon"
              />
            ) : (
              <div
                onClick={() => signIn()}
                className="flex items-center space-x-2 border border-gray-100 cursor-pointer p-2 mt-1"
              >
                <div className="relative h-5 w-5 flex-shrink-0">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
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
