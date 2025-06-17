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

const container = document.getElementById("thumbnailList");

for (let i = titles.length; i >= 1; i--) {
  const index = i;
  const item = document.createElement("a");
  item.href = `/test/${index}/`;
  item.className = "thumbnail";
  item.innerHTML = `
    <img src="/test/images/thumb${index}.png" alt="thumb${index}" />
    <div class="caption">
      <span class="title">${titles[i - 1]}</span><br/>
      <span class="category-year">${categories[i - 1]}, ${years[i - 1]}</span>
    </div>
  `;
  container.appendChild(item);
}
