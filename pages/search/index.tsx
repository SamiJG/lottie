import { HomeOverview } from "../../components/HomeOverview";
import { useState, useEffect } from "react";
import { default as homesListData } from "../../data/homesList.json";
import { regionsList } from "../../data/regionsList";
import { Home } from "../../components/HomeOverview";

interface HomesListObj {
  [key: string]: Home;
}

const getAllHomes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(homesListData), Math.random() * 1000);
  });
};

const RegionFilter = () => {};

export default function Search() {
  const [homesList, setHomesList] = useState<Home[] | null>(null);
  const [maximumPrice, setMaximumPrice] = useState<number>(1000000);
  const [regions, setRegions] = useState<string[]>(regionsList);
  useEffect(() => {
    getAllHomes().then((data) => {
      const homesListObj = data as HomesListObj;
      const homesListArr: Home[] = Object.keys(homesListObj).reduce(
        (acc, homeId) => {
          const home = homesListObj[homeId];
          home["homeId"] = homeId;
          acc.push(home);
          return acc;
        },
        []
      );
      const filtersApplied = homesListArr.filter((home) => {
        return (
          home.pricesFrom < maximumPrice &&
          // region.length > 0 &&
          // region.some((region) => region === home.region)

          regions.includes(home.region)
        );
      });
      setHomesList(filtersApplied);
    });
  }, [maximumPrice, regions]);

  return (
    homesList && (
      <div className="px-10 md:px-20 ">
        <div className="border p-1 mb-1 w-1/2">
          Maximum weekly spend:
          <input
            type="type"
            className="border"
            onChange={(e) => setMaximumPrice(+e.target.value)}
          ></input>
        </div>
        <div className="border p-1 mb-1 w-1/2">
          Region:
          <ul className="toppings-list">
            {regionsList.map((region, index) => {
              const isChecked = regions.includes(region);
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={region}
                    name="region"
                    value={region}
                    checked={isChecked}
                    onClick={() =>
                      isChecked
                        ? setRegions(
                            regions.filter((value) => value !== region)
                          )
                        : setRegions([...regions, region])
                    }
                  />
                  <label htmlFor={region}>{region}</label>
                </li>
              );
            })}
          </ul>
          <button
            className="border rounded px-2 mr-2 hover:bg-gray-100"
            onClick={() => setRegions(regionsList)}
          >
            Reset
          </button>
          <button
            className="border rounded px-2 mr-2 hover:bg-gray-100"
            onClick={() => setRegions([])}
          >
            Clear All
          </button>
        </div>
        <p className="mb-4">
          Showing <b>{Object.keys(homesList).length}</b> care home results
        </p>
        <div className="flex flex-row flex-wrap justify-between">
          {homesList.map((home) => {
            return <HomeOverview home={home} key={home.homeId}></HomeOverview>;
          })}
        </div>
      </div>
    )
  );
}

// “priceFrom”, - text box max price
// “region”, - checkbox
// “greenerChoice”, checkbox
// “cqcRating” minimum checkbox
