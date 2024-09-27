const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let setint
const startchange = function(){
    setint = (setInterval(changebg, 1000))
    function changebg (){document.body.style.backgroundColor = randomcolor()
}
};
const stopchange = function(){
    clearInterval(setint)
}
document.querySelector("#start").addEventListener("click", startchange)
document.querySelector("#stop").addEventListener("click",stopchange)