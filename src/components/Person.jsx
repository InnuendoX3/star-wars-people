import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Name = styled.div`
  background-color: #14274e;
  color: #f1f6f9;
  width: 100%;
  padding: 5px 0;
  text-align: center;
  font-size: 18px;
`
const Info = styled.div`
  background-color: #394867;
  color: #f1f6f9;
  width: 100%;
  padding: 5px 0;
  text-align: center;
  font-size: 18px;
`

export default function Person(props) {
  const { name, gender, height, eye_color } = props.personData
  const [showMore, setShowMore] = useState(false)

  function clickOnName() {
    setShowMore(!showMore)
  }

  // Prevent continue displaying the hide-information 
  // on this component after pagination
  useEffect(() => {
    setShowMore(false)
  }, [name])

  return (
    <Card onClick={clickOnName}>
      <Name>{name}</Name>
      <Info className={showMore ? 'show' : 'hide'}>
        <div> <small>Gender:</small> {gender}</div>
        <div> <small>Height:</small> {height}</div>
        <div> <small>Eye color:</small> {eye_color}</div>
      </Info>
    </Card>
  )
}