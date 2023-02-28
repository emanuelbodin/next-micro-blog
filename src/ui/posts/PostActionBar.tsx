'use client'
import { useState } from 'react'
import Icon from '../icons/Icon'

export default function PostActionBar() {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <div className="flex flex-row gap-4">
      <Icon
        iconName="heart"
        color={isLiked ? 'pink-active' : 'pink-inactive'}
        onClick={() => setIsLiked((liked) => !liked)}
      />
      <Icon iconName="comment" color="green-inactive" />
    </div>
  )
}
