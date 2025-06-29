import { useState, useEffect, useRef, useCallback } from 'react'

export default function useQuery<T>(
  key: unknown[],
  fetcher: () => Promise<T>,
): {
  data: T | undefined
  error: Error | undefined
  loading: boolean
  refetch: () => void
} {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState(true) // Start loading immediately
  const [trigger, setTrigger] = useState(0) // Use state instead of ref

  // 1. We can use fetcher directly but React will yell at us to have fetcher in the useEffect's dependancy
  // But if we do that the effect will rerun many times because fetcher  is a reference value (assumed we dont wrap fetcher with useCallback)
  const fetcherRef = useRef(fetcher)
  useEffect(() => {
    fetcherRef.current = fetcher
  }, [fetcher])

  const refetch = useCallback(() => {
    setTrigger((prev) => prev + 1)
  }, [])

  useEffect(() => {
    let ignore = false

    setLoading(true)
    setError(undefined) // Clear previous error

    fetcherRef
      .current()
      .then((d) => {
        if (!ignore) {
          setData(d)
        }
      })
      .catch((e) => {
        if (!ignore) {
          setError(e)
          setData(undefined) // Clear previous data on error
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [...key, trigger])

  return { data, error, loading, refetch }
}
