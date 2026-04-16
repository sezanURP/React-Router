import React, { use } from "react";

const friendsPromise = fetch("/FriendsData.json").then((data) => data.json());

const Friend = () => {
  const friendData = use(friendsPromise);

  return (
    <div>
      <h2 className="text-xl font-medium w-[90%] mx-auto mt-10">
        Your Friends
      </h2>
      <div className="container grid grid-cols-2 md:grid-cols-4 mt-10 w-[95%] mx-auto gap-y-5">
        {friendData.map((friend) => {
          console.log(friend);
          return (
            <div className="bg-white rounded-3xl p-8 shadow-sm max-w-sm mx-auto text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-28 h-28 rounded-full object-cover ring-8 ring-white shadow-md"
                />
              </div>

              <h2 className="text-2xl font-semibold text-gray-800">
                {friend.name}
              </h2>

              <p className="text-gray-500 mt-1">{`${friend.days_since_contact}d ago`}</p>

              <div className="flex justify-center gap-3 mt-6">
                {friend.tags.map((tag) => {
                  return (
                    <span className="flex gap-3 justify-center overflow-x-auto pb-2 px-4 py-1.5 text-sm bg-green-200 font-medium rounded-3xl">
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="mt-8">
                <span
                  className={`text-white text-sm font-semibold px-6 py-2 rounded-full inline-block 
    ${
      friend.status === "on-track"
        ? "bg-emerald-900"
        : friend.status === "overdue"
          ? "bg-red-600"
          : friend.status === "almost-due"
            ? "bg-yellow-600"
            : "bg-gray-500"
    }`}
                >
                  {friend.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Friend;
