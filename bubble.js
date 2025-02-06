function makebubble() {
    let clutter = "";
    for (let i = 1; i <= 200; i++) {
        let num = Math.floor(Math.random() * 10);
        clutter += `<div id="bubble">${num}</div>`;

    };
    document.querySelector("#pbtm").innerHTML = clutter;
}

let timer = 30;
function timerun() {
    setInterval(function () {
        document.querySelector("#p2").innerText = timer;
        if (timer >= 1) { timer--; }
    }, 1000)
}
let usernumm = function usernum() {
    document.getElementById("#bubble").addEventListener("click", usernumm)
}
console.log(usernumm);

let score = 0;
function incscore() {
    score += 10;
    document.querySelector("#p3").innerText = score;
}
let r;
function newhit() {
    r = Math.floor(Math.random() * 10);
    document.querySelector("#p1").innerText = r;
}
let userhit;
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    let userhit = (Number(dets.target.innerText));
    if (userhit === r&&timer>0) {
        incscore();
        makebubble();
        newhit();
    }
})
timerun();
newhit();
makebubble();

