const mediaFiles = [
    { image:"images/roguelike/spells/Windsword.png", video: "videos/WindSwordDemo.mp4" },
    { image: "images/roguelike/spells/Resonatingcircles.png", video: "videos/ResCircDemo.mp4" },
    { image: "images/roguelike/spells/Horn.png", video: "videos/SpartHornDemo.mp4" },
    { image: "images/roguelike/spells/Shields.png", video: "videos/ShieldsDemo.mp4" },
    { image: "images/roguelike/spells/Eye.png", video: "videos/GorgonEyeDemo.mp4" },
    { image: "images/roguelike/spells/Moon.png", video: "videos/MoonDemo.mp4" },
    { image: "images/roguelike/spells/Sun.png", video: "videos/SunPeopleDemo.mp4" },
    { image: "images/roguelike/spells/Watcher.png", video: "videos/WatcherDemo.mp4" }
    ];
    
let currentIndex = 0;

const imageDisplay = document.getElementById("media-image");
const videoDisplay = document.getElementById("media-video");
const dotsContainer = document.getElementById("media-dots");

/* ===== Create Dots ===== */
mediaFiles.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "media-dot";
    dot.onclick = () => {
        currentIndex = index;
        showMedia();
    };
    dotsContainer.appendChild(dot);
});

/* ===== Render Media Pair ===== */
function showMedia() {
    imageDisplay.innerHTML = "";
    videoDisplay.innerHTML = "";

    const item = mediaFiles[currentIndex];

    // Image
    const img = document.createElement("img");
    img.src = item.image;
    imageDisplay.appendChild(img);

    // Video
    const video = document.createElement("video");
    video.src = item.video;
    video.controls = true;     // ✅ Let user scrub
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;

    // Auto-advance when video finishes
    video.onended = () => {
        nextMedia();
    };

    videoDisplay.appendChild(video);

    updateDots();
}

/* ===== Controls ===== */
function nextMedia() {
    currentIndex = (currentIndex + 1) % mediaFiles.length;
    showMedia();
}

function prevMedia() {
    currentIndex = (currentIndex - 1 + mediaFiles.length) % mediaFiles.length;
    showMedia();
}

/* ===== Dots ===== */
function updateDots() {
    document.querySelectorAll(".media-dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

/* ===== Init ===== */
showMedia();