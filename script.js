// -------------------- CONFIG --------------------

// FUNDAY: images 1 to 300
const fundayFolder = "FUNDAY";
const fundayImages = [];
for(let i=1; i<=300; i++){
    let num = i.toString().padStart(4,'0'); // 0001, 0002...
    fundayImages.push(`IMG-20251204-WA${num}.jpg`);
}

// PRAYERDAY: images 301 to 800
const prayerdayFolder = "PRAYERDAY";
const prayerdayImages = [];
for(let i=301; i<=800; i++){
    let num = i.toString().padStart(4,'0'); // 0301, 0302...
    prayerdayImages.push(`IMG-20251204-WA${num}.jpg`);
}

// -------------------- FUNCTION TO LOAD IMAGES --------------------
function loadGallery(folder, images, containerId){
    const container = document.getElementById(containerId);
    images.forEach(imgName=>{
        const photoDiv = document.createElement("div");
        photoDiv.className = "photo";
        photoDiv.innerHTML = `
            <img src="${folder}/${imgName}" alt="${imgName}">
            <a href="${folder}/${imgName}" download="${imgName}" class="download-btn">Download</a>
        `;
        container.appendChild(photoDiv);
    });
}

// -------------------- LOAD BOTH GALLERIES --------------------
loadGallery(fundayFolder, fundayImages, "funday");
loadGallery(prayerdayFolder, prayerdayImages, "prayerday");
