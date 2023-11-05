import { useState, useEffect } from 'react'

const JOB_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json'

const getJobDetailURL = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`

const INITIAL_POST_COUNT = 4
const LOAD_MORE_POST_COUNT = 6

export default function useJobs() {
  const [ids, setIds] = useState([])
  const [details, setDetails] = useState([])
  const [lastPostIndex, setLastPostIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchIds = async () => {
      const res = await fetch(JOB_STORIES_URL)
      const ids = await res.json()
      setIds(ids)
    }
    fetchIds()
  }, [])

  useEffect(() => {
    let ignore = false
    const thisFetchIds =
      lastPostIndex === 0
        ? ids.slice(0, INITIAL_POST_COUNT)
        : ids.slice(lastPostIndex, lastPostIndex + LOAD_MORE_POST_COUNT)

    const fetchDetails = async () => {
      setIsLoading(true)

      const promises = thisFetchIds.map((id) => fetch(getJobDetailURL(id)))
      const responses = await Promise.all(promises)
      const data = await Promise.all(
        responses.map(async (res) => await res.json()),
      )

      if (!ignore) {
        setIsLoading(false)
        setDetails((d) => {
          return [...d, ...data]
        })
      }
    }

    fetchDetails()

    return () => {
      ignore = true
    }
  }, [ids, lastPostIndex])

  const loadMore = () => {
    setLastPostIndex((l) => l + LOAD_MORE_POST_COUNT)
  }

  return { details, loadMore, isLoading }
}
