import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Pets pictures app' subtitle='Find pets pictures'>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId} />
    </Layout>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
