import { useAddress, useMetamask } from "@thirdweb-dev/react";

function Login() {
  const connectWithMetamask = useMetamask(); // use metamask connector automatically
  return (
    <div className="bg-[#091818] min-h-screen flex flex-col items-center justify-center text-center">
      <img className="rounded-full h-56 w-56 mb-10" src="" alt="image"></img>
      <h1 className="text-6xl text-white font-bold">CaishenKin Lottery</h1>
      <br></br>
      <h2 className="text-white">
        {" "}
        Get Started By Logging in with your Metamask{" "}
      </h2>

      <button
        onClick={connectWithMetamask}
        className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
      >
        Login with Metamask
      </button>
      {/* <ConnectWallet></ConnectWallet> */}
    </div>
  );
}

export default Login;
