import { useState, useEffect, useCallback, useRef, forwardRef } from 'react'

const JOB_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json'

const getJobDetailURL = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`

const INITIAL_POST_COUNT = 5
const LOAD_MORE_POST_COUNT = 2

function useJobs() {
  const [ids, setIds] = useState([])
  const [details, setDetails] = useState([])
  const [lastPostIndex, setLastPostIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observer = useRef()

  // Todo: Infinite loading
  const lastJobElementRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLastPostIndex(
            (prevLastPostIndex) => prevLastPostIndex + LOAD_MORE_POST_COUNT,
          )
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore],
  )

  const loadMore = async () => {
    const newLastPostIndex = lastPostIndex + LOAD_MORE_POST_COUNT
    setLastPostIndex(newLastPostIndex)

    const thisFetchIds = ids.slice(lastPostIndex + 1, newLastPostIndex + 1)
    setIsLoading(true)

    const promises = thisFetchIds.map((id) => fetch(getJobDetailURL(id)))
    const responses = await Promise.all(promises)
    const data = await Promise.all(
      responses.map(async (res) => await res.json()),
    )

    setIsLoading(false)
    setDetails((d) => {
      return [...d, ...data]
    })
  }

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
    const thisFetchIds = ids.slice(0, INITIAL_POST_COUNT)
    setLastPostIndex(INITIAL_POST_COUNT - 1)

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
  }, [ids])

  return { details, loadMore, isLoading, lastJobElementRef }
}

export default function JobBoard() {
  const { details, loadMore, isLoading, lastJobElementRef } = useJobs()

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold text-orange-500">
        Hacker News Jobs Board {details.length}
      </h1>
      {details.map((item, index) => (
        <JobCard
          key={item.id}
          detail={item}
          // {...(index + 1 === details.length && { ref: lastJobElementRef })}
        />
      ))}
      {isLoading && <div className="4xl">...</div>}
      <button
        className="rounded bg-orange-500 p-2 text-white"
        onClick={loadMore}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load more jobs'}
      </button>
    </div>
  )
}

const JobCard = forwardRef(({ detail }, ref) => {
  const { by, time, title, url } = detail

  return (
    <div className="mb-4 rounded-sm border p-2" ref={ref}>
      <h3 className="text-lg font-bold">
        <a href={url} target="_blank">
          {title}
        </a>
      </h3>
      <p>
        By {by} . {new Date(time * 1000).toLocaleString()}
      </p>
    </div>
  )
})

JobCard.displayName = 'JobCard'
