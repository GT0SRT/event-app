import React from "react";

const timelineData = [
  {
    date: "April 22, 2025",
    title: "Registration Begins",
    time: "",
    description: "Online registration portal opens.",
  },
  {
    date: "April 29, 2025",
    title: "Registration Closes",
    time: "Till 11:59 PM",
    description: "Last day to register for the event.",
  },
  {
    date: "May 1, 2025",
    title: "Opening Ceremony",
    time: "10:30 AM – 12:30 PM",
    description: "Inauguration with special guests and event brief.",
  },
  {
    date: "May 1, 2025",
    title: "Workshops",
    time: "1:30 PM – 4:30 PM",
    description: "Hands-on sessions across various tech topics.",
  },
  {
    date: "May 2, 2025",
    title: "Coding Competition",
    time: "11:00 AM – 2:00 PM",
    description: "Show your coding skills in a timed challenge.",
  },
  {
    date: "May 2, 2025",
    title: "Closing Ceremony",
    time: "4:00 PM onwards",
    description: "Winners announcement, thanks, and celebration!",
  },
];

const EventTimeline = () => {
  return (
    <section className="bg-transparent text-white py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-1">Event Timeline</h2>
      <div className='w-[10%] items-center justify-center bg-blue-950 h-1 m-3 ml-[45%] mb-5'></div>
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0" />
        <div className="space-y-12 relative z-10">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } relative`}
              >
                <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-8" : "md:pl-8"} mb-6 md:mb-0`}>
                  <div className="bg-[#101656] hover:cursor-pointer hover:bg-opacity-5 border border-white rounded-lg p-5 shadow-lg">
                    <p className="text-sm text-gray-300 mb-1">{item.date}</p>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    {item.time && <p className="text-sm text-gray-400 italic">{item.time}</p>}
                    <p className="text-gray-300 mt-1">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-5 h-5 bg-blue-950 border-2 border-white rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
