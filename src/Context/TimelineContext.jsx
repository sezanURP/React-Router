

import React, { createContext, useState, useContext } from 'react';
const TimelineContext = createContext();


export const TimelineProvider = ({ children }) => {

  const [events, setEvents] = useState([]);


  const addEvent = (type, friendName) => {
    const newEvent = {
      id: Date.now(), // ইউনিক আইডি 
      type: type, // Call, Text, বা Video
      contact:  friendName,// Quick Check-in এ নাম নেই, তাই ডিফল্ট নাম
      date: new Date(), // বর্তমান সময়
    };
    
    // নতুন ডেটা অ্যারের শুরুতে যোগ করা হচ্ছে যাতে টাইমলাইনের উপরে দেখায়
    setEvents([newEvent, ...events]); 
  };

  return (
    <TimelineContext.Provider value={{ events, addEvent }}>
      {children}
    </TimelineContext.Provider>
  );
};

// ৩. কাস্টম হুক (সহজে কনটেক্সট ব্যবহার করার জন্য)
// eslint-disable-next-line react-refresh/only-export-components
export const useTimeline = () => useContext(TimelineContext);

