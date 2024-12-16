

const container = document.querySelector("#container");

let sq = prompt("enter the number of n x n square grids to be created (max: 100) ");
if(sq==NaN || sq < 1 || sq > 100){
    alert("Invalid input, Default value 16 is set. If you wish to Change click the Reset Button");
    sq = 16;
}
else{
    sq = Number(sq);
}

makeDivs(16);

function randomColors() {
    const colorsArray = ["#ff3300", "#009900", "#ffff00", "#00cc99", "#0033cc", "#66ffff",
        "#ff00ff", "#ff0066", "#ff6600", "#996600"
    ];
    
    const randomArray = Math.floor(Math.random()*colorsArray.length);
    return colorsArray[randomArray];
}

function makeDivs(nDivs){
    container.innerHTML = "";

    for(let i = 0; i<nDivs; i++){
        let rows = document.createElement("div");
        rows.classList.add('rows');
        for(let j = 0; j<nDivs;j++){
            let cols = document.createElement("div");
            cols.classList.add("cols");

            cols.addEventListener("mouseover", () => {
                cols.style.backgroundColor= randomColors();
            })
            rows.appendChild(cols);
        }
        container.appendChild(rows);
    }
}

const cBtn = document.querySelector("#clear");
cBtn.addEventListener("click", () => {
    const cols = document.querySelectorAll(".cols");
    cols.forEach(cols => {
        cols.style.backgroundColor = "";
    });
});

const rBtn = document.querySelector("#gridReset");
rBtn.addEventListener("click", () => {
    let sqNew = prompt("enter the num of squares the grid has to reset. (max : 100)");
    if(sqNew == NaN || sqNew < 1 || sqNew > 100){
        alert("Invalid Number.");
        return;
    }
    makeDivs(Number(sqNew));
});











