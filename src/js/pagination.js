const pre = document.querySelector('#button');
const next = document.querySelector('#next');

let index = 0;

pre.addEventListener('click', () => {
    index = index - 4;
    console.log("Previous clicked. Current index:", index);
});

next.addEventListener('click', () => {
    index = index + 4;
    console.log("Next clicked. Current index:", index);
});
