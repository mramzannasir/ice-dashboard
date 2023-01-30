import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [showpass, setshowpass] = useState(false);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/home");
  };
  return (
    <>
      <section className="w-full login-bg h-screen overflow-hidden">
        <div className="p-2">
          <img src="logo-1.png" className="w-8 md:w-auto" alt="" />
        </div>
        <main className=" w-full h-full  flex justify-center items-center">
          <div className="w-[95%] md:max-w-[400px] lg:max-w-xl flex flex-col justify-center items-center">
            <div>
              <img src="/main-logo.png" alt="" className="" />
            </div>
            <div className="w-full mt-[30px] lg:mt-[50px]">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="w-full flex flex-col">
                  <label
                    htmlFor=""
                    className="text-[16px] leading-6 font-normal">
                    Enter username
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="name@example.com"
                    className="h-[40px] p-2 lg:mt-2 outline-none focus:outline-none border-[1px] rounded-xl border-[#e7e7e7 ]  text-[#939393] h-[54px] text-[16px] leading-6 font-normal"
                  />
                </div>
                <div className="w-full mt-[15px] lg:mt-[25px] flex flex-col">
                  <label
                    htmlFor=""
                    className="text-[16px] leading-6 font-normal">
                    Enter password
                  </label>
                  <div className="h-[54px] relative bg-white   flex justify-between items-center lg:mt-2 rounded-xl border-[1px] border-[#e7e7e7 ]  text-[#939393] lg:h-[54px] text-[16px] leading-6 font-normal">
                    <input
                      required
                      name="password"
                      onChange={(e) => setPass(e.target.value)}
                      value={pass}
                      type={showpass ? "text" : "password"}
                      placeholder="at  least 8 character"
                      className="outline-none bg-inherit focus:outline-none  rounded-xl p-2 h-full w-full border-none"
                    />
                    <div
                      className="cursor-pointer absolute right-2 "
                      onClick={() => setshowpass(!showpass)}>
                      {showpass ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=" feather feather-eye">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-eye-off">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-[15px] lg:mt-[30px] bg-[#2594F1] text-white text-base rounded-xl h-[45px] lg:h-[54px]">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
