
const contentEl = document.querySelectorAll(".content");
console.log(contentEl);

const liEl = document.querySelectorAll("li");


// liEl.forEach((item, idx) => {
//     item.addEventListener("click", () => {
//         hideAllContents();
//         hideAllListItems();

//         item.classList.add("active");
//         contentEl[idx].classList.add("show");
//     })
// })

// function hideAllContents(){
//     contentEl.forEach(content => content.classList.remove("show"));
// }

// function hideAllListItems(){
//     liEl.forEach(item => item.classList.remove("active"));
// }

liEl.forEach((item, idx) => {
    item.addEventListener("click", () => {

        liEl.forEach(item => item.classList.remove("active"));
        contentEl.forEach(item => item.classList.remove("show"));

        item.classList.add("active");
        contentEl[idx].classList.add("show");
    })
})