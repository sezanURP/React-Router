

import React, { createContext, useState, useContext } from 'react';
const TimelineContext = createContext();


export const TimelineProvider = ({ children }) => {

  const [events, setEvents] = useState([]);


  const addEvent = (type, friendName ) => {
    const newEvent = {
      id: Date.now(),
      type: type,
      contact:  friendName,
      date: new Date(), 
     
    };
    

    setEvents([newEvent, ...events]); 
  };

  return (
    <TimelineContext.Provider value={{ events, addEvent }}>
      {children}
    </TimelineContext.Provider>
  );
};


export const useTimeline = () => useContext(TimelineContext);

