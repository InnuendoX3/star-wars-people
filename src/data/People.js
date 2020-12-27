const apiBaseUrl = 'https://swapi.dev/api'
const peopleUrl = `${apiBaseUrl}/people`

/* 
  Fetch list of Star Wars people
  Parameter: peopleUrl as default but it will use
  next and previous url pagination from SWAPI
*/
function fetchPeople(url = peopleUrl) {
  fetch(url)
  .then( res => res.json())
  .then( data => {
    console.log('data', data)
    //return data
  })
}

module.exports = {
  fetchPeople
}