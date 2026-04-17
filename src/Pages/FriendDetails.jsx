import React from 'react';
import { 
  FaPhone, 
  FaComment, 
  FaVideo, 
  FaEdit 
} from "react-icons/fa";
import { 
  MdSnooze, 
  MdArchive, 
  MdDelete 
} from "react-icons/md";
import { useLoaderData, useParams } from 'react-router';


const FriendDetails = () => {
  const friendData= useLoaderData();
  const {id}= useParams()
  
    const expectedFriend = friendData.find((f) => f.id == id);
  return (
    <div>
        <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left - Profile Info */}
        <div className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <img
              src={expectedFriend.picture}
              alt={expectedFriend.name}
              className="w-32 h-32 rounded-full object-cover ring-8 ring-white shadow-md mb-5"
            />
            
            <h1 className="text-2xl font-semibold text-gray-800">{expectedFriend.name}</h1>

            {/* Status */}
            <span className="mt-3 inline-block bg-red-500 text-white text-sm font-semibold px-5 py-1.5 rounded-full">
              Overdue
            </span>

            {/* Tag */}
            <span className="mt-3 inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-5 py-1 rounded-full">
              {expectedFriend.tags[0] || "FAMILY"}
            </span>

            {/* Bio */}
            <p className="mt-6 text-gray-600 italic text-sm">
              "{expectedFriend.bio}"
            </p>

            <p className="text-gray-500 text-sm mt-4">
              Preferred: <span className="font-medium">{expectedFriend.email}</span>
            </p>
          </div>
        </div>

        {/* Right Side - Stats & Actions */}
        <div className="lg:col-span-2 space-y-6">

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-emerald-700">{expectedFriend.days_since_contact}</p>
              <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-emerald-700">{expectedFriend.goal}</p>
              <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
              <p className="text-2xl font-bold text-gray-800">
                {new Date(expectedFriend.next_due_date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </p>
              <p className="text-gray-500 text-sm mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">Relationship Goal</h3>
                <p className="text-gray-600 mt-1">
                  Connect every <span className="font-semibold">{expectedFriend.goal} days</span>
                </p>
              </div>
              <button className="flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition">
                <FaEdit /> Edit
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left - Quick Actions */}
            <div className="bg-white rounded-3xl p-6 shadow-sm space-y-3">
              <button className="w-full flex items-center gap-3 text-left px-5 py-4 hover:bg-gray-50 rounded-2xl transition">
                <MdSnooze className="text-xl text-gray-600" />
                <span>Snooze 2 Weeks</span>
              </button>
              <button className="w-full flex items-center gap-3 text-left px-5 py-4 hover:bg-gray-50 rounded-2xl transition">
                <MdArchive className="text-xl text-gray-600" />
                <span>Archive</span>
              </button>
              <button className="w-full flex items-center gap-3 text-left px-5 py-4 hover:bg-red-50 text-red-600 rounded-2xl transition">
                <MdDelete className="text-xl" />
                <span>Delete</span>
              </button>
            </div>

            {/* Right - Quick Check-In */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center gap-2 py-5 hover:bg-gray-50 rounded-2xl transition">
                  <FaPhone className="text-2xl text-emerald-600" />
                  <span className="text-sm font-medium">Call</span>
                </button>
                <button className="flex flex-col items-center gap-2 py-5 hover:bg-gray-50 rounded-2xl transition">
                  <FaComment className="text-2xl text-emerald-600" />
                  <span className="text-sm font-medium">Text</span>
                </button>
                <button className="flex flex-col items-center gap-2 py-5 hover:bg-gray-50 rounded-2xl transition">
                  <FaVideo className="text-2xl text-emerald-600" />
                  <span className="text-sm font-medium">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default FriendDetails;