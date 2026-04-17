import React, { useState } from "react";
import { useTimeline } from "../Context/TimelineContext";
import { MdAddIcCall } from "react-icons/md";
import { FiMessageSquare, FiPhoneCall, FiUsers, FiVideo } from "react-icons/fi";

const Timeline = () => {

  const { events } = useTimeline();

  const [filterType, setFilterType] = useState("All");

  const filteredEvents = events.filter((event) => {
    if (filterType === "All") {
      return true;
    }
    return event.type === filterType;
  });

  

  const getIconComponent = (type) => {
    switch (type) {
      case "Call":
        return <FiPhoneCall className="text-green-600 " />;
      case "Text":
        return <FiMessageSquare className="text-green-600" />;
      case "Video":
        return <FiVideo className="text-green-600 " />;
      case "Meetup":
        return <FiUsers />;
      default:
        return null;
    }
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div className=" w-[95%] min-h-[50vh] mx-auto bg-transparent">
      <div className=" mb-6">
        <h2 className="text-4xl font-bold my-6">Timeline</h2>

        <select value={filterType} 
          onChange={(e) => setFilterType(e.target.value)} className="appearance-none border border-gray-300 rounded-md  px-10 py-2 text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer shadow-sm transition-all">
          <option value="All">All Types</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
          >
            <div className="text-2xl mr-4 bg-slate-50 p-2 rounded-full">
              {getIconComponent(event.type)}
            </div>

            <div>
              <p className="text-slate-800 font-medium text-sm md:text-base">
                <span className="font-bold text-lg">{event.type}</span> with{" "}
                {event.contact}
              </p>
              <p className="text-slate-500 text-xs md:text-sm">
                {formatDate(event.date)}
              </p>
            </div>
          </div>
        ))}

       
        {filteredEvents.length === 0 && (
          <p className="text-gray-500 text-center py-8 bg-white rounded-lg border-2 border-gray-500 text-2xl font-medium border-dashed mb-6">
            No {filterType !== 'All' ? filterType : ''} events found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Timeline;
