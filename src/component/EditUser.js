import React from 'react'
import { useParams } from 'react-router-dom'

export const EditUser = () => {
    let params=useParams()
  return (
      <>
          <h1>EditUser {params.id}</h1>
      </>
  )
}
