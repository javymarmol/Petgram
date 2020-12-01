import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const IconLiked = liked ? AiFillHeart : AiOutlineHeart

  return (
    <Button onClick={onClick}>
      <IconLiked size='32px' /> {likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
