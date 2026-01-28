// FUNDAY: 276 images
const fundayFolder = "FUNDAY";
const fundayImages = [];
for(let i=1;i<=276;i++){
    let num = i.toString().padStart(4,'0');
    fundayImages.push(`IMG-20251204-WA${num}.jpg`);
}

// PRAYERDAY: 492 images
const prayerdayFolder = "PRAYERDAY";
const prayerdayImages = [];
for(let i=277;i<=768;i++){
    let num = i.toString().padStart(4,'0');
    prayerdayImages.push(`IMG-20251204-WA${num}.jpg`);
}

// Load images into gallery
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

loadGallery(fundayFolder, fundayImages, "funday");
loadGallery(prayerdayFolder, prayerdayImages, "prayerday");
