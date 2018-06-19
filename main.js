


function turnOn(e){
    if(e.target.id.includes("kick") || e.target.id.includes("snare") || e.target.id.includes("hat")){
        if(e.target.classList == "on"){
            e.target.classList = ""
        } else {
            e.target.classList = "on"
        }
    }
}

let a = function(){
    let f= document.createElement("div");
    f.style.width = "50px";
    f.style.height = "50px";
    f.style.border = "1px solid black";
    f.style.margin = "2px";
    f.addEventListener("click", turnOn)
    return f;
}

for(let i = 1; i < 33; i++){
    let b = a();
    b.id = i.toString();
    document.getElementById("counterS").appendChild(b)

    let c = a();
    c.id = "hat" + i.toString();
    document.getElementById("hat").appendChild(c);

    let d = a();
    d.id = "snare" + i.toString();
    document.getElementById("snare").appendChild(d);

    let e = a();
    e.id = "kick" + i.toString();
    document.getElementById("kick").appendChild(e);
}

let b = "1";
var g = 0;
let c = function(){
    var kick = new Audio('kick.wav');
    var hat = new Audio('hat.wav');
    var snare = new Audio('snare.wav');

    for(let i =1; i < 33; i ++){
        document.getElementById(i.toString()).classList = "";
    }
    document.getElementById(b).className = "active";
    b = parseInt(b);
    console.log("ok: ", document.getElementById("hat" + b.toString()))
    if(document.getElementById("hat" + b.toString()).className === "on"){
        hat.play();
    }
    if(document.getElementById("kick" + b.toString()).className === "on"){
        kick.play();
    }
    if(document.getElementById("snare" + b.toString()).className === "on"){
        snare.play();
    }

    b++;
    

    if(b == 33){
        b=1
    }
    b = b.toString();
    console.log("check")
}

setInterval(function(){c()}, 125)