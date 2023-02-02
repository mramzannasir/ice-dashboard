import React from "react";
import Layout from "../dashboard/Layout";
import { motion } from "framer-motion";

const index = () => {
  return (
    <>
      <Layout>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ type: "spring", duration: 1 }}>
          <main className="px-4 mt-[3rem] lg:mt-0">
            <div className="w-full flex justify-between items-center">
              <div>
                {" "}
                <h1 className="headings">Inventory</h1>
              </div>
              <div className="hidden md:block">
                {" "}
                <div className="border-[1px]  px-6 py-4 text-[#939393] hover:text-white hover:bg-blue transition-all duration-500 flex justify-center items-center text-sm h-[41px] rounded-xl border-[#e7e7e7] cursor-pointer">
                  Collect selected items
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="mt-4">
              <div className="relative overflow-x-auto  rounded-xl">
                <table className="w-full bg-[#F3FAFF] rounded-xl border-[1px] border-[#e7e7e7] text-sm text-left text-[18px] leading-4 text-[#939393]">
                  {/* Table Head */}
                  <thead className="text-xs bg-[#f9f9f9] rounded-xl">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-[#97AFC2] border-gray-300 rounded"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        System name
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        Description
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        Equipment name
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        Sub-assembly name
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        OEM part no.
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        OEM deatils
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        Denomination
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        Current stock
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        Min. stock
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        Min. order
                      </th>
                      <th scope="col" className="px-6 font-normal py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[1px] border-[#E7E7E7]">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-[#97AFC2] border-gray-300 rounded"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-normal text-[12px]">
                        Anchiring ystem
                      </th>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Ball bearing
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Anchor captan
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Primary gear box
                      </td>
                      <td className="px-2 md:px-6 py-4 font-normal text-[12px]">
                        xx-00-01
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">ABC</td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Nos.
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4">
                        <img src="/eye.png" alt="" />
                      </td>
                    </tr>
                    <tr className="border-b border-[1px] border-[#E7E7E7]">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-[#97AFC2] border-gray-300 rounded"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-normal text-[12px]">
                        Anchiring ystem
                      </th>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Ball bearing
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Anchor captan
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Primary gear box
                      </td>
                      <td className="px-2 md:px-6 py-4 font-normal text-[12px]">
                        xx-00-01
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">ABC</td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Nos.
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4">
                        <img src="/eye.png" alt="" />
                      </td>
                    </tr>
                    <tr className="border-b border-[1px] border-[#E7E7E7]">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-[#97AFC2] border-gray-300 rounded"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-normal text-[12px]">
                        Anchiring ystem
                      </th>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Ball bearing
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Anchor captan
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Primary gear box
                      </td>
                      <td className="px-2 md:px-6 py-4 font-normal text-[12px]">
                        xx-00-01
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">ABC</td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Nos.
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4">
                        <img src="/eye.png" alt="" />
                      </td>
                    </tr>
                    <tr className="border-b border-[1px] border-[#E7E7E7]">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-[#97AFC2] border-gray-300 rounded"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-normal text-[12px]">
                        Anchiring ystem
                      </th>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Ball bearing
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Anchor captan
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Primary gear box
                      </td>
                      <td className="px-2 md:px-6 py-4 font-normal text-[12px]">
                        xx-00-01
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">ABC</td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Nos.
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4">
                        <img src="/eye.png" alt="" />
                      </td>
                    </tr>
                    <tr className="border-b border-[1px] border-[#E7E7E7]">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-[#97AFC2] border-gray-300 rounded"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-normal text-[12px]">
                        Anchiring ystem
                      </th>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Ball bearing
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Anchor captan
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Primary gear box
                      </td>
                      <td className="px-2 md:px-6 py-4 font-normal text-[12px]">
                        xx-00-01
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">ABC</td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Nos.
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4">
                        <img src="/eye.png" alt="" />
                      </td>
                    </tr>
                    <tr className="border-b border-[1px] border-[#E7E7E7]">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-[#97AFC2] border-gray-300 rounded"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-normal text-[12px]">
                        Anchiring ystem
                      </th>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Ball bearing
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Anchor captan
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Primary gear box
                      </td>
                      <td className="px-2 md:px-6 py-4 font-normal text-[12px]">
                        xx-00-01
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">ABC</td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Nos.
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4">
                        <img src="/eye.png" alt="" />
                      </td>
                    </tr>
                    <tr className="border-b border-[1px] border-[#E7E7E7]">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-[#97AFC2] border-gray-300 rounded"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-normal text-[12px]">
                        Anchiring ystem
                      </th>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Ball bearing
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Anchor captan
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Primary gear box
                      </td>
                      <td className="px-2 md:px-6 py-4 font-normal text-[12px]">
                        xx-00-01
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">ABC</td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Nos.
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4">
                        <img src="/eye.png" alt="" />
                      </td>
                    </tr>
                    <tr className="border-b border-[1px] border-[#E7E7E7]">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-[#97AFC2] border-gray-300 rounded"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-normal text-[12px]">
                        Anchiring ystem
                      </th>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Ball bearing
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Anchor captan
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Primary gear box
                      </td>
                      <td className="px-2 md:px-6 py-4 font-normal text-[12px]">
                        xx-00-01
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">ABC</td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Nos.
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4">
                        <img src="/eye.png" alt="" />
                      </td>
                    </tr>
                    <tr className="border-b border-[1px] border-[#E7E7E7]">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-[#97AFC2] border-gray-300 rounded"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-normal text-[12px]">
                        Anchiring ystem
                      </th>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Ball bearing
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Anchor captan
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Primary gear box
                      </td>
                      <td className="px-2 md:px-6 py-4 font-normal text-[12px]">
                        xx-00-01
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">ABC</td>
                      <td className="px-6 py-4 font-normal text-[12px]">
                        Nos.
                      </td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4 font-normal text-[12px]">6</td>
                      <td className="px-6 py-4">
                        <img src="/eye.png" alt="" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </motion.div>
      </Layout>
    </>
  );
};
export default index;
