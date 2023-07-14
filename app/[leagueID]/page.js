import Standing from "@/components/Standing"
import React from "react"

async function getData(params) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=${params}`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "YOUR-API-KEY",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  }

  const res = await fetch(url, options)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

async function Page({ params }) {
  const data = await getData(params?.leagueID)

  const leagueInfos = data?.response[0]?.league

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Standing leagueInfos={leagueInfos} />
    </main>
  )
}

export default Page
