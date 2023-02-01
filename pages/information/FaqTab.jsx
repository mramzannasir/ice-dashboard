import { useState } from "react";

const FaqTab = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  console.log(answer);

  return (
    <>
      {" "}
      <div className="flex  w-full   pt-7 flex-col justify-center   items-center ">
        <div
          onClick={() => setActive((prev) => !prev)}
          className={`flex ${
            active ? "pb-4" : ""
          } cursor-pointer transition-all duration-500 w-full lg:max-w-[80%]  justify-between items-center gap-5 `}>
          <h3 className="text-base font-medium">{question}</h3>
          <div className=" flex justify-center items-center rounded-full  overflow-hidden">
            {active ? (
              <>
                {" "}
                <img src="/minus-cirlce.png" alt="" />
              </>
            ) : (
              <>
                <img src="/add-circle.png" alt="" />
              </>
            )}
          </div>
        </div>
        <div
          className={`flex justify-start overflow-hidden ease lg:max-w-[80%] px-2  duration-500 items-start ${
            active ? "max-h-[2000px]" : "max-h-0"
          }`}>
          <p className="text-base font-light text-[#939393]">{answer}</p>
        </div>
        <div className="w-full  lg:max-w-[80%] mt-4 h-[1px] rounded-lg bg-[#e7e7e7]"></div>
      </div>
    </>
  );
};

export default FaqTab;
