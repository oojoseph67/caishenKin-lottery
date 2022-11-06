import React from "react";
import CriteriaSection from "../components/CriteriaSection";
import FinishedRound from "../components/FinishedRound";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main";
import PlaySection from "../components/PlaySection";
import TicketNow from "../components/TicketNow";
import Login from "../components/Login";
import Loading from "../components/Loading";
import Loader from "../components/Loader";
import {
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  useContractData,
  useContractCall,
  useContractRead,
  useContractWrite,
  useBalance,
} from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
// import CountdownTimer from "../components/countdownTimer";
import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";
// import AdminControls from "../components/adminControls";

const IndexPage = () => {
  const [userTickets, setUserTickets] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const address = useAddress(); // get connected wallet address
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  const ticketUserCanBuy = 10 - userTickets;
  console.log(`ticket user can buy ${ticketUserCanBuy}`);

  const balance = useBalance();
  console.log(`here is your balance ${balance.data?.displayValue}`);

  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: pricePool } = useContractRead(contract, "CurrentWinningReward");

  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
  const { data: ticketCommission } = useContractRead(
    contract,
    "ticketCommission"
  );

  const { data: expiration } = useContractRead(contract, "expiration");

  const { mutateAsync: BuyTickets } = useContractWrite(contract, "BuyTickets");
  const { data: tickets } = useContractRead(contract, "getTickets");

  const { data: winnings } = useContractRead(
    contract,
    "getWinningsForAddress",
    address
  );
  const { mutateAsync: withdrawWinnings } = useContractWrite(
    contract,
    "WithdrawWinnings"
  );

  const { data: lastWinner } = useContractRead(contract, "lastWinner");
  const { data: lastWinnerAmount } = useContractRead(
    contract,
    "lastWinnerAmount"
  );

  const { data: isLotteryOperator } = useContractRead(
    contract,
    "lotteryOperator"
  );

  useEffect(() => {
    if (!tickets) return;

    const totalTickets = tickets;
    // console.log(`bitch ${totalTickets}`)
    const noOfUserTickets = totalTickets.reduce(
      (total, ticketAddress) => (ticketAddress === address ? total + 1 : total),
      0
    );
    // console.log(`bitch ${noOfUserTickets}`);
    setUserTickets(noOfUserTickets);
  }, [tickets, address]);

  console.log(`user tickets ${userTickets}`);
  console.log(`user address ${address}`);

  // buying ticket function
  const handleClick = async () => {
    if (!ticketPrice) return;
    const notification = toast.loading("Buying your tickets");
    try {
      const data = await BuyTickets([
        {
          value: ethers.utils.parseEther(
            (
              Number(ethers.utils.formatEther(ticketPrice)) * quantity
            ).toString()
          ),
        },
      ]);

      toast.success("Tickets purchased successfully", {
        id: notification,
      });
      console.info("contract call success", data);
    } catch (err) {
      toast.error("Whoops something went wrong!", {
        id: notification,
      });
      console.info("contract call failure", err);
    }
  };

  // withdrawing commission function
  const onWithdrawWinnings = async () => {
    const notification = toast.loading("Withdrawing winnings...");
    try {
      const data = await withdrawWinnings([{}]);

      toast.success("Winnings withdraw successfully!", {
        id: notification,
      });
    } catch (err) {
      toast.error("Whoops something went wrong!", {
        id: notification,
      });
      console.error("contract call failure", err);
    }
  };

  if (isLoading) return <Loading></Loading>;
  if (!address) return <Login></Login>;
  
	return (
		<Main
			address={address}
		>
			<Hero />
			<PlaySection />
			<TicketNow />
			<FinishedRound />
			<CriteriaSection />
			<Footer />
		</Main>
	);
};

export default IndexPage;
