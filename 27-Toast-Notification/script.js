const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");

const message = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four"
];

const types = [
    "info",
    "success",
    "error"
];

btn.addEventListener("click", () => createNotification());

function createNotification(){

    // toasts.innerHTML = `
    //      <div class="toast">${getRandomMessage()}</div>
    // `;

    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add(getRandomTypes());
    toast.innerText = getRandomMessage();
    toasts.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000)


}

function getRandomMessage(){
    const random = Math.floor(Math.random() * message.length);
    return message[random];
}

function getRandomTypes(){
    const random = Math.floor(Math.random() * types.length);
    return types[random];
}