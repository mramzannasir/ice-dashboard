/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Layout from '../dashboard/Layout';
import { motion } from "framer-motion"
import { useRouter } from 'next/router';


const folder = () => {
    const router = useRouter();
    const { slug } = router.query
    return (
        <Layout>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.4, opacity: 0 }}
                transition={{ type: "spring", duration: 1 }}
                className="px-4">
                <div className="w-full">
                    <h1 className="headings">Folder-1</h1>
                </div>
                <div>
                    <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 5xl:grid-cols-6 gap-5">
                        <div>
                            <div
                                className="xl:w-[332px] overflow-hidden h-[232px]  rounded-xl">
                                <div>
                                    {" "}
                                    <img
                                        src="/img-1.png"
                                        className="h-full w-full"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="xl:w-[332px] overflow-hidden h-[232px]  rounded-xl">
                                <div>
                                    {" "}
                                    <img
                                        src="/img-2.png"
                                        className="h-full w-full"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="xl:w-[332px] overflow-hidden h-[232px]  rounded-xl">
                                <div>
                                    {" "}
                                    <img
                                        src="/img-3.png"
                                        className="h-full w-full"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="xl:w-[332px] overflow-hidden h-[232px]  rounded-xl">
                                <div>
                                    {" "}
                                    <img
                                        src="/img-4.png"
                                        className="h-full w-full"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="xl:w-[332px] overflow-hidden h-[232px]  rounded-xl">
                                <div>
                                    {" "}
                                    <img
                                        src="/img-5.png"
                                        className="h-full w-full"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="xl:w-[332px] overflow-hidden h-[232px]  rounded-xl">
                                <div>
                                    {" "}
                                    <img
                                        src="/img-6.png"
                                        className="h-full w-full"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="xl:w-[332px] overflow-hidden h-[232px]  rounded-xl">
                                <div>
                                    {" "}
                                    <img
                                        src="/img-7.png"
                                        className="h-full w-full"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Layout>
    )
}

export default folder;