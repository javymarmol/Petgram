import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '', emoji = '?', skeleton = false }) => (
  <Link to={path} skeleton={skeleton}>
    <Image src={cover} skeleton={skeleton} />
    {emoji}
  </Link>
)
