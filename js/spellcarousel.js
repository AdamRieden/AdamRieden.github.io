class MediaViewer {
    constructor(container, mediaFiles) {
        this.container = container;
        this.mediaFiles = mediaFiles;
        this.currentIndex = 0;
        
        // Find elements within this specific container
        this.imageDisplay = container.querySelector('.media-image');
        this.videoDisplay = container.querySelector('.media-video');
        this.controlsContainer = container.nextElementSibling; // Get the controls div
        this.dotsContainer = this.controlsContainer.querySelector('.media-dots');
        this.prevBtn = this.controlsContainer.querySelector('.media-prev');
        this.nextBtn = this.controlsContainer.querySelector('.media-next');
        
        this.init();
    }
    
    init() {
        this.createDots();
        this.attachEventListeners();
        this.showMedia();
    }
    
    createDots() {
        this.mediaFiles.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'media-dot';
            dot.onclick = () => {
                this.currentIndex = index;
                this.showMedia();
            };
            this.dotsContainer.appendChild(dot);
        });
    }
    
    attachEventListeners() {
        this.prevBtn.onclick = () => this.prevMedia();
        this.nextBtn.onclick = () => this.nextMedia();
    }
    
    showMedia() {
        this.imageDisplay.innerHTML = '';
        this.videoDisplay.innerHTML = '';
        
        const item = this.mediaFiles[this.currentIndex];
        
        // Image
        const img = document.createElement('img');
        img.src = item.image;
        this.imageDisplay.appendChild(img);
        
        // Video
        const video = document.createElement('video');
        video.src = item.video;
        video.controls = true;
        video.autoplay = true;
        video.muted = true;
        video.playsInline = true;
        
        video.onended = () => {
            this.nextMedia();
        };
        
        this.videoDisplay.appendChild(video);
        
        this.updateDots();
    }
    
    nextMedia() {
        this.currentIndex = (this.currentIndex + 1) % this.mediaFiles.length;
        this.showMedia();
    }
    
    prevMedia() {
        this.currentIndex = (this.currentIndex - 1 + this.mediaFiles.length) % this.mediaFiles.length;
        this.showMedia();
    }
    
    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.media-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
}

// Spell media files
const spellMediaFiles = [
    { image: "images/roguelike/spells/Windsword.png", video: "videos/roguelike/spells/WindSwordDemo_web.mp4" },
    { image: "images/roguelike/spells/Resonatingcircles.png", video: "videos/roguelike/spells/ResCircleDemo_web.mp4" },
    { image: "images/roguelike/spells/Horn.png", video: "videos/roguelike/spells/SpartanHornDemo_web.mp4" },
    { image: "images/roguelike/spells/Shields.png", video: "videos/roguelike/spells/ShieldsDemo_web.mp4" },
    { image: "images/roguelike/spells/Eye.png", video: "videos/roguelike/spells/GorgonEyeDemo_web.mp4" },
    { image: "images/roguelike/spells/Moon.png", video: "videos/roguelike/spells/MoonDemo_web.mp4" },
    { image: "images/roguelike/spells/Sun.png", video: "videos/roguelike/spells/SunPeopleDemo_web.mp4" },
    { image: "images/roguelike/spells/Watcher.png", video: "videos/roguelike/spells/WatcherDemo_web.mp4" }
];

// Initialize the spell viewer
const spellViewerContainer = document.querySelectorAll('.media-viewer')[0];
new MediaViewer(spellViewerContainer, spellMediaFiles);