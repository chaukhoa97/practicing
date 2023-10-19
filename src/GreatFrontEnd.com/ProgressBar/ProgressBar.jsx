// https://www.greatfrontend.com/questions/user-interface/progress-bar

export default function ProgressBar({ percentage }) {
  const normalizedPercentage = Math.min(percentage, 100)
  return (
    <div className="m-4 h-8 overflow-hidden rounded-md border border-gray-400 bg-gray-300 text-white">
      {normalizedPercentage > 0 && (
        <div
          className="flex h-full items-center bg-blue-400"
          style={{
            width: `${normalizedPercentage}%`,
          }}
          role="progressbar"
          aria-valuenow={normalizedPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {normalizedPercentage}%
        </div>
      )}
    </div>
  )
}
