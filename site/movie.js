const url = new URL(window.location)
const query = new URLSearchParams(url.search)
const swapi = "https://swapi.dev/api/films/"




fetch(`https://swapi.dev/api/films/${query.get("films")}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        console.log(parsedResponse)
        const urls = parsedResponse.results.map(result => result.url)
        const fetches = urls.map(url => fetch(url).then(response => response.json()))
        return Promise.all(fetches)
    }).then(responses => {
        spinner.classList.add("hidden")
        responses.forEach(response => {
            addFilm(response)
        })
    })