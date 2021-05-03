const apiBaseUrl = 'https://swapi.dev/api'
const peopleUrl = `${apiBaseUrl}/people`
const searchUrl = `${apiBaseUrl}/people/?search=`


// Fetch list of Star Wars people
// Parameter: peopleUrl as default but it will use
// next and previous url pagination from SWAPI
async function fetchPeople(url = peopleUrl) {
  return fetch(url)
  .then( res => res.json())
  .then( data => data)
  .catch(error =>{
    console.log('Error on fetchPeople', error);
    return
  })
}

async function fetchSearchPeople(toSearch) {
  const url = `${searchUrl}${toSearch}`
  return fetch(url)
  .then( res => res.json())
  .then( data => data)
  .catch(error =>{
    console.log('Error on fetchSearchPeople', error);
    return
  })
}

export {
  fetchPeople,
  fetchSearchPeople
}