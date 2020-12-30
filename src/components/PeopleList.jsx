import React from 'react'
import Person from './Person'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 95%;
`

export default function PeopleList(props) {
  const { people } = props
  return (
    <StyledDiv>
      {
        people.map((person, index) => {
          return <Person key={index} personData={person}/>
        })
      }
    </StyledDiv>
  )
}