const url = new URL(window.location)
const query = new URLSearchParams(url.search)
const swapi = "https://swapi.dev/api/films/"




// fetch(swapi)
//     .then(response => {
//         return response.json()
//     }).then(parsedResponse => {
//         const urls = parsedResponse.results.map(result => result.url)
//         const fetches = urls.map(url => fetch(url).then(response => response.json()))
//         return Promise.all(fetches)
//     }).then(responses => {
//         spinner.classList.add("hidden")
//         responses.forEach(response => {
//             addFilm(response)
//         })
//     })

fetch(`https://swapi.dev/api/films/${query.get("film")}`)
const query = new URLSearchParams(url.search)