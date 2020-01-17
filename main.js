const iconsTable = [`<i class="far fa-bell"></i>`,
    `<i class="fas fa-cat"></i>`, `<i class="fas fa-carrot"></i>`
];
const btn = document.querySelector("button");
const iconOne = document.querySelector("div div:nth-child(1)");
const iconTwo = document.querySelector("div div:nth-child(2)");
const iconThree = document.querySelector("div div:nth-child(3)");
const sectionAlert = document.querySelector("section p");
const divWrap = document.querySelector("div.wrapper");
const asideScore = document.querySelector("aside");
// const asideScoreTwo = document.querySelector("aside p:nth-child(2)");
let buttonClick = 0;
let luckyNumberOne;
let luckyNumberTwo;
let luckyNumberThree;
let roundNumber = 0;
let wonNumber = 0;


btn.addEventListener("click",
    () => {
        if (buttonClick < 1) {
            buttonClick++
            btn.innerHTML = "STOP"
            divWrap.classList.remove("displayTwo");


            loopInterval = setInterval(() => {

                luckyNumberOne = Math.floor(Math.random() * iconsTable.length);

                iconOne.innerHTML = iconsTable[luckyNumberOne];

                luckyNumberTwo = Math.floor(Math.random() * iconsTable.length);

                iconTwo.innerHTML = iconsTable[luckyNumberTwo];

                luckyNumberThree = Math.floor(Math.random() * iconsTable.length);

                iconThree.innerHTML = iconsTable[luckyNumberThree];

                sectionAlert.innerHTML = ``;





            }, 300)

        } else {
            clearInterval(loopInterval);
            buttonClick = 0;
            btn.innerHTML = "GRAJ";
            roundNumber++

            if (luckyNumberOne == luckyNumberTwo && luckyNumberOne == luckyNumberThree) {
                sectionAlert.innerHTML = `<p class="score">Wygrales!</>`;
                wonNumber++;
            } else {
                sectionAlert.innerHTML = `<p class="score">pudlo</>`;
            }


            divWrap.classList.add("displayTwo");
            asideScore.innerHTML = `<p>rundy:${roundNumber}</p> <p>wygrane:${wonNumber}</p> `;


        }




    })