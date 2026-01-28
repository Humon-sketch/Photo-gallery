// -------------------- CONFIG --------------------

// FUNDAY folder & automatic image generator
const fundayFolder = "FUNDAY";
const fundayImages = [];
for(let i=1; i<=276; i++){  // 300 images in FUNDAY
    let num = i.toString().padStart(4,'0'); // 0001, 0002, ...
    fundayImages.push(`IMG-20251204-WA${num}.jpg`);
}

// PRAYERDAY folder & automatic image generator
const prayerdayFolder = "PRAYERDAY";
const prayerdayImages = [];
for(let i=277; i<=770; i++){  // 500 images in PRAYERDAY
    let num = i.toString().padStart(4,'0'); // 0301, 0302, ...
    prayerdayImages.push(`IMG-20251204-WA${num}.jpg`);
}

// -------------------- FUNCTION TO LOAD IMAGES --------------------
function loadGallery(folder, images, containerId){
    const container = document.getElementById(containerId);
    images.forEach(imgName => {
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
