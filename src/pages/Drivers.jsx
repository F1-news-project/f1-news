import axios from "axios";
import { useEffect, useState } from "react";

function Drivers() {
  const [driver, setDriver] = useState([]);

  useEffect(() => {
    axios
      .get("https://f1-news-database.adaptable.app/drivers")
      .then((response) => {
        setDriver(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-2 max-w-5xl m-auto lg:grid-cols-4 gap-8 place-content-around ">
      {driver.length > 0 &&
        driver.map((driver) => {
          return (
            <div
              className="bg-gray-300 rounded-lg text-center max-w-80 border-2 shadow-[0px_8px_25px_8px_#ef4444]    m-auto  "
              key={driver.id}
            >
              {<div className="font-bold">{driver.name}</div>}{" "}
              {<p>World Titles: {driver.worldTitles}</p>}
              {
                <div className="p-1 ">
                  <img className="rounded-lg object-fill" src={driver.image} />
                </div>
              }
            </div>
          );
        })}
    </div>
  );
}

export default Drivers;
