import React from "react";

function Hero({ executeScroll }) {
  return (
    <div className="text-center uppercase min-h-screen flex flex-1 flex-col justify-center items-center ">
      <h1
        className="text-[16vh] text-shadow text-transparent 
      font-extrabold bg-gradient-to-r bg-clip-text from-[#9796f0] to-[#fbc7d4]
      relative  -mt-96"
      >
        Colors
      </h1>
      <div className=" flex flex-col gap-y-4 ">
        <a href="#mint">
          <button
            // onClick={executeScroll}
            className="px-10 py-2 bg-green-400 hover:bg-green-100 font-bold text-black border-2 border-black rounded-lg w-"
          >
            Mint
          </button>
        </a>
        <p className="text-sm">Mint Price: 0.01 test ETH</p>
      </div>

      {/* <div className="text-bold text-4xl tracking-wide flex gap-x-4 justify-center">
        Own your very own
        <p className="text-transparent font-extrabold bg-gradient-to-r bg-clip-text from-[#9796f0] to-[#fbc7d4]">
          color
        </p>
      </div> */}
      {/* <div>
        <h3 className="font-semibold mt-5 ">
          Below you will be able to mint your very own NFT using this smart
          contract I created!
        </h3>
        <h3 className="font-semibold  ">
          Come back each month to mint to see what your nft will look like!
        </h3>
      </div> */}
    </div>
  );
}

export default Hero;
