const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", () => {
    //console.log(password.value.length)

    const blurValue = 20 - password.value.length;
    // console.log(blurValue)

    background.style.filter = `blur(${blurValue}px)`    
})