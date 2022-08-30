import React from "react";
import { useMoralis } from "react-moralis";
import { useQuery } from "@apollo/client";
import GET_MINTED_NFTS from "../../constants/subgraphQueries";
import NftBox from "./NftBox";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";

function RecentlyMinted() {
  const { isWeb3Enabled } = useMoralis();
  const { loading, error, data: mintedNfts } = useQuery(GET_MINTED_NFTS);

  const CarouselUI = ({ children }) => (
    <div className="border relative overflow-hidden  ">{children}</div>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <div className="text-center mt-32">
      <h1 className="uppercase text-2xl font-bold pb-4">Recently Minted</h1>
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
      </div>
    </div>
  );
}

export default RecentlyMinted;
