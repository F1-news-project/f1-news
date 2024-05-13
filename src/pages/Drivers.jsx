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
    <>
      {driver.length > 0 &&
        driver.map((driver) => {
          return <h1 key={driver.id}>{driver.name}</h1>;
        })}
    </>
  );
}

export default Drivers;
