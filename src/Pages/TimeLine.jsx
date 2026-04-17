import React from 'react';
import { useTimeline } from '../Context/TimelineContext';
import { MdAddIcCall } from 'react-icons/md';
import { FiMessageSquare, FiPhoneCall, FiUsers, FiVideo } from 'react-icons/fi';


const Timeline = () => {
  const { events } = useTimeline(); // Context থেকে ডেটা নিয়ে আসা

  // টাইপ অনুযায়ী ইমোজি বা আইকন নির্ধারণ করার একটি হেল্পার ফাংশন
const getIconComponent = (type) => {
  switch (type) {
    case 'Call': return <FiPhoneCall />;
    case 'Text': return <FiMessageSquare />;
    case 'Video': return <FiVideo />;
    case 'Meetup': return <FiUsers />;
    default: return null;
  }
};
  // ডেট ফরম্যাট করার হেল্পার ফাংশন (যেমন: March 29, 2026)
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className=" w-[95%] mx-auto bg-transparent">
      <div className=" mb-6">
        <h2 className="text-4xl font-bold my-6">Timeline</h2>
        {/* ফিল্টার ড্রপডাউন (ঐচ্ছিক) */}
        <select className="border border-gray-200 rounded-md px-20 py-2 text-md text-gray-600 bg-white">
          <option>Filter timeline</option>
        </select>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
          >
            {/* আইকন সেকশন */}
            <div className="text-2xl mr-4 bg-slate-50 p-2 rounded-full">
             {getIconComponent(event.type)}
            </div>
            
            {/* টেক্সট সেকশন */}
            <div>
              <p className="text-slate-800 font-medium text-sm md:text-base">
                <span className="font-bold">{event.type}</span> with {event.contact}
              </p>
              <p className="text-slate-500 text-xs md:text-sm">
                {formatDate(event.date)}
              </p>
            </div>
          </div>
        ))}

        {events.length === 0 && (
          <p className="text-gray-500 text-center py-4">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;