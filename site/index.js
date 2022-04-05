const api = "https://swapi.dev/api/films/"
const spinner = document.querySelector(".spinner")
const movieListings = document.querySelector(".movie-listings")
const newHope = "http://www.omdbapi.com/?t=star+wars&apikey=b5743b67"
const empire = "http://www.omdbapi.com/?t=empire+strikes+back&apikey=b5743b67"
const returnOfTheJedi = "http://www.omdbapi.com/?t=return+of+the+jedi&apikey=b5743b67"
const phantom = "http://www.omdbapi.com/?t=phantom+menace&apikey=b5743b67"
const clones = "http://www.omdbapi.com/?t=Star+Wars%3A+Episode+II-+Attack+of+the+Clones&apikey=b5743b67"
const revenge = "http://www.omdbapi.com/?t=revenge+of+the+sith&apikey=b5743b67"





function addFilm(film) {
    const div = document.createElement("div")
    div.classList.add("movie-listing")
    div.innerHTML = `
    <img src="${film.Poster}" alt="${film.Title}"/>
    <a href="movie.html?movie=${film.Title}">${film.Title}</a>
    <time>${film.Year}</time>
    `
    movieListings.append(div)
}

fetch(newHope)
    .then(response => {
        return response.json()
    }).then(response => {
        spinner.classList.add("hidden")
        addFilm(response)
    })

fetch(empire)
    .then(response => {
        return response.json()
    }).then(response => {
        spinner.classList.add("hidden")
        addFilm(response)
    })
fetch(returnOfTheJedi)
    .then(response => {
        return response.json()
    }).then(response => {
        spinner.classList.add("hidden")
        addFilm(response)
    })
fetch(phantom)
    .then(response => {
        return response.json()
    }).then(response => {
        spinner.classList.add("hidden")
        addFilm(response)
    })
fetch(clones)
    .then(response => {
        return response.json()
    }).then(response => {
        spinner.classList.add("hidden")
        addFilm(response)
    })
fetch(revenge)
    .then(response => {
        return response.json()
    }).then(response => {
        spinner.classList.add("hidden")
        addFilm(response)
    })