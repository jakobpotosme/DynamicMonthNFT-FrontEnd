import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";
import { useQuery } from "@apollo/client";
import GET_MINTED_NFTS from "../constants/subgraphQueries";
import NftBox from "../components/RecentlyMinted/NftBox";
import Mint from "../components/Mint";
import Carousel from "../components/Carousel";
import ImageSection from "../components/ImageSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewMint from "../components/Mint/index";
import RecentlyMinted from "../components/RecentlyMinted";
import FAQ from "../components/FAQ";
import { Button, useNotification } from "web3uikit";

export default function Home() {
  const {
    web3,
    enableWeb3,
    isWeb3Enabled,
    isWeb3EnableLoading,
    web3EnableError,
  } = useMoralis();

  const { loading, error, data: mintedNfts } = useQuery(GET_MINTED_NFTS);

  if (!isWeb3Enabled) {
    return (
      <div className="flex justify-center items-center">
        {" "}
        <Button
          theme="secondary"
          text="Enable Web3"
          onClick={() => enableWeb3()}
          // disabled={disabled}
        ></Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-full  flex flex-1 flex-col scroll-smooth ">
      {/* <Carousel /> */}
      {/* <ImageSection /> */}

      <Hero />
      <NewMint />
      <RecentlyMinted />
      <FAQ />
      {/* <FAQ /> */}

      {/* <h1 className="py-4 px-4 font-bold text-2xl pl-20 ">Recently Minted</h1>
      <div className="flex flex-wrap gap-2 pl-10 justify-center items-center">
        {isWeb3Enabled ? (
          loading || !mintedNfts ? (
            <p>Loading...</p>
          ) : (
            mintedNfts.nftMinteds.map((nft) => {
              // console.log(nft);
              const { id, minter, nftAddress, tokenId, month } = nft;

              return (
                <NftBox
                  key={`${nftAddress}${tokenId}`}
                  minter={minter}
                  nftAddress={nftAddress}
                  tokenId={tokenId}
                  month={month}
                />
              );
            })
          )
        ) : (
          <div>Web3 is not enabled</div>
        )}
      </div> */}

      {/* {isWeb3Enabled ? (
        <div>
          <Mint />
        </div>
      ) : null} */}
      <footer className="w-full text-center  p-4 mt-10">© 2022 Potosme.</footer>
    </div>
  );
}
