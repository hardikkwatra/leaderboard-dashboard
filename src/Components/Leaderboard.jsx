import React, { useState } from "react";

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState("24H");

  const leaderboardData = [
    {
      rank: 1,
      avatar: "https://via.placeholder.com/50",
      name: "John Doe",
      twitterFollowers: 1000,
      twitterScore: 80,
      walletScore: 50,
      totalScore: 130,
    },
    {
      rank: 2,
      avatar: "https://via.placeholder.com/50",
      name: "Jane Smith",
      twitterFollowers: 800,
      twitterScore: 75,
      walletScore: 60,
      totalScore: 135,
    },
    // Add more data as needed
  ];

  const filters = ["24H", "48H", "7D", "30D", "3M", "6M", "12M", "All"];

  return (
    <div className="mt-6">
      <div className="flex gap-2 justify-center my-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setTimeFilter(filter)}
            className={`px-4 py-2 rounded-md ${
              timeFilter === filter ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-700 text-white">
            <th className="py-2 px-4">Rank</th>
            <th className="py-2 px-4">Avatar</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Twitter Followers</th>
            <th className="py-2 px-4">Twitter Score</th>
            <th className="py-2 px-4">Wallet Score</th>
            <th className="py-2 px-4">Total Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index} className="bg-gray-800 text-white">
              <td className="py-2 px-4 text-center">{user.rank}</td>
              <td className="py-2 px-4">
                <img src={user.avatar} alt="Avatar" className="rounded-full w-8 h-8" />
              </td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4 text-center">{user.twitterFollowers}</td>
              <td className="py-2 px-4 text-center">{user.twitterScore}</td>
              <td className="py-2 px-4 text-center">{user.walletScore}</td>
              <td className="py-2 px-4 text-center">{user.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
