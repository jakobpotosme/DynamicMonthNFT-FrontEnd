import React from "react";
import Link from "next/link";

function FAQ() {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center pt-56  ">
      <h1 className="uppercase text-3xl font-bold ">FAQ</h1>

      <div name="tech1">
        <h1 className="font-semibold">Why Colors?</h1>
        <p className="max-w-3xl pt-2">
          Simple and easy to use. Project's primary purpose was to help me get
          more familiar with solidity smart contracts. Decided to extend it a
          little further by creating this site to showcase it.
        </p>
      </div>

      <div name="tech2">
        <h1 className="font-semibold">What technologies were involved?</h1>
        <p className="max-w-3xl pt-2">
          Technologies used throughout this project include Next.js, React
          Moralis, Solidity, Hardhat, The Graph Protocol and Pinata.
        </p>
      </div>
      <div name="tech3 ">
        <h1 className="font-semibold">
          Where can I review the smart contract?
        </h1>
        <p className="max-w-3xl pt-2">
          Below is the Rinkeby Etherscan link where you can interact with the
          contract related to this project directly{" "}
          <Link href="https://rinkeby.etherscan.io/address/0xc9cb8bd6bbce97db0402a96cb54e81456dd641e8">
            <p className="hover:text-green-400 w-20">Click here.</p>
          </Link>
        </p>
      </div>
      <div name="tech4 ">
        <h1 className="font-semibold">
          How are you getting the recently minted data?
        </h1>
        <p className="max-w-3xl pt-2">
          The data is being queried from a subgraph I created on the Graph
          protocol. It is listening for events that triggered by the contract
          and is acting accordingly. You can mess around with it yourself
          <Link href="https://thegraph.com/studio/subgraph/dynamic-month-nfts/">
            <p className="hover:text-green-400 w-10"> here.</p>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FAQ;
