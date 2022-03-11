import React from 'react'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const {params} = router.query
  // console.log('params', params)

  return (
    <h1>Hello : {params}</h1>
  )
}