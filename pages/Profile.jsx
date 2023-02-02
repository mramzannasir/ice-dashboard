import Image from "next/image";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/router";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { motion } from "framer-motion";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
import { IoMdLaptop } from "react-icons/io";
import { AiOutlineCamera } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { MdOutlinePhoto } from "react-icons/md";

const Profile = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    router.push("/");
  };
  const goto = () => {
    router.push("/home");
  };
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.4, opacity: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className="overflow-x-hidden">
      <main className="">
        <div className=" flex w-[100%]  h-screen  items-end  bgdd transition-all duration-300">
          <div className=" flex flex-col   md:justify-start md:px-8 bg-[#fdfdfd]  relative  h-[80%] rounded-t-2xl w-full">
            <div className="flex rounded-full pb-2 overflow-hidden absolute justify-center md:justify-start top-[-4rem] md:pl-6 w-full">
              <div
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                className="relative">
                <Image
                  src="/user-2.jpg"
                  height={100}
                  width={100}
                  className="rounded-full h md:h-[10rem] cursor-pointer overflow-hidden z-[98] shadow-md shadow-slate md:w-[10rem]"
                  alt="user"
                />
                {hover && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0  left-0 h-full w-full flex justify-center  items-center bg-[#00000079] rounded-full">
                    <div className="text-xs cursor-pointer text-[#c5c5c5] mt-10">
                      <AiOutlineCamera size={35} />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="md:pl-7">
              <h1 className="headings mt-[3rem] font-medium md:mt-[7rem] text-center md:text-left ">
                Jon Doe
              </h1>
              <p className="title opacity-60  text-center md:text-left">
                Lorem ipsum dolor, sit amet.
              </p>
              <p className="text-lg opacity-90 text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <div className="flex w-full items-center justify-center md:justify-start gap-2 mt-3">
                <div
                  onClick={goto}
                  className="flex w-[200] h-[40px] bg-blue border-[1px] border-borderwhite text-white  transition-all duration-300 px-5 py-2 gap-2 cursor-pointer rounded-xl justify-center items-center">
                  <div>
                    <MdOutlineSpeakerNotes size={20} />
                  </div>
                  <div className="text-base ">Notes</div>
                </div>
                <div
                  onClick={goto}
                  className="flex w-[200] h-[40px] bg-blue border-[1px] border-borderwhite text-white  transition-all duration-300 px-5 py-2 gap-2 cursor-pointer rounded-xl justify-center items-center">
                  <div>
                    <HiClipboardDocumentCheck size={20} />
                  </div>
                  <div className="text-base  ">Document</div>
                </div>
              </div>
            </div>
            <div className="absolute md:block hidden top-4 right-4 transition-all duration-500">
              <div
                onClick={() => setShow(!show)}
                className="cursor-pointer mt-2">
                <div>
                  <BsThreeDotsVertical size={25} color="#939393" />
                </div>
                {show ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      onClick={handleClick}
                      className="  ">
                      <h1 className="text-lg px-4 py-1 bg-[#acabab42] rounded-xl  hover:bg-light absolute transition-all duration-500  right-1 text-[#ad4242]">
                        Logout
                      </h1>
                    </motion.div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* Skills */}
            <div className="w-full h-[1px] my-6 bg-[#b3b3b3]"></div>
            <div className="">
              <div className="w-full mt-6   bg-[#ffffff]   rounded-2xl md:p-4 h-[]">
                {" "}
                <h1 className="headings font-medium text-center md:text-left">
                  Skills
                </h1>{" "}
                <div className="w-full flex justify-center md:justify-start items-stretch mt-3 xl:mt-6 gap-8 flex-wrap px-2">
                  <div class="max-w-sm p-6 bg-white border border-borderwhite rounded-lg shadow ">
                    <BsCodeSlash size={40} className="mb-2" />
                    <a href="#">
                      <h5 class="mb-2 text-xl text-[#252525] font-medium ">
                        Code
                      </h5>
                    </a>
                    <p class="mb-3 font-normal opacity-70">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda architecto sed quia numquam nesciunt fugit quod
                      fugiat impedit,
                    </p>
                  </div>
                  <div class="max-w-sm p-6 bg-white border border-borderwhite rounded-lg shadow ">
                    <MdOutlinePhoto size={40} className="mb-2" />
                    <a href="#">
                      <h5 class="mb-2 text-xl text-[#252525] font-medium ">
                        Photography
                      </h5>
                    </a>
                    <p class="mb-3 font-normal opacity-70">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda architecto sed quia numquam nesciunt fugit quod
                      fugiat impedit,
                    </p>
                  </div>
                  <div class="max-w-sm p-6 bg-white border border-borderwhite rounded-lg shadow ">
                    <MdOutlineDesignServices size={40} className="mb-2" />
                    <a href="#">
                      <h5 class="mb-2 text-xl text-[#252525] font-medium ">
                        Designing
                      </h5>
                    </a>
                    <p class="mb-3 font-normal opacity-70">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda architecto sed quia numquam nesciunt fugit quod
                      fugiat impedit,
                    </p>
                  </div>
                  <div class="max-w-sm p-6 bg-white border border-borderwhite rounded-lg shadow ">
                    <HiOutlineNewspaper size={40} className="mb-2" />
                    <a href="#">
                      <h5 class="mb-2 text-xl text-[#252525] font-medium ">
                        Writing
                      </h5>
                    </a>
                    <p class="mb-3 font-normal opacity-70">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda architecto sed quia numquam nesciunt fugit quod
                      fugiat impedit,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Profile;
