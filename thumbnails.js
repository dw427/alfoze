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
  "brand design", "graphic design", "graphic design",
  "brand design"
];

const years = [
  "2022", "2023", "2023",
  "2023", "2024", "2024",
  "2024", "2024", "2024",
  "2025", "2025", "2025",
  "2025"
];

// ✅ 썸네일 그리기
function renderGallery() {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;
  for (let i = titles.length; i >= 1; i--) {
    const index = i;
    const item = document.createElement('a');
    item.href = `/test/${index}/`;
    item.className = `thumbnail thumb${index}`;
    item.innerHTML = `
      <img src="/test/images/thumb${index}.png" alt="썸네일${index}" />
      <div class="caption caption-thumb${index}">
        <span class="title">${titles[i - 1]}</span>
        <span class="category-year">
          <span class="category">${categories[i - 1]}</span><span class="year">${years[i - 1]}</span>
        </span>
      </div>
    `;
    gallery.appendChild(item);
  }
}

// ✅ 슬라이드 리스트
function renderSlideList() {
  const slideContent = document.getElementById("slideContent");
  if (!slideContent) return;
  for (let i = 0; i < titles.length; i++) {
    const group = document.createElement("div");
    group.className = "text-group";
    group.innerHTML = `
      <div class="text1"><a href="/test/${i + 1}/">${titles[i]}</a></div>
      <div class="text2">${categories[i]}</div>
      <div class="text3">${years[i]}</div>
    `;
    slideContent.appendChild(group);
  }
}

// ✅ 리스트 토글
function toggleSlideBox() {
  const slideBox = document.getElementById("slideBox");
  const toggleText = document.getElementById("slideToggleText");
  if (!slideBox || !toggleText) return;
  slideBox.classList.toggle("active");
  toggleText.textContent = slideBox.classList.contains("active") ? "close" : "list";
}

window.toggleSlideBox = toggleSlideBox;

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderSlideList();
});
