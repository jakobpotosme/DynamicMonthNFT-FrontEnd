import { gql } from "@apollo/client";

const GET_MINTED_NFTS = gql`
  {
    nftMinteds(first: 6, orderBy: tokenId, orderDirection: desc) {
      id
      month
      minter
      nftAddress
      tokenId
    }
  }
`;

export default GET_MINTED_NFTS;
