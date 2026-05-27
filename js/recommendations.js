function makeCard(place, options = {}) {
  const isSaved = favorites.includes(place.id);
  const tags = place.tags.slice(0, 4).map((tag) => `<span class="tag">${tag}</span>`).join("");
  const deleteButton = options.favoritePage
    ? `<button class="delete-button" type="button" data-remove="${place.id}">삭제하기</button>`
    : "";

  return `
    <article class="travel-card">
      <img src="${place.image}" alt="${place.name} 대표 이미지">
      <div class="card-body">
        <div class="card-top">
          <h3>${place.name}</h3>
          <button class="favorite-button ${isSaved ? "saved" : ""}" type="button" data-favorite="${place.id}" aria-label="${place.name} 즐겨찾기">♥</button>
        </div>
        <div class="tags">${tags}</div>
        <p class="reason">${place.reason}</p>
        <div class="meta-list">
          <span>예상 비용: ${place.cost}</span>
          <span>추천 일정: ${place.schedule}</span>
          <span>대표 명소: ${place.spots.join(", ")}</span>
        </div>
        <button class="detail-button" type="button" data-detail="${place.id}">상세 보기</button>
        ${deleteButton}
      </div>
    </article>
  `;
}

function renderFavorites() {
  const savedPlaces = destinations.filter((place) => favorites.includes(place.id));
  favoriteList.innerHTML = savedPlaces.length
    ? savedPlaces.map((place) => makeCard(place, { favoritePage: true })).join("")
    : `<div class="empty">아직 저장한 여행지가 없습니다. 마음에 드는 여행지를 즐겨찾기에 추가해보세요.</div>`;
  updateFavoriteCount();
}
