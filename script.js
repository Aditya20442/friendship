// ================= Buttons & Pages =================

const startBtn = document.getElementById("startBtn");
const heroPage = document.getElementById("heroPage");

const letterPage = document.getElementById("letterPage");
const letterText = document.getElementById("letterText");
const letterNext = document.getElementById("letterNext");

const scratchPage = document.getElementById("scratchPage");
const scratchNext = document.getElementById("scratchNext");
const memoryPage = document.getElementById("memoryPage");
const memoryNext = document.getElementById("memoryNext");
const finalPage = document.getElementById("finalPage");
const replayBtn = document.getElementById("replayBtn");

// Music
const bgMusic = document.getElementById("bgMusic");


// ================= Friendship Letter =================

const message = `Hai Gopika ❤️✨

En life la kidaicha romba special ana oru gift nee 🤍🫂

15 years ah en kooda irundhu, friend ah mattum illaama en family la oru person madhiri en life la oru mukkiyamaana place eduthuruka ❤️.

Nan happy ah erunthalum sari, sad ah erunthalum sari... nee dhaan first share panura person en life la. 😊🥺🤝

Nambaloda friendship ah "I can't explain in a single word." ❤️✨

Namma friendship la sandaigal irundhaalum 😅
Misunderstandings vandhaalum 🥲
Namma bond eppavum strong ah dhaan irukkum. 🤞❤️

En last breath varaikum 🫂❤️
Namma friendship idhe same bond,
same care,
same understanding oda continue aaganum nu aasai paduren. 🥹♾️

Happy Friendship Day d Gopika 🤍🌸❤️`;

let index = 0;



// ================= Open Letter =================

startBtn.addEventListener("click", () => {

    // Music starts immediately
    bgMusic.currentTime = 0;
    bgMusic.volume = 0.15;

    bgMusic.play().then(() => {
        console.log("Music Started");
    }).catch(err => {
        console.log(err);
    });

    // Open Letter Page
    heroPage.classList.add("hidden");
    letterPage.classList.remove("hidden");

    letterText.innerHTML = "";
    index = 0;

    typeWriter();

});
// ================= Typewriter =================

function typeWriter(){

    if(index < message.length){

        letterText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

// ================= Letter → Scratch =================

letterNext.addEventListener("click",()=>{

    letterPage.classList.add("hidden");

    scratchPage.classList.remove("hidden");

});

// ================= Flip Cards =================

const flipCards=document.querySelectorAll(".flip-card");

flipCards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.classList.toggle("flipped");

    });

});

// ================= Next Button =================

scratchNext.addEventListener("click", () => {

    scratchPage.classList.add("hidden");

    memoryPage.classList.remove("hidden");

    const items = document.querySelectorAll(".fade-item");

    items.forEach((item,index)=>{

        setTimeout(()=>{

            item.classList.add("show");

        },index*1200);

    });

});
memoryNext.addEventListener("click", () => {

    memoryPage.classList.add("hidden");

    finalPage.classList.remove("hidden");

    if(bgMusic){
        bgMusic.volume = 0.15;
    }

    createHearts();

});
// ================= REPLAY =================

replayBtn.addEventListener("click", () => {

    location.reload();

});

// ================= FLOATING HEARTS =================

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.bottom="-30px";
        heart.style.fontSize=(20+Math.random()*20)+"px";
        heart.style.pointerEvents="none";
        heart.style.zIndex="9999";
        heart.style.transition="transform 6s linear, opacity 6s linear";
        heart.style.opacity="1";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform="translateY(-110vh)";
            heart.style.opacity="0";

        },100);

        setTimeout(()=>{

            heart.remove();

        },6000);

    },600);

}
// ================= LOADER =================

// ================= LOADER =================

window.addEventListener("load", () => {

    // Try autoplay while loader is visible
    if (bgMusic) {
        bgMusic.volume = 0.15;

        bgMusic.play().catch(() => {
            console.log("Autoplay blocked. Music will start on first button click.");
        });
    }

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2500);

});