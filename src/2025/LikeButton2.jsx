import { useState, useEffect, useRef, useCallback } from 'react'
import { HeartIcon, SpinnerIcon } from '../LikeButton/icons'
import { cn } from '../util'

const LikeButton2 = () => {
  const [liked, setLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)

    const response = await fetch(
      'https://www.greatfrontend.com/api/questions/like-button',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: liked ? 'unlike' : 'like',
        }),
      },
    )

    response.status === 200 && setLiked(!liked)
    setIsLoading(false)
  }

  return (
    <button
      className={cn(
        'flex items-center gap-2 rounded-2xl border-2 p-2 duration-100 hover:border-red-500 hover:text-red-500',
        liked && 'border-red-500 bg-red-500 text-white hover:text-white',
      )}
      onClick={handleClick}
    >
      {isLoading ? <SpinnerIcon /> : <HeartIcon />}
      Like
    </button>
  )
}

export default LikeButton2
