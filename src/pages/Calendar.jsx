import axios from "axios";
import { useEffect, useState } from "react";

function Calendar() {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    axios
      .get("https://f1-news-database.adaptable.app/events")
      .then((response) => {
        setCalendar(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {calendar.map((event) => {
        return (
          <div className="border text-center m-3 ml-10 mr-10">
            <div className="font-bold" key={event.id}>
              {event.title}
            </div>
            <div>Round: {event.round}</div>
            <div>
              {event.startDate}-{event.endDate}
            </div>
            <div>Location: {event.location}</div>
          </div>
        );
      })}
    </>
  );
}

export default Calendar;
