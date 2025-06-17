
document.addEventListener("DOMContentLoaded", function () {
  const titles = [
    "te cura", "lost romance", "blish", 
    "An inverted realtionship", "Immortality : The Death of Death", "Heaven", 
    "Everybody", "Monster", "Ideal Expression", 
    "alfoze", "Valentine", "Forever", "Lov"
  ];

  const categories = [
    "brand design", "graphic design", "brand design", 
    "editorial", "brand design", "graphic design", 
    "graphic design", "graphic design", "graphic design", 
    "brand design", "graphic design", "graphic design", "brand design"
  ];

  const years = [
    "2022", "2023", "2023", 
    "2023", "2024", "2024", 
    "2024", "2024", "2024", 
    "2025", "2025", "2025", "2025"
  ];

  const container = document.getElementById("thumbnailGallery");
  if (!container) return;

  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(2, 250px)";
  container.style.columnGap = "10px";
  container.style.rowGap = "13px";

  for (let i = titles.length; i >= 1; i--) {
    const item = document.createElement("a");
    item.href = `/test/${i}/`;
    item.className = `thumbnail thumb${i}`;
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.style.width = "250px";
    item.style.textDecoration = "none";
    item.style.color = "inherit";

    const img = document.createElement("img");
    img.src = `/test/images/thumb${i}.png`;
    img.alt = `썸네일${i}`;
    img.style.width = "250px";
    img.style.height = "250px";
    img.style.objectFit = "cover";
    img.style.display = "block";
    img.style.transition = "transform 0.3s ease";

    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });

    const caption = document.createElement("div");
    caption.className = `caption caption-thumb${i}`;
    caption.style.display = "flex";
    caption.style.marginTop = "13px";
    caption.style.fontSize = "12px";
    caption.style.alignItems = "flex-start";

    const titleSpan = document.createElement("span");
    titleSpan.className = "title";
    titleSpan.textContent = titles[i - 1];
    titleSpan.style.marginRight = "20px";

    const catYearSpan = document.createElement("span");
    catYearSpan.className = "category-year";
    catYearSpan.style.display = "flex";
    catYearSpan.style.alignItems = "flex-start";

    const catSpan = document.createElement("span");
    catSpan.className = "category";
    catSpan.textContent = categories[i - 1];
    catSpan.style.marginRight = "10px";

    const yearSpan = document.createElement("span");
    yearSpan.className = "year";
    yearSpan.textContent = years[i - 1];

    catYearSpan.appendChild(catSpan);
    catYearSpan.appendChild(yearSpan);

    caption.appendChild(titleSpan);
    caption.appendChild(catYearSpan);

    item.appendChild(img);
    item.appendChild(caption);

    container.appendChild(item);
  }
});
