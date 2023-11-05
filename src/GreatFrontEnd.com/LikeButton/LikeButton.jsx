import { useState } from 'react'
import { cn } from '../../util'
import { HeartIcon, SpinnerIcon } from './icons'

export default function LikeButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [liked, setLiked] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    setErrorMessage(null)

    const res = await fetch(
      'https://www.greatfrontend.com/api/questions/like-button',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json', // `fetch` default is 'text/plain'
          // we don't need this in axios because its default is 'application/json'
        },
        body: JSON.stringify({
          action: liked ? 'unlike' : 'like',
        }),
      },
    )

    if (res.ok) {
      setIsLoading(false)
      setLiked(!liked)
    } else {
      const data = await res.json()
      setIsLoading(false)
      setErrorMessage(data.message)
    }
  }

  return (
    <div className="m-2">
      <button
        className={cn(
          'flex items-center gap-1 rounded-2xl border-2 border-gray-400 p-2 text-gray-400 transition duration-150 hover:border-red-400 hover:text-red-400',
          liked && 'border-red-400 bg-red-400 text-white hover:text-white',
        )}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? <SpinnerIcon /> : <HeartIcon />}
        <span>Like</span>
      </button>
      {errorMessage}
    </div>
  )
}
