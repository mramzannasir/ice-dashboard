/* eslint-disable @next/next/no-img-element */
import { Data } from "@/assets/Data";
import Link from "next/link";
import React, { useContext } from "react";
import { SidebarContext } from "../../Context/Context";
import index from "../Inventory";
import { useRouter } from "next/router";
import Script from "next/script";

const Sidebar = () => {
  const router = useRouter();
  const { width, setWidth } = useContext(SidebarContext);
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      />
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      />
      <div>
        <div className="flex flex-col relative bg-blue  h-screen lg:h-[90rem] xl:h-screen transition-all duration-500">
          <div>
            <button
              onClick={() => setWidth(!width)}
              className="absolute top-[82px] right-0 md:-right-[13px]  btn-sh">
              {width ? (
                <ion-icon name="chevron-back-circle"></ion-icon>
              ) : (
                <ion-icon name="chevron-forward-circle"></ion-icon>
              )}
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-[7rem] justify-center ">
            {Data.map((items, index) => (
              <>
                <Link
                  href={items.path}
                  className={router.pathname == items.path ? "nt" : ""}>
                  <span
                    className={`flex items-center ${
                      width ? "justify-start pl-8" : "justify-center"
                    } gap-3 transition-all duration-300 opacity-50 ${
                      router.pathname == items.path
                        ? "nt opacity-100"
                        : undefined
                    }`}>
                    {/*   className={router.pathname == items.path ? "nt" : ""} */}
                    <img src={items.ico} alt="" className="" />
                    <span
                      className={`text-sm text-white font-normal transition-all duration-300 ${
                        width ? "block" : "hidden"
                      }`}>
                      {items.name}
                    </span>
                  </span>
                </Link>
              </>
            ))}
          </div>
          <div className="absolute bottom-4 flex justify-center w-full">
            <div
              className={`${
                width ? "pl-8" : "justify-center "
              } cursor-pointer gap-8  flex   w-full`}>
              <img src="/setting.png" alt="setting icons" />
              <span
                className={`text-sm text-white opacity-50 font-normal transition-all duration-300 ${
                  width ? "block" : "hidden"
                }`}>
                Setting
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
