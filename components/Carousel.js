import React from "react";
import Image from "next/image";
import img_1 from "../public/images/first.png";
import img_2 from "../public/images/second.png";

export default function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="text-center flex flex-col gap-y-4 pt-5">
          <h1 className="text-3xl font-semibold">
            Possible colors that can be minted for only 0.01 ETH!
          </h1>
          <h3 className="text-2xl font-semibold">
            Come back each month to mint a different color!
          </h3>
        </div>
        <div class="carousel-item active relative float-left w-full">
          <Image
            src={img_1}
            width={2000}
            height={500}
            className="block w-full"
            alt="Months 1-6"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <Image
            src={img_2}
            width={2000}
            height={500}
            className="block w-full"
            alt="Months 7-12"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
