function loadGallery(folder, totalImages, containerId) {
  const container = document.getElementById(containerId);

  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `${folder}/${i}.jpg`;
    img.loading = "lazy";

    img.onclick = () => {
      const link = document.createElement("a");
      link.href = img.src;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    container.appendChild(img);
  }
}

// START SMALL — WE WILL INCREASE LATER
loadGallery("FUNDAY", 300, "event1");
loadGallery("PRAYERDAY", 500, "event2");
