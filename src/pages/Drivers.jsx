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
    <div className="grid grid-cols-2 gap-4 place-content-around h-48 ">
      {driver.length > 0 &&
        driver.map((driver) => {
          return (
            <div
              className="bg-blue-100 rounded-lg text-center max-w-80 min-h-80 "
              key={driver.id}
            >
              {<h1>{driver.name}</h1>}{" "}
              {<h1>World Titles: {driver.worldTitles}</h1>}
            </div>
          );
        })}
    </div>
  );
}

export default Drivers;
