import Image from "next/image"
import React from "react"

function Standing({ leagueInfos }) {
  const data = [
    "Ranking",
    "Logo",
    "Team",
    "GP",
    "W",
    "D",
    "L",
    "GF",
    "GA",
    "GD",
    "PTS",
    "Shape",
  ]

  const filteredData = data.map((title, index) => (
    <th
      key={index}
      className="px-5 py-3 w-auto border-b-2 border-red-20 bg-green-200 text-left text-xs font-semibold text-gray-600 uppercase "
    >
      {title}
    </th>
  ))

  const clubs = leagueInfos.standings[0].map((club) => (
    <tr key={club.rank}>
      <td className="px-2 py-2 border-b border-gray-200 w-32 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 ">
            <p>{club.rank}</p>
          </div>
        </div>
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-36 bg-white text-sm">
        <Image
          width={40}
          height={40}
          className="w-10  h-10 rounded-full"
          src={club.team.logo}
          alt=""
        />
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-36 bg-white text-sm">
        <a href="#">{club.team.name}</a>
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-10 bg-white text-sm">
        {club.all.played}
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-10 bg-white text-sm">
        {club.all.win}
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-10 bg-white text-sm">
        {club.all.draw}
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-10 bg-white text-sm">
        {club.all.lose}
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-10 bg-white text-sm">
        {club.all.goals.for}
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-10 bg-white text-sm">
        {club.all.goals.against}
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-10 bg-white text-sm">
        {club.goalsDiff}
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-10 bg-white text-sm">
        {club.points}
      </td>
      <td className="px-2 py-2 border-b border-gray-200 w-10 bg-white text-sm">
        {club.form}
      </td>
    </tr>
  ))

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex space-x-4 space-y-6">
          <Image
            height={100}
            width={100}
            className=" h-24"
            src={leagueInfos.logo}
            alt={leagueInfos.name}
          />
          <h2 className="text-xl font-semibold leading-tight">
            {leagueInfos.name}, {leagueInfos.country}
          </h2>
          <Image
            height={30}
            width={30}
            className=" h-7"
            src={leagueInfos.flag}
            alt={leagueInfos.name}
          />
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 w-full overflow-x-scroll xl:overflow-x-hidden">
          <div className="inline-block min-w-full shadow rounded-lg ">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>{filteredData}</tr>
              </thead>
              <tbody>{clubs}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Standing
