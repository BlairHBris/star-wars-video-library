const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
const spinner = document.querySelector(".spinner")
const movieDiv = document.querySelector(".movie")
const ul = document.querySelector(".characters")
const api = "https://swapi.dev/api/films/"

const episodeIDMap = {
    1: 4,
    2: 5,
    3: 6,
    4: 1,
    5: 2,
    6: 3
}

function addFilm(film) {
    movieDiv.innerHTML = `
    <img src="${film.poster}" alt="${film.title}"/>
    <a href="movie.html?movie=${film.title}">${film.title}</a>
    <time>${film.release_date}</time>
    <div>${film.opening_crawl}</div>
    `
}

function addCharacters(character) {
    const li = document.createElement("li")
    li.innerHTML = `${character.name}`
    ul.append(li)
}

const movieID = episodeIDMap[queryString.get("movie")]
console.log(movieID)


fetch(`https://swapi.dev/api/films/${movieID}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        if (movieID == 1) {
            parsedResponse.poster = "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        }
        if (movieID == 2) {
            parsedResponse.poster = "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        }
        if (movieID == 3) {
            parsedResponse.poster = "https://m.media-amazon.com/images/M/MV5BMTBhNDhiOWYtNTc2NC00ZmRiLWI5ZGQtNDhmNTkxOGYyZWNhXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_SX300.jpg"
        }
        if (movieID == 4) {
            parsedResponse.poster = "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        }
        if (movieID == 5) {
            parsedResponse.poster = "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
        }
        if (movieID == 6) {
            parsedResponse.poster = "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
        }
        addFilm(parsedResponse)
        console.log(parsedResponse)
        const charactersRequests = parsedResponse.characters
            .map(url => {
                return fetch(url).then(response => response.json())
            })
        return Promise.all(charactersRequests)
    }).then(parsedResponses => {
        spinner.classList.add("hidden")
        parsedResponses.forEach(parsedResponse => {
            addCharacters(parsedResponse)
        })
    })



