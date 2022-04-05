const api = "https://swapi.dev/api/films/"
const spinner = document.querySelector(".spinner")
const movieListings = document.querySelector(".movie-listings")
const newHope = "http://www.omdbapi.com/?t=star+wars&apikey=b5743b67"
const empire = "http://www.omdbapi.com/?t=empire+strikes+back&apikey=b5743b67"
const returnOfTheJedi = "http://www.omdbapi.com/?t=return+of+the+jedi&apikey=b5743b67"
const phantom = "http://www.omdbapi.com/?t=phantom+menace&apikey=b5743b67"
const clones = "http://www.omdbapi.com/?t=attack+of+the+clones&apikey=b5743b67"
const revenge = "http://www.omdbapi.com/?t=revenge+of+the+sith&apikey=b5743b67"


function addFilm(film) {
    const div = document.createElement("div")
    div.classList.add("movie-listing")
    div.innerHTML = `
    <a href="swapi.dev?film=${film.title}">${film.title}</a>
    <time>${film.release_date}</time>
    `
    movieListings.append(div)
}

function addPicture(film) {
    const img = document.createElement("img")
    img.src = `${film.Poster}`
    movieListings.append(img)
}

fetch(api)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        const urls = parsedResponse.results.map(result => result.url)
        const fetches = urls.map(url => fetch(url).then(response => response.json()))
        return Promise.all(fetches)
    }).then(responses => {
        spinner.classList.add("hidden")
        responses.forEach(response => {
            addFilm(response)
        })
    })

fetch(newHope)
    .then(response => {
        return response.json()
    }).then(response => {
        console.log(response)
        addPicture(response)
    })

fetch(empire)
    .then(response => {
        return response.json()
    }).then(response => {
        console.log(response)
        addPicture(response)
    })
