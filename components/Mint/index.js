import React from "react";
import { useEffect, useState } from "react";
import { useWeb3Contract, useMoralis, getChain } from "react-moralis";
import networkMapping from "../../constants/networkMapping.json";
import nftAbi from "../../constants/DynamicNft.json";

import { Button, useNotification } from "web3uikit";
import { utils, ethers } from "ethers";
import gif from "../../public/images/colors.gif";
// import gif from "../../public/images/solidity.svg";
import Image from "next/image";

function NewMint({}) {
  const {
    web3,
    enableWeb3,
    isWeb3Enabled,
    isWeb3EnableLoading,
    web3EnableError,
  } = useMoralis();
  const dispatch = useNotification();

  const [disabled, setDisabled] = useState(false);

  const { chainId, account } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  const nftContractAddress = networkMapping[chainString].DynamicNft[0];

  let contract_rw;
  let value = utils.parseUnits("0.01", "18");

  // if (isWeb3Enabled) {
  //   const provider = new ethers.providers.Web3Provider(ethereum);

  //   const signer = provider.getSigner(account);
  //   contract_rw = new ethers.Contract(nftContractAddress, nftAbi, signer);
  // }

  const provider = new ethers.providers.Web3Provider(ethereum);

  const signer = provider.getSigner(account);
  contract_rw = new ethers.Contract(nftContractAddress, nftAbi, signer);

  const handleMintSuccess = async (tx) => {
    await tx.wait(1);
    setDisabled(false);
    dispatch({
      type: "success",
      message: "successful transaction",
      title: "NFT minted - check your wallet",
      position: "topR",
    });
  };

  const mintNft = async () => {
    try {
      setDisabled(true);
      const gasEstimated = await contract_rw.estimateGas.mintNft({
        value: ethers.utils.parseEther("0.01"),
      });

      function gasMargin(estimate, multiplyer) {
        return estimate * multiplyer;
      }

      const tx = await contract_rw.mintNft({
        value: ethers.utils.parseEther("0.01"),
        gasLimit: Math.ceil(gasMargin(gasEstimated, 1.1)),
      });

      handleMintSuccess(tx);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="mint"
      className=" w-full max-w-screen rounded-lg  p-5 flex flex-col justify-center mx-auto border-2 shadow-lg border-black  text-white 
      bg-gradient-to-r from-[#485563] to-[#29323c]"
    >
      <div
        name="mintDescription"
        className="flex-1 flex flex-col justify-center items-center "
      >
        <span className="rounded-lg ">
          <Image
            src={gif}
            width={300}
            height={320}
            objectFit="cover"
            className="rounded-lg  "
          />
        </span>
        <h1 className="uppercase font-bold text-4xl  pt-2">Get your color</h1>
        <p className="max-w-xs text-start pt-2">
          This is an NFT collection of colors created by Me. They are
          constructed based on the colors that correspond best to each month.
        </p>
      </div>

      <div
        name="mintButton"
        className="flex-1 flex justify-center items-center pt-4"
      >
        {/* {!isWeb3Enabled && (
          <Button
            theme="secondary"
            text="Enable Web3"
            onClick={() => enableWeb3()}
            disabled={disabled}
          ></Button>
        )} */}

        {nftContractAddress !== "0x000" ? (
          <>
            {/* <Button
              theme="primary"
              text="Mint"
              onClick={mintNft}
              disabled={disabled}
              size="large"
            ></Button> */}
            <button
              onClick={() => {
                mintNft();
              }}
              disabled={disabled}
              className={` ${
                disabled ? "bg-green-100 " : "bg-green-300 hover:bg-green-400"
              }  uppercase px-6 py-2 max-w-sm rounded-lg text-xl text-black  font-bold`}
            >
              Mint Color
            </button>
          </>
        ) : (
          <div className="mr-4 p-6 font-bold">Switch to Goerli Network</div>
        )}
      </div>
    </div>
  );
}

export default NewMint;
