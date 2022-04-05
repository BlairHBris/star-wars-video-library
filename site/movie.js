const url = new URL(window.location)
const query = new URLSearchParams(url.search)

fetch(`https://swapi.dev/${query.get("pokemon")}`)