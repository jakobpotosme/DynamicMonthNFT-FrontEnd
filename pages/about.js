import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="flex items-center justify-center pt-20  ">
        <div className="text-center max-w-lg bg-slate-200 rounded-lg  ">
          <h1 className="text-4xl font-bold p-5  w-full rounded-t-lg ">
            About
          </h1>
          <p className="p-4">
            Site created in order to get more familiar with solidity smart
            contracts. Technologies involved include Next.js, React Moralis,
            Solidity, Hardhat, The Graph protocol and Pinata.
          </p>

          <p className="p-4 ">
            <Link href="https://rinkeby.etherscan.io/address/0xc9cb8bd6bbce97db0402a96cb54e81456dd641e8">
              <a>
                Contract Address: 0xc9cB8bD6bBCe97db0402A96CB54E81456DD641e8
              </a>
            </Link>
          </p>
          <p className="p-4">
            <Link href="https://thegraph.com/studio/subgraph/dynamic-month-nfts/">
              <a className=" ">The Graph Playground Link</a>
            </Link>
          </p>

          <p className="p-4">P.S. Styling was not a priority in this project</p>
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
