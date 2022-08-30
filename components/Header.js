import React from "react";
import { ConnectButton } from "web3uikit";
import Link from "next/link";
import Mint from "./Mint";
import { useMoralis } from "react-moralis";

export default function Header() {
  const { account } = useMoralis();
  return (
    <nav className="py-5  flex flex-row justify-center items-center ">
      <h1 className="py-4 px-4 font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#ECE9E6] to-[#FFFFFF]">
        Dynamic Month NFT
      </h1>
      {/* <div className="flex flex-row items-center ">
        <Link href="/">
          <a className="mr-4 p-6 font-bold">Home</a>
        </Link>
        <Link href="/about">
          <a className="mr-4 p-6 font-bold">About</a>
        </Link>

        {account ? <Mint /> : null}

        <ConnectButton moralisAuth={false} />
      </div> */}
    </nav>
  );
  // return (
  //   <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
  //     <h1 className="py-4 px-4 font-bold text-3xl">Dynamic Month NFT</h1>
  //     <div className="flex flex-row items-center ">
  //       <Link href="/">
  //         <a className="mr-4 p-6 font-bold">Home</a>
  //       </Link>
  //       <Link href="/about">
  //         <a className="mr-4 p-6 font-bold">About</a>
  //       </Link>

  //       {account ? <Mint /> : null}

  //       <ConnectButton moralisAuth={false} />
  //     </div>
  //   </nav>
  // );
}
