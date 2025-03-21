const ProgressBar2 = ({ percentage = 6 }) => {
  return (
    <div className="p-4">
      <div className="flex h-5 w-[500px] overflow-hidden rounded-lg border border-black bg-gray-50">
        <div
          className={`flex items-center justify-center bg-blue-500 text-white`}
          style={{
            flexBasis: `${5 * percentage}px`,
          }}
        >
          {percentage > 5 && percentage + '%'}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar2
