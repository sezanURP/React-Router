import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTimeline } from "../Context/TimelineContext";

const Stats = () => {
  const { events } = useTimeline();
  console.log(events);

  
  const callCount = events.filter((e) => e.type === "Call").length;
  const textCount = events.filter((e) => e.type === "Text").length;
  const videoCount = events.filter((e) => e.type === "Video").length;

  
  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ].filter((item) => item.value > 0); 
  const COLORS = {
    Text: "#8B5CF6", 
    Call: "#27593F", 
    Video: "#4ADE80", 
  };

  return (
   <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-8">
       <div>
        <h2 className="text-5xl w-[70%] mx-auto  font-bold  mb-2">
          Friendship Analytics
        </h2>
      </div>
    <div className="bg-white w-[70%] mx-auto p-6 rounded-lg shadow-sm border border-gray-100 ">
     
      <p className="text-slate-500 mb-6">By Interaction Type</p>

      {data.length === 0 ? (
        <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
          No data available to show analytics.
        </div>
      ) : (
        
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%" 
                cy="50%"
                innerRadius={70} 
                outerRadius={110} 
                paddingAngle={5} 
                dataKey="value"
                stroke="none" 
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle" 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
    </div>
  );
};

export default Stats;
