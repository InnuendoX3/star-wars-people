const apiBaseUrl = 'https://swapi.dev/api'
const peopleUrl = `${apiBaseUrl}/people`
const searchUrl = `${apiBaseUrl}/people/?search=`


// Fetch list of Star Wars people
// Parameter: peopleUrl as default but it will use
// next and previous url pagination from SWAPI
async function fetchPeople(url = peopleUrl) {
  console.log('fetchPeople url', url)
  return fetch(url)
  .then( res => res.json())
  .then( data => {
    console.log('fetchPeople data', data)
    return data
  } )
}

async function fetchSearchPeople(toSearch) {
  const url = `${searchUrl}${toSearch}`
  return fetch(url)
  .then( res => res.json())
  .then( data => data )
}

export {
  fetchPeople,
  fetchSearchPeople
}