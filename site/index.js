const api = "https://swapi.dev/api/films/"
const spinner = document.querySelector(".spinner")
const movieListings = document.querySelector(".movie-listings")

function addFilm(film) {
    const div = document.createElement("div")
    div.classList.add("movie-listing")
    div.innerHTML = `
    <img src="${film.poster}" alt="${film.title}"/>
    <a href="movie.html?movie=${film.episode_id}">${film.title}</a>
    <time>${film.release_date}</time>
    `
    movieListings.append(div)
}

fetch(api)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        const urls = parsedResponse.results.map(result => result.url)
        const fetches = urls.map(url => fetch(url).then(response => response.json()))
        return Promise.all(fetches)
    }).then(responses => {
        responses[0].poster = "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        responses[1].poster = "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        responses[2].poster = "https://m.media-amazon.com/images/M/MV5BMTBhNDhiOWYtNTc2NC00ZmRiLWI5ZGQtNDhmNTkxOGYyZWNhXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_SX300.jpg"
        responses[3].poster = "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        responses[4].poster = "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
        responses[5].poster = "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
        console.log(responses)
        spinner.classList.add("hidden")
        responses.forEach(response => {
            addFilm(response)
        })
    })