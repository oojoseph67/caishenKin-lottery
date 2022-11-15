import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { ethers } from "ethers";
import lotteryABI from "../lottery/lotteryAbi.json";
import { ThirdwebSdk } from "@thirdweb-dev/sdk";
// import { readFileSync } from "fs";
import { shortenAddress } from "../utils/shortenAddress"
import Marquee from "react-fast-marquee";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FinishedRound = ({
  // contract,
  address,
  balance,
  lotteryRound,
  userTickets,
  winnings,
  onWithdrawWinnings,
  lastWinner,
  lastWinnerAmount
}) => {
  const [data, setData] = useState([]);
  const [timeStamp, getTimeStamp] = useState("")

  const nativeTokenDetails = balance.data;
  const nativeTokenBalance = nativeTokenDetails?.displayValue;
  const nativeTokenName = nativeTokenDetails?.name;
  const nativeTokenSymbol = nativeTokenDetails?.symbol;
  const nativeTokenDecimals = nativeTokenDetails?.decimals;
  // console.log("nativeTokenDetails", nativeTokenDetails);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const lotteryContract = new ethers.Contract(
    // "0x223bcd7CBE4BC5b98d2038DC01dB79A3D8b1E2B9",
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS,
    lotteryABI,
    signer
  );
  // console.log("lotteryContract", lotteryContract);

  // console.log("data", data);

  useEffect(() => {
    async function getData() {
      const tx = await lotteryContract.filters.lotteryHistoryTotal();
      const txData = await lotteryContract.queryFilter(tx);
      setData(txData);
    }
    getData();
    async function getTime() {
      const time = await lotteryContract.timeStamp();
      getTimeStamp(time);
    }
  }, [balance, address]);

  return (
    <div className="relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <br></br>
      <br></br>
      <div className="max-w-lg sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 text-center sm:mb-0">
          <h2 className="mb-6  text-3xl self-stretch relative tracking-[-0.02em] leading-[60px] font-semibold inline-block text-white sm:text-6xl md:mx-auto">
            Rounds
          </h2>
        </div>
      </div>

      <Marquee className="bg-[#000000] p-5 mb-5" gradient={false} speed={100}>
        <div className="flex space-x-2 mx-18">
          <h4 className="text-white font-bold">
            {/* Last Winner: {lastWinner?.toString()} */}
            Last Winner: {lastWinner?.substring(0, 5)}...
            {lastWinner?.substring(lastWinner.length, lastWinner.length - 5)}
          </h4>
          <h4 className="text-white font-bold">
            Previous Winnings:{" "}
            {ethers.utils.formatEther(lastWinnerAmount.toString())}
            {""}
            {nativeTokenSymbol}
          </h4>
        </div>
      </Marquee>

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
                  "relative rounded-[24px] [background:linear-gradient(139.38deg,_rgba(65,_70,_83,_0.4),_rgba(56,_61,_74,_0.1))] shadow-[0px_4px_24px_-1px_rgba(21,_24,_32,_0.2)] [backdrop-filter:blur(40px)] w-full sm:w-[500px] h-[300px] flex flex-col p-[40px_32px] box-border items-start justify-start gap-[40px] text-left"
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
                  "relative rounded-[24px] [background:linear-gradient(139.38deg,_rgba(65,_70,_83,_0.4),_rgba(56,_61,_74,_0.1))] shadow-[0px_4px_24px_-1px_rgba(21,_24,_32,_0.2)] [backdrop-filter:blur(40px)] w-full sm:w-[750px] h-[450px] flex flex-col p-[40px_32px] box-border items-start justify-start gap-[40px] text-left"
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
                    {/* <div className="items-end">
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
                    </div> */}
                  </div>
                  <div className="mt-3 text-sm sm:text-base font-normal">
                    Last draw {
                      timeStamp == "" ? (
                        <>
                          <span className="text-gray-400 text-sm"><b>Loading...</b></span>
                        </>
                      ) : (
                        <>
                        {timeStamp}
                        </>
                      )
                    }
                  </div>
                </div>
                <div className="my-5">
                  <div className="flex flex-col sm:flex-row flex-wrap text-sm justify-center text-center items-center sm:justify-start">
                    <table className="shadow-lg border-collapse">
                      <thead>
                        <tr>
                          <th class="bg-blue-100 border text-left px-8 py-4"> Round </th>
                          <th class="bg-blue-100 border text-left px-8 py-4"> Winner </th>
                          <th class="bg-blue-100 border text-left px-8 py-4"> Prize </th>
                          <th class="bg-blue-100 border text-left px-8 py-4"> Time </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((e) => {
                          return (
                            <tr key={e.args.lotteryId.toString()}>
                              <td class="border px-8 py-4">{e.args.lotteryId.toString()}</td>
                              <td class="border px-8 py-4">{shortenAddress(e.args.lastWinner)}</td>
                              <td class="border px-8 py-4">
                                {ethers.utils.formatEther(
                                  e.args.lastWinnerAmount.toString()
                                )}
                                {""}
                                {nativeTokenSymbol}
                              </td>
                              <td class="border px-8 py-4">
                                {new Date(
                                  e.args.timeStamp.toNumber() * 1000
                                ).toLocaleString()}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "relative rounded-[24px] [background:linear-gradient(139.38deg,_rgba(65,_70,_83,_0.4),_rgba(56,_61,_74,_0.1))] shadow-[0px_4px_24px_-1px_rgba(21,_24,_32,_0.2)] [backdrop-filter:blur(40px)] w-full sm:w-[500px] h-[320px] flex flex-col p-[40px_32px] box-border items-start justify-start gap-[40px] text-left"
                )}
              >
                <div className="w-full flex flex-col justify-center items-center text-center pb-4">
                  <h2 className="text-xl font-semibold leading-5">
                    Recent Transactions
                  </h2>
                  <div className="my-10">
                    {winnings > 0 ? (
                      <>
                        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-5">
                          <p className="font-bold">
                            Winner Winner Chicken Dinner!
                          </p>
                          <p>
                            Total Winnings:{" "}
                            <p>
                              {ethers.utils.formatEther(winnings.toString())}{" "}
                              {nativeTokenSymbol}
                            </p>
                          </p>
                          <br></br>
                          <Link
                            href="/"
                            className="rounded-[8px] [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row p-[10px_18px] box-border items-center justify-center cursor-pointer hover:opacity-50"
                            aria-label="Withdraw"
                            onClick={onWithdrawWinnings}
                            title="Withdraw"
                          >
                            Withdraw
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>No winnings yet but don`t give up keep playing</>
                    )}
                    {/* <p>No recent transactions</p> */}
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};;

export default FinishedRound;
