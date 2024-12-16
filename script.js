const container = document.querySelector("#container");

//let sq = prompt("enter the number of n x n square grids to be created (max  - 100) ");

function makeDivs(nDivs){
    for(let i = 0; i<nDivs; i++){
        let rows = document.createElement("div");
        rows.classList.add('rows');
        for(let j = 0; j<nDivs;j++){
            let cols = document.createElement("div");
            cols.classList.add("cols");

            cols.addEventListener("mouseover", () => {
                cols.style.backgroundColor="red";
            })
            rows.appendChild(cols);
        }
        container.appendChild(rows);
    }
}

const rBtn = document.querySelector("#reset");
const cBtn = document.querySelector("#clear");

cBtn.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "";
})


//makeDivs(sq);
makeDivs(16);


