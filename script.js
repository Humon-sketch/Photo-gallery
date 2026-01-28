// -------------------- CONFIG --------------------
// Replace these numbers with the first and last numbers of your images
const fundayStart = 3;    // first image number in FUNDAY
const fundayEnd = 302;    // last image number in FUNDAY

const prayerdayStart = 501; // first image number in PRAYERDAY
const prayerdayEnd = 800;   // last image number in PRAYERDAY

// Folder names
const fundayFolder = "FUNDAY";
const prayerdayFolder = "PRAYERDAY";

// -------------------- FUNCTION --------------------
function loadGallery(folder, start, end, containerId){
    const container = document.getElementById(containerId);
    for(let i = start; i <= end; i++){
        let num = i.toString().padStart(4,'0'); // 0003, 0004, etc.
        let imgName = `IMG-20251204-WA${num}.jpg`; // adjust this to match your pattern
        const photoDiv = document.createElement("div");
        photoDiv.className = "photo";
        photoDiv.innerHTML = `
            <img src="${folder}/${imgName}" alt="${imgName}">
            <a href="${folder}/${imgName}" download="${imgName}" class="download-btn">Download</a>
        `;
        container.appendChild(photoDiv);
    }
}

// -------------------- LOAD GALLERIES --------------------
loadGallery(fundayFolder, fundayStart, fundayEnd, "funday");
loadGallery(prayerdayFolder, prayerdayStart, prayerdayEnd, "prayerday");
