// STEP 1: List all your actual filenames
const fundayImages = [
  "DSC_4928.JPG",
  "DSC_4929.JPG",
  "DSC_4930.JPG"
  // ... add all 300 FUNDAY images here
];

const prayerdayImages = [
  "IMG_1023.jpg",
  "IMG_1024.jpg"
  // ... add all 300 PRAYERDAY images here
];

// STEP 2: Function to load images
function loadGallery(folder, images, containerId) {
  const container = document.getElementById(containerId);

  images.forEach(imgName => {
    const photoDiv = document.createElement("div");
    photoDiv.className = "photo";

    photoDiv.innerHTML = `
      <img src="${folder}/${imgName}" alt="">
      <a href="${folder}/${imgName}" download="${imgName}" class="download-btn">Download</a>
    `;

    container.appendChild(photoDiv);
  });
}

// STEP 3: Load both galleries
loadGallery("FUNDAY", fundayImages, "funday");
loadGallery("PRAYERDAY", prayerdayImages, "prayerday");
