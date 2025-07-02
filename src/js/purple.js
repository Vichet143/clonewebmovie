export function purple() {
    const nav = document.querySelector("header");
    const body = document.querySelector("body")

    nav.classList.add("bg-white", "dark:bg-gray-950");
    nav.classList.remove("deepin");
    body.classList.add("bgbody")
    body.classList.remove("bgbodyw")
    const colorcards = document.querySelectorAll(".card");
    colorcards.forEach(card => {
        card.classList.remove("bg-white");
        card.classList.add("bg-card");
    });

}