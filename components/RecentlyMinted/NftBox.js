import React from "react";

import { useEffect, useState } from "react";
import { useWeb3Contract, useMoralis, useEnsAddress } from "react-moralis";

import nftAbi from "../../constants/DynamicNft.json";
import Image from "next/image";
import { Card, useNotification } from "web3uikit";
import { ethers } from "ethers";

const truncateStr = (fullStr, strLen) => {
  if (fullStr.length <= strLen) return fullStr;

  const seperator = "...";
  const seperatorLength = seperator.length;
  const charsToShow = strLen - seperatorLength;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.ceil(charsToShow / 2);
  return (
    fullStr.substring(0, frontChars) +
    seperator +
    fullStr.substring(fullStr.length - backChars)
  );
};

export default function NftBox({ minter, nftAddress, tokenId, month }) {
  const { isWeb3Enabled, account } = useMoralis();

  const [imageURI, setImageURI] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenDescription, setTokenDescription] = useState("");

  const { runContractFunction: getMonthTokenUris } = useWeb3Contract({
    abi: nftAbi,
    contractAddress: nftAddress,
    functionName: "getMonthTokenUris",
    params: {
      index: month,
    },
  });

  async function updateUI() {
    const tokenUri = await getMonthTokenUris();
    // console.log(`Token URI is : ${tokenUri}`);

    if (tokenUri) {
      const requestURL = tokenUri.replace("ipfs://", "https://ipfs.io/ipfs/");
      const tokenUriResponse = await (await fetch(requestURL)).json();
      const imageURI = tokenUriResponse.image;
      const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");
      setImageURI(imageURIURL);
      setTokenName(tokenUriResponse.name + ` #` + tokenId);
      setTokenDescription(tokenUriResponse.description);
    }
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
    }
  }, [isWeb3Enabled]);

  const isOwnedByUser = minter === account || minter === undefined;
  const formattedSellerAddress = isOwnedByUser
    ? "you"
    : truncateStr(minter || "", 15);

  return (
    <div className="p-2">
      {imageURI ? (
        <div>
          <div title={tokenName} description={tokenDescription}>
            <div className="p-2 flex flex-col  text-center items-center gap-2 ">
              <Image
                loader={() => imageURI}
                src={imageURI}
                height="200"
                width="200"
                alt="nft_image"
                className="rounded-lg"
              ></Image>
              <div>
                <p className="italic text-sm">
                  Owned by {formattedSellerAddress}
                </p>
                <p className=" text-sm">{tokenName}</p>
                {/* <p className=" text-sm">{tokenDescription}</p> */}
              </div>
            </div>
          </div>
          {/* <Card title={tokenName} description={tokenDescription}>
            <div className="p-2 flex flex-col items-center gap-2 ">
              <Image
                loader={() => imageURI}
                src={imageURI}
                height="200"
                width="200"
                alt="nft_image"
                className="rounded"
              ></Image>
              <div>
                <p className="italic text-sm">
                  Owned by {formattedSellerAddress}
                </p>
              </div>
            </div>
          </Card> */}
        </div>
      ) : (
        <div> Loading... </div>
      )}
    </div>
  );
}
