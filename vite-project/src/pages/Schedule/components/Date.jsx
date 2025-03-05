import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { pb } from "../../../libs/pocketbase";
import { useEffect, useState } from "react";

const months = [
  {
    name: "March ",
    days: [
      { date: "2021-12-27" },
      { date: "2021-12-28" },
      { date: "2021-12-29" },
      { date: "2021-12-30" },
      { date: "2021-12-31" },
      { date: "2022-01-01", isCurrentMonth: true },
      { date: "2022-01-02", isCurrentMonth: true },
      { date: "2022-01-03", isCurrentMonth: true },
      { date: "2022-01-04", isCurrentMonth: true },
      { date: "2022-01-05", isCurrentMonth: true },
      { date: "2022-01-06", isCurrentMonth: true },
      { date: "2022-01-07", isCurrentMonth: true },
      { date: "2022-01-08", isCurrentMonth: true },
      { date: "2022-01-09", isCurrentMonth: true },
      { date: "2022-01-10", isCurrentMonth: true },
      { date: "2022-01-11", isCurrentMonth: true },
      { date: "2022-01-12", isCurrentMonth: true },
      { date: "2022-01-13", isCurrentMonth: true },
      { date: "2022-01-14", isCurrentMonth: true },
      { date: "2022-01-15", isCurrentMonth: true },
      { date: "2022-01-16", isCurrentMonth: true },
      { date: "2022-01-17", isCurrentMonth: true },
      { date: "2022-01-18", isCurrentMonth: true },
      { date: "2022-01-19", isCurrentMonth: true },
      { date: "2022-01-20", isCurrentMonth: true },
      { date: "2022-01-21", isCurrentMonth: true, isToday: true },
      { date: "2022-01-22", isCurrentMonth: true, isToday: true },
      { date: "2022-01-23", isCurrentMonth: true, isToday: true },
      { date: "2022-01-24", isCurrentMonth: true },
      { date: "2022-01-25", isCurrentMonth: true },
      { date: "2022-01-26", isCurrentMonth: true },
      { date: "2022-01-27", isCurrentMonth: true },
      { date: "2022-01-28", isCurrentMonth: true },
      //   { date: "2022-01-29", isCurrentMonth: true },
      //   { date: "2022-01-30", isCurrentMonth: true },
      //   { date: "2022-01-31", isCurrentMonth: true },
      { date: "2022-02-01" },
      { date: "2022-02-02" },
      { date: "2022-02-03" },
      { date: "2022-02-04" },
      { date: "2022-02-05" },
      { date: "2022-02-06" },
      { date: "2022-02-07" },
      { date: "2022-02-08" },
      { date: "2022-02-09" },
    ],
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Date() {
  const [scheduleData, setScheduleData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const records = await pb  .collection('schedule').getFullList({
          sort: 'created',
        });

        // Group records by date
        const grouped = records.reduce((acc, item) => {
          if (!acc[item.date]) {
            acc[item.date] = [];
          }
          acc[item.date].push(item);
          return acc;
        }, {});

        setScheduleData(grouped);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching schedule:', error);
        setLoading(false);
      }
    }

    fetchSchedule();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading schedule...</div>;
  }
  return (
    <div className="mx-auto py-12 bg-green-50 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 mb-8">
        <h1 className="text-5xl font-bold text-green-900 mb-4 text-center">
          Shaping Tomorrow's Sustainable Landscape
        </h1>
        <p className="text-gray-700 text-center">
          Join us March 21st-23rd for three days of cutting-edge insights and
          networking. Reserve your spot today!
        </p>
      </div>
      {/* <div className="relative grid grid-cols-1 gap-x-14  mx-auto max-w-md ">
        {months.map((month, monthIdx) => (
          <section
            key={monthIdx}
            className={classNames(
              monthIdx === months.length - 1 && "md:block px-12 ",
              "text-center px-12 "
            )}
          >
            <h2 className="text-sm font-semibold text-gray-900">
              {month.name}
            </h2>
            <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
              {month.days.map((day, dayIdx) => (
                <button
                  key={day.date}
                  type="button"
                  className={classNames(
                    day.isCurrentMonth
                      ? "bg-white text-gray-900"
                      : "bg-gray-50 text-gray-400",
                    dayIdx === 0 && "rounded-tl-lg",
                    dayIdx === 6 && "rounded-tr-lg",
                    dayIdx === month.days.length - 7 && "rounded-bl-lg",
                    dayIdx === month.days.length - 1 && "rounded-br-lg",
                    "relative py-1.5 hover:bg-gray-100 focus:z-10"
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={classNames(
                      day.isToday && "bg-green-500 font-semibold text-white",
                      "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                    )}
                  >
                    {day.date.split("-").pop().replace(/^0/, "")}
                  </time>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div> */}

      <div className="max-w-4xl mx-auto p-4 space-y-8">
        <div>
          <img src="/d1p1.jpg" alt="" className="select-none pointer-events-none" />
          <img src="/d1p2.jpg" alt=""className="select-none pointer-events-none" />
        </div>
        <div>
          <img src="/d2p1.jpg" alt=""className="select-none pointer-events-none" />
          <img src="/d2p2.jpg" alt=""className="select-none pointer-events-none" />
        </div>
        <div>

        </div>
    </div>
    </div>
  );
}
