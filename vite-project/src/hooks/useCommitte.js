"use client"

import { useState, useEffect } from "react"

import { pb } from "../libs/pocketbase"



export function useCommittee() {
  const [committee, setCommittee] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchCommittee() {
      try {
        const records = await pb.collection("committee").getFullList({
          sort: "-created",
          requestKey:null
        })

        const grouped = records.reduce((acc, member) => {
          if (!acc[member.committee]) {
            acc[member.committee] = []
          }
          acc[member.committee].push(member)
          return acc
        }, {})

        setCommittee(grouped)
        setLoading(false)
      } catch (e) {
        console.error("Error fetching committee members:", e)
        setError(e instanceof Error ? e : new Error("Unknown error"))
        setLoading(false)
      }
    }

    fetchCommittee()
  }, [])

  return { committee, loading, error }
}

