import React from "react";
import { useEffect, useState } from "react";
import { useWeb3Contract, useMoralis, getChain } from "react-moralis";
import networkMapping from "../constants/networkMapping.json";
import nftAbi from "../constants/DynamicNft.json";

import { Button, useNotification } from "web3uikit";
import { utils, ethers } from "ethers";

export default function Mint() {
  const dispatch = useNotification();

  const [disabled, setDisabled] = useState(false);

  const { chainId, account } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  const nftContractAddress = networkMapping[chainString].DynamicNft[0];

  let value = utils.parseUnits("0.01", "18");

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner(account);
  const contract_rw = new ethers.Contract(nftContractAddress, nftAbi, signer);

  const handleMintSuccess = async (tx) => {
    await tx.wait(1);
    setDisabled(false);
    dispatch({
      type: "success",
      message: "successful transaction",
      title: "NFT minted - check your wallet",
      position: "bottomR",
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
    <div>
      <Button
        theme="primary"
        text="Mint"
        onClick={mintNft}
        disabled={disabled}
      ></Button>
    </div>
  );
}
