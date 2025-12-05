// Item media files
const itemMediaFiles = [
    { image: "images/roguelike/items/Bloodsword.png", video: "videos/roguelike/items/Bloodsword_web.mp4" },
    { image: "images/roguelike/items/Healthpot.png", video: "videos/roguelike/items/Healthpot_web.mp4" },
    { image: "images/roguelike/items/Owl.png", video: "videos/roguelike/items/Owl_web.mp4" },
    { image: "images/roguelike/items/RipplingTides.png", video: "videos/roguelike/items/RipplingTides_web.mp4" },
    { image: "images/roguelike/items/Sandals.png", video: "videos/roguelike/items/Sandals_web.mp4" },
    { image: "images/roguelike/items/StarsFalling.png", video: "videos/roguelike/items/StarsFalling_web.mp4" }
    // Add your actual item files here
];

// Initialize the items viewer (second media-viewer on the page)
const itemViewerContainer = document.querySelectorAll('.media-viewer')[1];
new MediaViewer(itemViewerContainer, itemMediaFiles);