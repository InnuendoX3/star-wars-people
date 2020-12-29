import React, { useState, useEffect } from 'react'

export default function Person(props) {
  const { name, gender, height, eye_color } = props.personData
  const [showMore, setShowMore] = useState(false)

  function clickOnName() {
    setShowMore(!showMore)
  }

  /* Prevent continue displaying the hide-information 
  on this component after pagination */
  useEffect(() => {
    setShowMore(false)
  }, [name])

  return (
    <div>
      <h4 onClick={clickOnName}>{name}</h4>
      <div className={showMore ? 'show' : 'hide'}>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Eye color: {eye_color}</p>
      </div>
    </div>
  )
}