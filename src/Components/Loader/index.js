import React from 'react'
import { Loader } from './style'

const index = ({normal, className}) => {
  return (
    <Loader normal={normal} className={className}>
      <div className="loader" />
    </Loader>
  )
}

export default index
