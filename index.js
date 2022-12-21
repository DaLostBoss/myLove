let countEl= document.getElementById("count-el")
let count = 0

function addLove() {
countEl.innerText= count
count += 1
}
function reset() {
    count=0
    countEl.innerText=count
}
