import Layout from "../dashboard/Layout";
import FaqTab from "./FaqTab";

const Faq = () => {
  const DATA = [
    {
      question: "What is CBT?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis dolore eu fugiat nulla pariatur",
    },
    {
      question: "What is CBT?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis dolore eu fugiat nulla pariatur",
    },
    {
      question: "What is CBT?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis dolore eu fugiat nulla pariatur",
    },
    {
      question: "What is CBT?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis dolore eu fugiat nulla pariatur",
    },
    {
      question: "What is CBT?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis dolore eu fugiat nulla pariatur",
    },
  ];
  return (
    <>
      <Layout>
        {" "}
        <div className="w-full mt-[6rem] lg:mt-[2rem]">
          <div className="justify-center flex-col  gap-2">
            <h2 className="headings text-center">
              Get answer of your all questions.
            </h2>
            <div className="flex mt-5 sm:mt-[40px] justify-start items-start flex-col w-full">
              {DATA.map((elem, idx) => {
                return <FaqTab {...elem} key={"faq" + idx} />;
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Faq;
