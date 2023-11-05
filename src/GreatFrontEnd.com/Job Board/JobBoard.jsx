import useJobs from './useJobs'

export default function JobBoard() {
  const { details, loadMore, isLoading } = useJobs()

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold text-orange-500">
        Hacker News Jobs Board {details.length}
      </h1>
      {details.map((item) => (
        <JobCard key={item.id} detail={item} />
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

function JobCard({ detail }) {
  const { by, time, title, url } = detail

  return (
    <div className="mb-4 rounded-sm border p-2">
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
