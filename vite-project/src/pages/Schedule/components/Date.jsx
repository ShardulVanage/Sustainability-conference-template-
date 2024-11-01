import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

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

const ScheduleList = [
  {
    name: "Dr. Emma Green",
    Topic: "Introduction to Sustainable Development Goals",
    timestart: "9:00 AM",
    timeend: "10:30 AM",
  },
  {
    name: "Prof. Rajesh Patel",
    Topic: "Renewable Energy Technologies",
    timestart: "11:00 AM",
    timeend: "12:30 PM",
  },
  {
    name: "Lunch Break",
    Topic: "Sustainable Catering Showcase",
    timestart: "12:30 PM",
    timeend: "1:30 PM",
  },
  {
    name: "Maria Sanchez",
    Topic: "Circular Economy Principles",
    timestart: "1:30 PM",
    timeend: "3:00 PM",
  },
  {
    name: "John Doe",
    Topic: "Energy Efficiency in Buildings",
    timestart: "3:30 PM",
    timeend: "5:00 PM",
  },
  {
    name: "Dr. Aisha Kwesi",
    Topic: "Sustainable Agriculture Practices",
    timestart: "5:30 PM",
    timeend: "7:00 PM",
  },
  {
    name: "Panel Discussion",
    Topic: "Future of Sustainable Cities",
    timestart: "7:30 PM",
    timeend: "9:00 PM",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Date() {
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
      <div className="relative grid grid-cols-1 gap-x-14  mx-auto max-w-md ">
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
      </div>

      <section className="mt-12 px-12 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold leading-6 text-green-900">
          March - 21 | Sustainable stability Goals
        </h2>
        <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
          {ScheduleList.map((iteam) => (
            <li className="py-4 sm:flex">
              <time dateTime="2022-01-19" className="w-28 flex-none">
                {iteam.name}
              </time>
              <p className="mt-2 flex-auto font-semibold text-gray-900 pl-3 sm:mt-0">
                {iteam.Topic}
              </p>
              <p className="flex-none sm:ml-6">
                <time dateTime="2022-01-13T14:30">{iteam.timestart}</time> -{" "}
                <time dateTime="2022-01-13T16:30">{iteam.timeend}</time>
              </p>
            </li>
          ))}
        </ol>
      </section>
      <hr />
      <section className="mt-12 px-12 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold leading-6 text-green-900">
          March - 22-23 | Sustainable stability Goals
        </h2>
        <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
          {/* {ScheduleList.map((iteam) => (
            <li className="py-4 sm:flex">
              <time dateTime="2022-01-19" className="w-28 flex-none">
                {iteam.name}
              </time>
              <p className="mt-2 flex-auto font-semibold text-gray-900 pl-3 sm:mt-0">
                {iteam.Topic}
              </p>
              <p className="flex-none sm:ml-6">
                <time dateTime="2022-01-13T14:30">{iteam.timestart}</time> -{" "}
                <time dateTime="2022-01-13T16:30">{iteam.timeend}</time>
              </p>
            </li>
          ))} */}{" "}
          <h1>Coming Soon</h1>
        </ol>
      </section>
    </div>
  );
}
