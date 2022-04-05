const api = "https://swapi.dev/api/films/"
const spinner = document.querySelector(".spinner")
const movieListings = document.querySelector(".movie-listings")


function addFilm(film) {
    const div = document.createElement("div")
    div.classList.add("movie-listing")
    div.innerHTML = `
    <a href="swapi.dev?film=${film.title}">${film.title}</a>
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
        console.log(responses)
        spinner.classList.add("hidden")
        responses.forEach(response => {
            addFilm(response)
        })
    })
