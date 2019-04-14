const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = {crossDomain: true}

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url  = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
    .get(url, OPTS, function (data) {
      resolve(data)
    })
    .fail( () => reject(id)) 
  })
}

function onError(id) {
  console.log(`sucedio un error al obtener al personaje ${id}`)
}

obtenerPersonaje(1)
  .then(function (persona) {
    console.log(`El personaje 1 es ${persona.name}`)
  })
  .catch(onError)


