import { CareerBannerdataType } from "@/utils/types";
import React from "react";

const CareerBanner = ({ data }: CareerBannerdataType) => {
  return (
    <section
      className="h-screen w-full  flex items-center justify-center"
      style={{
        backgroundImage: `url(${data.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-background text-center p-4 sm:p-0">
        <div className="flex flex-col gap-10 py-4">
          <h1 className="text-heading1 tracking-tight text-yellow ">
            {data.title1}
            <br></br>
            {data.title2}
          </h1>
          <h2 className="text-subtitle1">
            {data.title3}
            <br />
            {data.title4}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;
