/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Layout from "../dashboard/Layout";
import { motion } from "framer-motion";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Layout>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="px-4">
          <div className="w-full">
            <h1 className="headings">Gallery</h1>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 5xl:grid-cols-6 gap-5">
              <Link href={"/gallary/folder"}>
                <div className="xl:w-[332px] overflow-hidden h-[232px] bg-[#3399cc26] flex flex-col cursor-pointer justify-center items-center rounded-xl">
                  <div>
                    {" "}
                    <img
                      src="/folder.png"
                      className="w-[89px] h-[89px]"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-medium">Folder 1</h1>
                  </div>
                </div>
              </Link>
              <div>
                <div className="xl:w-[332px] overflow-hidden h-[232px] flex flex-col bg-[#3399cc26] cursor-pointer justify-center items-center rounded-xl">
                  <div>
                    {" "}
                    <img
                      src="/folder.png"
                      className="w-[89px] h-[89px]"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-medium">Folder 2</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="xl:w-[332px] overflow-hidden h-[232px] flex flex-col bg-[#3399cc26] cursor-pointer justify-center items-center rounded-xl">
                  <div>
                    {" "}
                    <img
                      src="/folder.png"
                      className="w-[89px] h-[89px]"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-medium">Folder 3</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="xl:w-[332px] overflow-hidden h-[232px] flex flex-col bg-[#3399cc26] cursor-pointer justify-center items-center rounded-xl">
                  <div>
                    {" "}
                    <img
                      src="/folder.png"
                      className="w-[89px] h-[89px]"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-medium">Folder 4</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="xl:w-[332px] overflow-hidden h-[232px] flex flex-col bg-[#3399cc26] cursor-pointer justify-center items-center rounded-xl">
                  <div>
                    {" "}
                    <img
                      src="/folder.png"
                      className="w-[89px] h-[89px]"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-medium">Folder 5</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="xl:w-[332px] overflow-hidden h-[232px] flex flex-col bg-[#3399cc26] cursor-pointer justify-center items-center rounded-xl">
                  <div>
                    {" "}
                    <img
                      src="/folder.png"
                      className="w-[89px] h-[89px]"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-medium">Folder 6</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="xl:w-[332px] overflow-hidden h-[232px] flex flex-col bg-[#3399cc26] cursor-pointer justify-center items-center rounded-xl">
                  <div>
                    {" "}
                    <img
                      src="/folder.png"
                      className="w-[89px] h-[89px]"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-medium">Folder 7</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default index;
