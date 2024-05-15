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
    <div className="grid grid-cols-2 gap-4 place-content-around h-48 mt-3">
      {driver.length > 0 &&
        driver.map((driver) => {
          return (
            <div
              className="bg-blue-100 rounded-lg text-center max-w-80 bg-transparent border-2"
              key={driver.id}>
              {<div className="font-bold">{driver.name}</div>}{" "}
              {<h1>World Titles: {driver.worldTitles}</h1>}
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
