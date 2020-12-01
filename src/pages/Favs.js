import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Yours Favorites' subtitle='Here are yours favorites'>
    <FavsWithQuery />
  </Layout>
)
