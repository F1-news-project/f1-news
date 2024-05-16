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
    <div className="flex flex-col items-center">
      {calendar.map((event) => {
        return (
          <div className="w-full sm:w-3/4 lg:w-1/2 flex flex-col md:flex-row border my-4 p-4 rounded-lg shadow-2xl">
            <img
              src={event.image}
              alt={event.title}
              className="w-full md:w-1/3"
            />
            <div
              className="flex flex-col justify-center text-center w-full md:w-2/3 p-4"
              key={event.id}
            >
              <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                {event.title}
              </div>
              <div className="text-lg">Round: {event.round}</div>
              <div className="text-lg">
                {event.startDate}-{event.endDate}
              </div>
              <div className="text-lg">Location: {event.location}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
