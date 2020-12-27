import React, { useEffect } from 'react'
import { fetchPeople } from '../data/People'

export default function People() {
  
  useEffect( () => {
    fetchPeople()
  }, [])

  return (
    <h2>People list page</h2>
  )
}