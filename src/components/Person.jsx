import React, { useState } from 'react'

export default function Person(props) {
  const { name, gender, height, mass } = props.personData
  const [showMore, setShowMore] = useState(false)

  function clickOnName() {
    setShowMore(!showMore)
  }

  return (
    <div>
      <h4 onClick={clickOnName}>{name}</h4>
      <div className={showMore ? 'show' : 'hide'}>
        <p >{gender}</p>
        <p className="blue">{height}</p>
        <p>{mass}</p>
      </div>
    </div>
  )
}