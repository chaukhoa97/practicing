import { useState, useEffect, useCallback, useRef, forwardRef } from 'react'

const JOB_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json'

const getJobDetailURL = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`

const INITIAL_POST_COUNT = 50
const LOAD_MORE_POST_COUNT = 5

function useJobs() {
  const [ids, setIds] = useState([])
  const [details, setDetails] = useState([])
  const [lastPostIndex, setLastPostIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isOutOfPost, setIsOutOfPost] = useState(false)

  const totalPostCount = ids.length

  // Mounted: Fetch for all IDs
  useEffect(() => {
    const fetchIds = async () => {
      const res = await fetch(JOB_STORIES_URL)
      const ids = await res.json()
      setIds(ids)
    }
    fetchIds()
  }, [])

  // Mounted: Fetch for first posts
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

  const loadMore = useCallback(
    async (count = 2) => {
      const newLastPostIndex = lastPostIndex + count
      setLastPostIndex(newLastPostIndex)

      if (newLastPostIndex <= totalPostCount - 1) {
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
      } else {
        setIsOutOfPost(true)
      }
    },
    [ids, lastPostIndex, totalPostCount],
  )

  // Infinite loading
  useEffect(() => {
    if (isLoading) return

    const observer = new IntersectionObserver(async (entries) => {
      // `entries` is an array of observed DOM nodes, in this case we only track one element (the last job card)
      // "interseting" means the element is PARTIALLY visible in the viewport, which can be configured by `threshold` option
      if (entries[0].isIntersecting) {
        loadMore(LOAD_MORE_POST_COUNT)
      }
    })

    // Assume that the last element have a class of `job-card`
    const lastElement = document.querySelector('.job-card:last-of-type')
    if (lastElement) observer.observe(lastElement)

    return () => {
      if (lastElement) observer.unobserve(lastElement)
    }
  }, [isLoading, loadMore])

  return { details, loadMore, isLoading, isOutOfPost }
}

export default function JobBoard() {
  const { details, loadMore, isLoading, isOutOfPost } = useJobs()

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold text-orange-500">
        Hacker News Jobs Board {details.length}
      </h1>
      {details.map((item) => (
        <JobCard key={item.id} detail={item} />
      ))}
      {isLoading && <div className="4xl">...</div>}
      {isOutOfPost && <p>Out of post</p>}
      <button
        className="rounded bg-orange-500 p-2 text-white"
        onClick={() => loadMore(LOAD_MORE_POST_COUNT)}
        disabled={isLoading || isOutOfPost}
      >
        {isLoading ? 'Loading...' : 'Load more jobs'}
      </button>
    </div>
  )
}

const JobCard = ({ detail }) => {
  const { by, time, title, url } = detail

  return (
    <div className="job-card mb-4 rounded-sm border p-2">
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
}
