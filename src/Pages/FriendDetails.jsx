import React from "react";
import { FaPhone, FaComment, FaVideo, FaEdit } from "react-icons/fa";
import { MdSnooze, MdArchive, MdDelete } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { useTimeline } from "../Context/TimelineContext";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const friendData = useLoaderData();
  const { id } = useParams();

  const { addEvent } = useTimeline();
  const handleCheckIn = (type) => {
    addEvent(type, expectedFriend.name);
    toast(`Successfully started  ${type}  with ${expectedFriend.name}`);
  };

  const expectedFriend = friendData.find((f) => f.id == id);
  return (
    <div>
      <div className="max-w-6xl mx-auto p-4 mt-10 md:p-6">
        <div className="grid grid-cols-12  gap-6">
          <div className="col-span-3">
            <div className="lg:-span-3 bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <img
                  src={expectedFriend.picture}
                  alt={expectedFriend.name}
                  className="w-32 h-32 rounded-full object-cover ring-8 ring-white shadow-md mb-5"
                />

                <h1 className="text-2xl font-semibold text-gray-800">
                  {expectedFriend.name}
                </h1>

                <span className="mt-3 inline-block bg-red-500 text-white text-sm font-semibold px-5 py-1.5 rounded-full">
                  Overdue
                </span>

                <span className="mt-3 inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-5 py-1 rounded-full">
                  {expectedFriend.tags[0] || "FAMILY"}
                </span>

                <p className="mt-6 text-gray-600 italic text-sm">
                  "{expectedFriend.bio}"
                </p>

                <p className="text-gray-500 text-sm mt-4">
                  Preferred:
                  <span className="text-gray-800 font-medium">
                    {expectedFriend.email}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-5">
              <div className="bg-white rounded-3xl p-6 space-y-3">
                <button className="w-full flex items-center shadow-sm hover:shadow-md gap-3 text-left px-5 py-4 hover:bg-gray-200 rounded-2xl transition">
                  <MdSnooze className="text-xl text-gray-600" />
                  <span>Snooze 2 Weeks</span>
                </button>
                <button className="w-full flex  shadow-sm hover:shadow-md items-center gap-3 text-left px-5 py-4 hover:bg-gray-200 rounded-2xl transition">
                  <MdArchive className="text-xl text-gray-600" />
                  <span>Archive</span>
                </button>
                <button className="w-full flex shadow-sm hover:shadow-md items-center gap-3 text-left px-5 py-4 hover:bg-red-200 text-red-600 rounded-2xl transition">
                  <MdDelete className="text-xl" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-3xl p-6 py-8 text-center shadow-sm">
                <p className="text-4xl font-bold text-emerald-700">
                  {expectedFriend.days_since_contact}
                </p>
                <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
              </div>
              <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                <p className="text-4xl font-bold text-emerald-700">
                  {expectedFriend.goal}
                </p>
                <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
              </div>
              <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                <p className="text-2xl font-bold text-gray-800">
                  {new Date(expectedFriend.next_due_date).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    },
                  )}
                </p>
                <p className="text-gray-500 text-sm mt-1">Next Due</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Relationship Goal</h3>
                  <p className="text-gray-600 mt-1">
                    Connect every{" "}
                    <span className="font-semibold">
                      {expectedFriend.goal} days
                    </span>
                  </p>
                </div>
                <button className="flex items-center p-2 rounded-xl gap-2 text-sm font-medium text-emerald-600 hover:bg-gray-200 transition">
                  <FaEdit /> Edit
                </button>
              </div>
            </div>

            <div className="grid col-span-9 bg-white rounded-3xl items-center-center p-6 shadow-sm w-full md:grid-cols-2 ">
              <div>
                <h3 className="font-semibold mb-4">Quick Check-In</h3>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => handleCheckIn("Call")}
                    className="flex flex-col items-center gap-2 py-5 hover:bg-gray-200 rounded-2xl transition"
                  >
                    <FaPhone className="text-2xl text-emerald-800" />
                    <span className="text-sm font-medium">Call</span>
                  </button>
                  <button
                    onClick={() => handleCheckIn("Text")}
                    className="flex flex-col items-center gap-2 py-5 hover:bg-gray-200 rounded-2xl transition"
                  >
                    <FaComment className="text-2xl text-emerald-800" />
                    <span className="text-sm font-medium">Text</span>
                  </button>
                  <button
                    onClick={() => handleCheckIn("Video")}
                    className="flex flex-col items-center gap-2 py-5 hover:bg-gray-200 rounded-2xl transition"
                  >
                    <FaVideo className="text-2xl text-emerald-800" />
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
