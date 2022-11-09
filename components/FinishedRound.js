import React, { useState, useEffect } from "react";
import { useContract } from "@thirdweb-dev/react";
import { Tab } from "@headlessui/react";
import { ethers } from "ethers";
import lotteryABI from "../lottery/lotteryAbi.json";
import { ThirdwebSdk } from "@thirdweb-dev/sdk";
// import { readFileSync } from "fs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FinishedRound = ({
  contract,
  address,
  balance,
  lotteryRound,
  userTickets,
}) => {
  const [data, setData] = useState([]);

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();

  // const lotteryContract = new ethers.Contract(
  //   "0x7938C3fa703267C513DF63a0CcdC6c2EB41B585C",
  //   lotteryABI,
  //   signer
  // );
  // console.log("lotteryContract", lotteryContract);

 contract.events.addEventListener("lotteryHistoryTotal", (event) => {
   console.log("event", event);
 });

  useEffect(() => {}, [balance, address]);

  return (
    <div className="relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-lg sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 text-center sm:mb-0">
          <h2 className="mb-6  text-3xl self-stretch relative tracking-[-0.02em] leading-[60px] font-semibold inline-block text-white sm:text-6xl md:mx-auto">
            Rounds
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
                      : "text-gray-800 hover:opacity-50 hover:text-primary"
                  )
                }
              >
                {/* All history */}
                Round details
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
                      : "text-gray-800 hover:opacity-50 hover:text-primary"
                  )
                }
              >
                All history
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
                      : "text-gray-800 hover:opacity-50 hover:text-primary"
                  )
                }
              >
                Your history
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2 w-full flex flex-col justify-center items-center">
              <Tab.Panel
                className={classNames(
                  "relative rounded-[24px] [background:linear-gradient(139.38deg,_rgba(65,_70,_83,_0.4),_rgba(56,_61,_74,_0.1))] shadow-[0px_4px_24px_-1px_rgba(21,_24,_32,_0.2)] [backdrop-filter:blur(40px)] w-full sm:w-[750px] h-[300px] flex flex-col p-[40px_32px] box-border items-start justify-start gap-[40px] text-left"
                )}
              >
                <div className="w-full border-b border-gray-100  pb-4">
                  <div className="w-full flex justify-between items-start ">
                    <div className="items-start ">
                      <span className="inline-block font-semibold text-lg sm:text-2xl mr-3">
                        Round
                      </span>
                      <span className="rounded-full [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] px-3 py-3 sm:py-3 sm:px-4 sm:text-lg text-sm font-semibold text-white w-[25px] sm:w-[48px] h-[25px] sm:h-[48px]">
                        {lotteryRound}
                      </span>
                    </div>
                  </div>
                  {/* <div className="mt-3 text-sm sm:text-base font-normal">
                    Drawn Nov 8, 2022, 3:00pm
                  </div> */}
                </div>
                <div className="my-5">
                  <div className="flex flex-col sm:flex-row flex-wrap  justify-center  items-center sm:justify-start">
                    {userTickets > 0 ? (
                      <div className="stats">
                        <p className="text-lg mb-2">
                          You have {userTickets} Tickets in this draw
                        </p>
                        <div className="flex max-w-sm flex-wrap gap-x-2 gap-y-2">
                          {Array(userTickets)
                            .fill("")
                            .map((_, index) => (
                              <p
                                key={index}
                                className="rounded-full [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] px-3 py-2 sm:py-3 sm:px-4  sm:text-lg text-sm font-semibold text-white w-[25px] sm:w-[48px] h-[25px] sm:h-[48px] mr-3"
                              >
                                {index + 1}
                              </p>
                            ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="text-align text-lg mb-2">
                          You have {userTickets} Tickets in this draw
                        </p>
                      </div>
                    )}

                    {/* <div>
                      <span className="rounded-full [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] px-3 py-2 sm:py-3 sm:px-4  sm:text-lg text-sm font-semibold text-white w-[25px] sm:w-[48px] h-[25px] sm:h-[48px] mr-3">
                        9
                      </span>
                    </div> */}
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "relative rounded-[24px] [background:linear-gradient(139.38deg,_rgba(65,_70,_83,_0.4),_rgba(56,_61,_74,_0.1))] shadow-[0px_4px_24px_-1px_rgba(21,_24,_32,_0.2)] [backdrop-filter:blur(40px)] w-full sm:w-[750px] h-[528px] flex flex-col p-[40px_32px] box-border items-start justify-start gap-[40px] text-left"
                )}
              >
                <div className="w-full border-b border-gray-100  pb-4">
                  <div className="w-full flex justify-between items-start ">
                    <div className="items-start ">
                      <span className="inline-block font-semibold text-lg sm:text-2xl mr-3">
                        Round
                      </span>
                      <span className="rounded-full [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] px-3 py-3 sm:py-3 sm:px-4 sm:text-lg text-sm font-semibold text-white w-[25px] sm:w-[48px] h-[25px] sm:h-[48px]">
                        {lotteryRound}
                      </span>
                    </div>
                    <div className="items-end">
                      <nav aria-label="Page navigation example">
                        <ul className="inline-flex text-sm -space-x-px">
                          <li>
                            <a
                              href="#"
                              className="inline-flex items-center py-2 px-2 ml-0 mt-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                            >
                              <svg
                                aria-hidden="true"
                                className="mr-2 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="hidden sm:inline-flex">
                                Previous
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="inline-flex items-center py-[8px] sm:py-[9px] px-3 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="items-center py-[8px] sm:py-[9px] px-3 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 hidden sm:inline-flex"
                            >
                              2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="items-center py-[8px] sm:py-[9px] px-3 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 hidden sm:inline-flex"
                            >
                              3
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="inline-flex items-center py-2 px-2 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                            >
                              <span className="hidden sm:inline-flex">
                                Next
                              </span>
                              <svg
                                aria-hidden="true"
                                className="ml-2 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="mt-3 text-sm sm:text-base font-normal">
                    Drawn Nov 8, 2022, 3:00pm
                  </div>
                </div>
                <div className="my-5">
                  <div className="flex flex-col sm:flex-row flex-wrap  justify-center  items-center sm:justify-start">
                    <div className="mb-5 sm:mr-5 font-bold text-2xl">
                      Ticket Number
                    </div>
                    <div>
                      <span className="rounded-full [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] px-3 py-2 sm:py-3 sm:px-4  sm:text-lg text-sm font-semibold text-white w-[25px] sm:w-[48px] h-[25px] sm:h-[48px] mr-3">
                        9
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between ">
                  <div className="w-full sm:w-[250px] items-start">
                    <h3 className="text-xl font-semibold leading-5 ">Gold</h3>
                    <h4 className="text-base sm:text-xl my-3 font-semibold  [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ">
                      0.070 BNB
                    </h4>
                    <p className="text-lg font-semibold">$20</p>
                  </div>
                  <div className="w-full sm:w-[250px] items-start">
                    <h3 className="text-xl font-semibold leading-5 ">Silver</h3>
                    <h4 className="text-base sm:text-xl my-3 font-semibold  [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ">
                      0.035 BNB
                    </h4>
                    <p className="text-lg font-semibold">$10</p>
                  </div>
                  <div className="w-full sm:w-[250px] items-start">
                    <h3 className="text-xl font-semibold leading-5 ">Bronze</h3>
                    <h4 className="text-base sm:text-xl my-3 font-semibold  [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ">
                      0.018 BNB
                    </h4>
                    <p className="text-lg font-semibold">$5</p>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <div className="inline-flex ">
                    <span className="text-xl font-medium mr-3">Hide</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 text-gray-100"
                      fill="currentColor"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
                    </svg>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "relative rounded-[24px] [background:linear-gradient(139.38deg,_rgba(65,_70,_83,_0.4),_rgba(56,_61,_74,_0.1))] shadow-[0px_4px_24px_-1px_rgba(21,_24,_32,_0.2)] [backdrop-filter:blur(40px)] w-full sm:w-[750px] h-[528px] flex flex-col p-[40px_32px] box-border items-start justify-start gap-[40px] text-left"
                )}
              >
                <div className="w-full flex flex-col justify-center items-center text-center pb-4">
                  <h2 className="text-xl font-semibold leading-5">
                    Recent Transactions
                  </h2>
                  <div className="my-10">
                    <p>No recent transactions</p>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default FinishedRound;
