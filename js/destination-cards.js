// [1. 홈 화면 카테고리 선택 탭에 맞는 지역 ID 매핑 객체]
const destinationCategoryIds = {
  all: destinations.map((place) => place.id),
  sea: ["jeju", "gangneung", "busan", "yeosu", "sokcho", "yangyang"],
  healing: ["jeju", "gangneung", "yeosu", "sokcho", "yangyang", "gapyeong", "daejeon"],
  activity: ["jeju", "sokcho", "yangyang", "gapyeong"],
  shopping: ["seoul", "busan", "daegu"],
  tour: ["jeonju", "gwangju", "daejeon", "seoul", "daegu", "busan"]
};

// [2. 특정 카테고리에 속하는 여행지들만 필터링하여 가져오는 함수]
function getCategoryDestinations(category) {
  const ids = destinationCategoryIds[category] || destinationCategoryIds.all;
  return destinations.filter((place) => ids.includes(place.id));
}

// [3. 하나의 여행지 데이터를 활용하여 메인/즐겨찾기용 카드 HTML 문자열을 생성하는 함수]
function makeDestinationCard(place, options = {}) {
  const isSaved = favorites.includes(place.id);
  
  // 묶는 기호가 백틱( ` )이므로 내부의 큰따옴표(") 앞에 \를 붙이지 않습니다. join("")도 마찬가지입니다.
  const tags = place.tags.slice(0, 4).map((tag) => `<span class="tag">${tag}</span>`).join("");
  
  const deleteButton = options.favoritePage
    ? `<button class="delete-button" type="button" data-remove="${place.id}">삭제하기</button>`
    : "";

  return `
    <article class="travel-card">
      <img src="${place.image}" alt="${place.name} 이미지">
      <div class="travel-card-body">
        <div class="travel-card-header">
          <div>
            <h2>${place.name}</h2>
            <p>${place.location || "국내"}</p>
          </div>
          <button class="favorite-toggle-button${isSaved ? " saved" : ""}" type="button" data-favorite="${place.id}" aria-label="${place.name} 즐겨찾기" aria-pressed="${isSaved}">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
        <p class="intro-text">${place.intro}</p>
        <div class="tag-row">${tags}</div>
        <div class="card-meter-list">
          <label>
            인기도 ${place.popularity}%
            <progress value="${place.popularity}" max="100"></progress>
          </label>
          <label>
            가성비 ${place.costValue}%
            <input class="cost-range" type="range" min="0" max="100" value="${place.costValue}" style="--value: ${place.costValue}%;" disabled>
          </label>
        </div>
        <button class="detail-button" type="button" data-detail="${place.id}">상세 보기</button>
        ${deleteButton}
      </div>
    </article>
  `;
}

// [4. 메인 화면의 각 카테고리 패널 내부에 필터링된 여행지 카드를 꽂아넣는 함수]
function renderHomeDestinations() {
  document.querySelectorAll("[data-category-panel]").forEach((panel) => {
    const places = getCategoryDestinations(panel.dataset.categoryPanel);
    panel.innerHTML = places.map((place) => makeDestinationCard(place)).join("");
  });
}

// [5. 즐겨찾기에 담긴 지역들만 모아 전용 화면에 리스트 카드를 채우는 함수]
function renderFavorites() {
  const savedPlaces = destinations.filter((place) => favorites.includes(place.id));
  favoriteList.innerHTML = savedPlaces.length
    ? savedPlaces.map((place) => makeDestinationCard(place, { favoritePage: true })).join("")
    : `<div class="empty">즐겨찾기에 추가한 여행지가 없습니다. 메인에서 하트 버튼을 눌러보세요!</div>`;
}
