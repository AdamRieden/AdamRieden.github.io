const mediaFiles = [
    { type: "image", src: "images/roguelike/spells/Windsword.png" },
    { type: "image", src: "images/roguelike/spells/Resonatingcircles.png" },
    { type: "image", src: "images/roguelike/spells/Horn.png" },
    { type: "image", src: "images/roguelike/spells/Shields.png" },
    { type: "image", src: "images/roguelike/spells/Eye.png" },
    { type: "image", src: "images/roguelike/spells/Moon.png" },
    { type: "image", src: "images/roguelike/spells/Sun.png" },
    { type: "image", src: "images/roguelike/spells/Watcher.png" }
];

let currentIndex = 0;
const display = document.getElementById("media-display");
const dotsContainer = document.getElementById("media-dots");
let autoCycleInterval;

/* ===== Create Dots ===== */
mediaFiles.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "media-dot";
    dot.onclick = () => {
        currentIndex = index;
        showMedia();
        resetAutoCycle();
    };
    dotsContainer.appendChild(dot);
});

/* ===== Show Media With Fade ===== */
function showMedia() {
    display.innerHTML = "";
    const item = mediaFiles[currentIndex];

    let element;
    if (item.type === "image") {
        element = document.createElement("img");
        element.src = item.src;
    } else {
        element = document.createElement("video");
        element.src = item.src;
        element.autoplay = true;
        element.loop = true;
        element.muted = true;
    }

    element.className = "media-item";
    display.appendChild(element);

    updateDots();
}

/* ===== Navigation ===== */
function nextMedia() {
    currentIndex = (currentIndex + 1) % mediaFiles.length;
    showMedia();
    resetAutoCycle();
}

function prevMedia() {
    currentIndex = (currentIndex - 1 + mediaFiles.length) % mediaFiles.length;
    showMedia();
    resetAutoCycle();
}

/* ===== Dot State ===== */
function updateDots() {
    document.querySelectorAll(".media-dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

/* ===== Auto Cycling ===== */
function startAutoCycle() {
    autoCycleInterval = setInterval(() => {
        nextMedia();
    }, 4000);   // ✅ Change every 4 seconds
}

function resetAutoCycle() {
    clearInterval(autoCycleInterval);
    startAutoCycle();
}

/* ===== Init ===== */
showMedia();
startAutoCycle();