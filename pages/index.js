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
import NotEnoughToken from "../components/NotEnoughToken"
import lotteryABI from "../lottery/lotteryAbi.json";
import tokenABI from "../lottery/tokenABI.json"
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
  ConnectWallet,
  useTokenBalance,
  useToken,
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
  const [lotteryRound, setLotteryRound] = useState("");

  const address = useAddress(); // get connected wallet address
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  console.log("this is a contract", contract)

  // const { tokenContract, isLoading } = useContract(ADDRESS, CONTRACT_ABI);

  const {contract: tokenContract} = useContract(
    "0x95ac4ffA46C25dBCe18C53F5EdAf088b53c160D1",
    tokenABI
  );
  console.log("tokenNNN", tokenContract);

  const { data: tokenDetails } = useTokenBalance(tokenContract, address);
  console.log("token balance", tokenDetails);

  const tokenBalanceBal = tokenDetails?.displayValue
  const tokenSymbol = tokenDetails?.symbol
  const tokenName = tokenDetails?.name
  // console.log("token balance bal", tokenBalanceBal);

  const ticketUserCanBuy = 10 - userTickets;
  console.log(`ticket user can buy ${ticketUserCanBuy}`);

  const balance = useBalance();
  // console.log("balancennnn", balance.data)
  console.log(`here is your balance ${balance.data?.displayValue}`);
  const shortenBalanceDisplay = balance.data?.displayValue.slice(0, 5);

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

  const { data: lotteryId } = useContractRead(contract, "lotteryId");
  console.info("this is the lottery id", lotteryId);
  console.info(contract);

  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();

  //   const lotteryContract = new ethers.Contract(
  //     "0x7938C3fa703267C513DF63a0CcdC6c2EB41B585C",
  //     lotteryABI,
  //     signer
  //   );
  // const listenToEvent = () => {
  // 	try {
  // 		contract.on("lotteryHistoryTotal", (lotteryId, lastWinner, lastWinnerAmount, timeStamp, event) => {
  // 			let data = {
  // 				lotteryId,
  // 				lastWinner: lastWinner.toString(),
  // 				lastWinnerAmount: lastWinnerAmount.toString(),
  // 				timeStamp,
  // 				event
  // 			}
  // 			console.log("eventdata", data)
  // 		})
  // 	} catch (error) {
  // 		console.error(error)
  // 	}
  // }

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
    setLotteryRound(lotteryId.toString());
    // listenToEvent()
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
  // if (tokenBalanceBal < 100000) return <NotEnoughToken
  //   tokenBalanceBal={tokenBalanceBal}
  //   tokenSymbol={tokenSymbol}
  //   tokenName={tokenName}
  // ></NotEnoughToken>

  return (
    <Main address={address} balance={balance}>
      <Hero 
        handleClick={handleClick}
        expiration={expiration}
        remainingTickets={remainingTickets}
        quantity={quantity}
        userTickets={userTickets}
      />
      <PlaySection
        balance={balance}
        ticketPrice={ticketPrice}
        />
      <TicketNow
        pricePool={pricePool}
        balance={balance}
        shortenBalanceDisplay={shortenBalanceDisplay}
        quantity={quantity}
        setQuantity={setQuantity}
        ticketPrice={ticketPrice}
        ticketUserCanBuy={ticketUserCanBuy}
        remainingTickets={remainingTickets}
        userTickets={userTickets}
        handleClick={handleClick}
        expiration={expiration}
      />
      <FinishedRound
        address={address}
        balance={balance}
        lotteryRound={lotteryRound}
        userTickets={userTickets}
        contract={contract}
        winnings={winnings}
        onWithdrawWinnings={onWithdrawWinnings}
        lastWinner={lastWinner}
        lastWinnerAmount={lastWinnerAmount}
      />
      {/* <CriteriaSection /> */}
      <Footer />
    </Main>
  );
};

export default IndexPage;
