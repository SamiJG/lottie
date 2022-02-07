import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  CurrencyPoundIcon,
  HeartIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/solid";

export type Home = {
  homeId?: string;
  name: string;
  imagePath: string;
  location: string;
  cqcRating: string;
  pricesFrom: number;
  greenerChoice: boolean;
  region: string;
  county: string;
  listingUrl: string;
  lat: number;
  lon: number;
  pricing: {
    permanent: {
      residential: string;
      residentialDementia: string;
      nursing: string;
      nursingDementia: string;
    };
    respite: {
      residential: string;
      residentialDementia: string;
      nursing: string;
      nursingDementia: string;
    };
  };
};

interface HomeOverviewProps {
  home: Home;
}

export const HomeOverview: FC<HomeOverviewProps> = ({ home }) => {
  const { name, imagePath, county, cqcRating, pricesFrom, listingUrl } = home;
  return (
    <section className="flex flex-col md:w-1/2 md:pr-8 pb-8">
      <div className="min-h-[220px] relative mb-5 rounded hover:scale-105">
        <Image
          src={`https://lottie-boh-assets.s3.eu-west-2.amazonaws.com/${imagePath}`}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        ></Image>
      </div>
      <div className="min-h-[120px]">
        <div className="flex flex-row justify-between text-xl mb-2 font-bold">
          <h4>{name}</h4>
          <p>
            <PhoneIcon className="h-5 w-5 inline mr-1" />
            01865 895526
          </p>
        </div>
        <p className="text-xs mb-1">{county}, OX2 9QF - Care UK</p>
        <div className="flex flex-row justify-between text-sm">
          <div>
            <p className="mb-1">
              <HeartIcon className="h-4 w-4 text-turquoise inline mr-1" />
              <b>Care Home Type: </b>Residential
            </p>
            <p className="mb-1">
              <StarIcon className="h-4 w-4 text-turquoise inline mr-1" />
              <b>{cqcRating} </b>CQC Rating
            </p>
            <p className="mb-1">
              <CurrencyPoundIcon className="h-4 w-4 text-turquoise inline mr-1" />
              from <b>£{pricesFrom}</b> weekly
            </p>
          </div>
          <Link href={"/"}>
            <a className="w-1/4 flex justify-center items-center bg-lottiePink font-bold rounded-2xl p-4 text-center hover:saturate-150">
              {" More info >"}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
