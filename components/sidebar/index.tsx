import Link from "next/link";
import React, { useState } from "react";
import { customRouter } from "../../lib";
import { NavLink } from "../link";

export const SideBar: React.FC = () => {
  // const [state, setState] = useState({ open: false });
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <i
        onClick={() => setOpen(!open)}
        className={`bi bi-chevron-${open ? "left" : "right"
          } absolute -right-6 top-16 bg-neutral_900 text-primary_800 p-1 rounded-br-xl rounded-tr-xl bg-opacity-75`}
      >open</i>

      <nav
        className={`bg-white shadow-100 ${open ? "w-64 " : "w-16"
          } p-2 font-medium overflow-hidden transition-all duration-500 h-screen`}
      >
        <div className="py-2 flex justify-center gap-3">
          <p className="w-2 h-2 bg-red-500 rounded-full"></p>
          <p className="w-2 h-2 bg-yellow-400 rounded-full"></p>
          <p className="w-2 h-2 bg-green-400 rounded-full"></p>
        </div>
        <div className="flex justify-center py-5">
          <img
            className="w-12 h-12 my-1 border-gray_200 border-y border-x p-1 rounded-full"
            src="https://picsum.photos/200"
            alt="profile pic"
          />
        </div>
        <div className="text-left w-full text-secondary_900 py-4 border-b border-gray_100">
          {

            customRouter.dashboard.map((link, index) => {
              return (
                <NavLink
                  href={`/${link.link}`}
                  key={index}
                >
                  <div className={`flex items-center cursor-pointer hover:bg-neutral_900 px-4 py-2 whitespace-nowrap gap-10  `}>
                    <i className={`${link.icon}`}></i>
                    <span>{link.label}</span>
                  </div>
                </NavLink>
              )
            })
          }

        </div>
        <Link
          href="/dashboard/setting"

        >
          <div className="text-secondary_900 flex items-center gap-10 px-4 py-4 my-1 cursor-pointer">
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </div>

        </Link>
        <div className="absolute bottom-20 w-11/12">
          {open ? (
            <button className="bg-primary_800 text-white flex items-center gap-4  px-4 py-2 rounded w-full">
              <i className="bi bi-plus-circle text-2xl"></i>
              <span className="text-xs whitespace-nowrap transition-all duration-700">
                Create new branch
              </span>
            </button>
          ) : (
            <i
              className="bi bi-plus-lg bg-primary_800  flex items-center gap-4 ml-1 px-2 py-2 text-2xl rounded-full w-max
           text-white transition-all duration-700"
            ></i>
          )}
        </div>
      </nav>
    </div>
  );
};
