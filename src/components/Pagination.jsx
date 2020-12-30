import React from 'react'
import styled from 'styled-components'

import SmallButton from '../components/styled/SmallButton'

const StyledSpan = styled.span`
  font-size: 18px;
  padding: 0 5px;
`
const StyledDiv = styled.div`
  padding: 10px 5px;
  min-width: 90px;
`

export default function Pagination(props) {
  const { previousUrl,
    totalPages,
    nextUrl,
    handlePrevious,
    handleNext,
    currentPage } = props

  return (
    <StyledDiv>
      <SmallButton className={previousUrl ? 'visible' : 'invisible'} onClick={handlePrevious}>&lt;</SmallButton>
      <StyledSpan>{currentPage}/{totalPages}</StyledSpan>
      <SmallButton className={nextUrl ? 'visible' : 'invisible'} onClick={handleNext}>&gt;</SmallButton>
    </StyledDiv>
  )
}