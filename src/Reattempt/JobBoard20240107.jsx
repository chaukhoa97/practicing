const STORIES_URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json'
const DETAILS_URL = 'https://hacker-news.firebaseio.com/v0/item/'
const INITIAL_JOB_NUMBER = 5
const LOAD_MORE = 2
import { useState, useEffect, useCallback, useRef, useContext } from 'react'

export default function JobBoard20240107() {
  const [storyIds, setStoryIds] = useState([])
  const [shownDetails, setShownDetails] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getStoryIds = async () => {
      const res = await fetch(STORIES_URL)
      const json = await res.json()
      setStoryIds(json)
    }
    getStoryIds()
  }, [])

  useEffect(() => {
    let ignore = true

    const getInitialJobDetails = async () => {
      const usedIds = storyIds.slice(0, INITIAL_JOB_NUMBER)
      const promises = usedIds.map(async (id) =>
        fetch(DETAILS_URL + id + '/.json'),
      )
      const responses = await Promise.all(promises)

      if (!ignore)
        responses.forEach(async (res) => {
          const json = await res.json()
          setShownDetails((prev) => [...prev, json])
        })
    }

    getInitialJobDetails()

    return () => {
      ignore = false
    }
  }, [storyIds])

  const handleLoadMore = () => {
    const newPage = page + 1
    setPage(newPage)
    const thisFetchFirstJob = INITIAL_JOB_NUMBER + (page - 1) * 2
    const thisFetchIds = storyIds.slice(
      thisFetchFirstJob,
      thisFetchFirstJob + 2,
    )
    const getJobDetails = async () => {
      const promises = thisFetchIds.map(async (id) =>
        fetch(DETAILS_URL + id + '/.json'),
      )
      const responses = await Promise.all(promises)

      responses.forEach(async (res) => {
        const json = await res.json()
        setShownDetails((prev) => [...prev, json])
      })
    }

    getJobDetails()
  }

  return (
    <div>
      {shownDetails.map((detail, index) => (
        <div key={detail.id} className="border p-2">
          {index}.{detail.title}
        </div>
      ))}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  )
}
