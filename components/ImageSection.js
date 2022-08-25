import React from "react";
import Image from "next/image";

function ImageSection() {
  return (
    <section class="overflow-hidden text-gray-700 ">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div className="text-center flex flex-col gap-y-4 pb-10">
          <h1 className="text-3xl font-semibold">
            Possible colors that can be minted for only 0.01 ETH!
          </h1>
          <h3 className="text-2xl font-semibold">
            Come back each month to mint a different color!
          </h3>
        </div>

        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <Image
                src={
                  "https://ipfs.io/ipfs/QmYCiY1ofcpu6wJF9ADYvm8ZcZ9dC2dydBmXRx1qhp9etv"
                }
                className="rounded-2xl"
                width={350}
                height={200}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <Image
                src={
                  "https://ipfs.io/ipfs/QmVYQ5RG3BzUSFzTCc35FRJRtjKuSNeunhSU2Kvn5BFBAs"
                }
                className="rounded-2xl"
                width={350}
                height={200}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <Image
                src={
                  "https://ipfs.io/ipfs/QmSDkYeCjNByUiPUnzRMkcmthntuYDgB51JSy488nn4UTe"
                }
                className="rounded-2xl"
                width={350}
                height={200}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <Image
                src={
                  "https://ipfs.io/ipfs/QmNdeX9ZBfR3nuuE2qzZpFESoL2kX6h2VBet9Z61WTFmDR"
                }
                width={350}
                height={200}
                className="rounded-2xl"
                alt="Wild Landscape"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <Image
                src={
                  "https://ipfs.io/ipfs/QmdoAxGq4tXafrxDxGrGgbJyS9h63QLoZipyp1ZcAdi4Eh"
                }
                className="rounded-2xl"
                width={350}
                height={200}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <Image
                src={
                  "https://ipfs.io/ipfs/QmSv6EHb36Dpn3K95Uw83nbJgNnJjgstFszP9ZR6fiYRHm"
                }
                className="rounded-2xl"
                width={350}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageSection;
