
const input = document.querySelector("#input")
const search = document.querySelector("#search")
const container = document.querySelector(".container-img")

search.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = search.input.value;
    console.log(query);

    if (query) {
        container.innerHTML = ""; // Clear previous results before fetching new ones
        tv(query);
    }
})

async function tv(query) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const makem = await res.json();
    console.log(makem);
    makeimg(makem);

}

export function makeimg(movies) {
    for (let movie of movies) {
        if (movie.show && movie.show.image && movie.show.image.medium && movie.show.name) {
            let src = movie.show.image.medium;
            let name = movie.show.name;
            let url = `https://www.tvmaze.com/shows/${movie.show.id}`;
            const img = document.createElement("img")
            const div = document.createElement("div")
            const link = document.createElement("a")
            link.href = url;
            div.classList.add("all")
            const p = document.createElement("p")
            img.src = src;
            p.textContent = name;
            container.appendChild(link);
            link.appendChild(div);
            div.appendChild(img);
            div.appendChild(p);
        }
        else {
            console.log("movie doesn't have the show property:", movie);
        }
    }
}