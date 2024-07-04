import React from 'react'
import { ContainerStyleWrapper } from './style'

const Container = ({children}) => {
  return (
    <ContainerStyleWrapper>
      {children}
    </ContainerStyleWrapper>
  )
}

export default Container
