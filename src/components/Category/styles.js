import React from 'react'
import styled, { css } from 'styled-components'
import { skeletonStyle } from '../../styles/animation'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(({ skeleton, ...props }) => <LinkRouter {...props} />)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  ${props => props.skeleton && css`
    ${skeletonStyle(props.skeleton)}
  `}
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
  ${props => props.skeleton && css`
    ${skeletonStyle(props.skeleton)}
  `}
`
