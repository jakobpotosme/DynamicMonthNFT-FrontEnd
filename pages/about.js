import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";

import graphImg from "../public/images/thegraph.svg";
import aboutImg from "../public/images/about.svg";
import solidityImg from "../public/images/solidity.svg";

import Image from "next/image";

function About() {
  return (
    <>
      <div className="flex flex-col p-20 mx-auto items-center justify-center gap-y-4">
        <div className=" inline-block text-center max-w-sm shadow-md rounded-md p-8 hover:bg-slate-50">
          <h1 className="text-xl font-semibold p-4">About</h1>
          <p>
            Site created in order to get more familiar with solidity smart
            contracts. Technologies involved include Next.js, React Moralis,
            Solidity, Hardhat, The Graph protocol and Pinata.
          </p>
          <div className="justify-center items-center flex mt-6">
            <Image src={aboutImg} width={30} height={30} />
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div className="  text-center max-w-sm shadow-md rounded-md p-8 hover:bg-slate-50 ">
            <h1 className="text-xl  font-semibold p-4">Contract Address</h1>
            <p className="p-4">
              Below is the Rinkeby Etherscan link where you can interact with
              the contract related to this project directly.
            </p>
            <p className="block truncate  hover:font-bold">
              <Link href="https://rinkeby.etherscan.io/address/0xc9cb8bd6bbce97db0402a96cb54e81456dd641e8">
                0xc9cB8bD6bBCe97db0402A96CB54E81456DD641e8
              </Link>
            </p>

            <div className="justify-center items-center flex mt-6">
              <Image src={solidityImg} width={30} height={30} />
            </div>
          </div>
          <div className="  text-center max-w-sm w-full shadow-md rounded-md p-8 hover:bg-slate-50 ">
            <h1 className="text-xl font-semibold p-4">The Graph Protocol</h1>
            <p className="p-4">
              Below is the Playground link where you can query information
              related to this project.
            </p>
            <p className="block truncate hover:font-bold ">
              <Link href="https://thegraph.com/studio/subgraph/dynamic-month-nfts/">
                Playground Link
              </Link>
            </p>

            <div className="justify-center items-center flex mt-6">
              <Image src={graphImg} width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
      <footer
        className="w-full text-center fixed left-0 bottom-0
            flex justify-center p-4 mt-10"
      >
        © 2022 Potosme.
      </footer>
    </>
  );
}

export default About;
