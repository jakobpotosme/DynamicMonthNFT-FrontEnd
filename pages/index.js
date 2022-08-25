import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";
import { useQuery } from "@apollo/client";
import GET_MINTED_NFTS from "../constants/subgraphQueries";
import NftBox from "../components/NftBox";
import Mint from "../components/Mint";
import Carousel from "../components/Carousel";
import ImageSection from "../components/ImageSection";
import Footer from "../components/Footer";

export default function Home() {
  const { isWeb3Enabled } = useMoralis();

  const { loading, error, data: mintedNfts } = useQuery(GET_MINTED_NFTS);

  return (
    <div className="container mx-auto">
      <Carousel />
      {/* <ImageSection /> */}
      <h1 className="py-4 px-4 font-bold text-2xl pl-20 ">Recently Minted</h1>
      <div className="flex flex-wrap gap-2 pl-10">
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
      </div>
      {/* {isWeb3Enabled ? (
        <div>
          <Mint />
        </div>
      ) : null} */}
      <footer className="w-full text-center  p-4 mt-10">© 2022 Potosme.</footer>
    </div>
  );
}
