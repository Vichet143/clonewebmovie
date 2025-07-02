
const deeppurple = document.querySelector("#radio1")
const indigo = document.querySelector("radio2")
const pink = document.querySelector("#radio3")
const purple = document.querySelector("radio4")

export function deep() {
    const nav = document.querySelector("header");
    const body = document.querySelector("body")

    nav.classList.add("deepin");
    nav.classList.remove("bg-white", "dark:bg-gray-950");
    body.classList.add("bgbodyw")
    const colorcards = document.querySelectorAll(".card");
    colorcards.forEach(card => {
        card.classList.remove("bg-card");
        card.classList.add("bg-white");
    });

}


