const destinationCategoryIds = {
  all: destinations.map((place) => place.id),
  sea: ["jeju", "gangneung", "busan", "yeosu", "sokcho", "yangyang"],
  healing: ["jeju", "gangneung", "yeosu", "sokcho", "yangyang", "gapyeong", "daejeon"],
  activity: ["jeju", "sokcho", "yangyang", "gapyeong"],
  shopping: ["seoul", "busan", "daegu"],
  tour: ["jeonju", "gwangju", "daejeon", "seoul", "daegu", "busan"]
};

function getCategoryDestinations(category) {
  const ids = destinationCategoryIds[category] || destinationCategoryIds.all;
  return destinations.filter((place) => ids.includes(place.id));
}

function makeDestinationCard(place, options = {}) {
  const isSaved = favorites.includes(place.id);
  const tags = place.tags.slice(0, 4).map((tag) => `<span class="tag">${tag}</span>`).join("");
  const deleteButton = options.favoritePage
    ? `<button class="delete-button" type="button" data-remove="${place.id}">\uc0ad\uc81c\ud558\uae30</button>`
    : "";

  return `
    <article class="travel-card">
      <img src="${place.image}" alt="${place.name} \ub300\ud45c \uc774\ubbf8\uc9c0">
      <div class="card-body">
        <div class="card-top">
          <h3>${place.name}</h3>
          <button class="favorite-button ${isSaved ? "saved" : ""}" type="button" data-favorite="${place.id}" aria-label="${place.name} \uc990\uaca8\ucc3e\uae30">\u2665</button>
        </div>
        <div class="tags">${tags}</div>
        <p class="reason">${place.reason}</p>
        <div class="meta-list">
          <span>\uc608\uc0c1 \ube44\uc6a9: ${place.cost}</span>
          <span>\ucd94\ucc9c \uc77c\uc815: ${place.schedule}</span>
          <span>\ub300\ud45c \uba85\uc18c: ${place.spots.join(", ")}</span>
        </div>
        <!-- HTML 기본 태그 progress와 range로 여행지 정보를 간단히 보여줍니다. -->
        <div class="card-meter-list">
          <label>
            \uc778\uae30\ub3c4 ${place.popularity}%
            <progress value="${place.popularity}" max="100"></progress>
          </label>
          <label>
            \uac00\uc131\ube44 ${place.costValue}%
            <input type="range" min="0" max="100" value="${place.costValue}" disabled>
          </label>
        </div>
        <button class="detail-button" type="button" data-detail="${place.id}">\uc0c1\uc138 \ubcf4\uae30</button>
        ${deleteButton}
      </div>
    </article>
  `;
}

function renderHomeDestinations() {
  document.querySelectorAll("[data-category-panel]").forEach((panel) => {
    const places = getCategoryDestinations(panel.dataset.categoryPanel);
    panel.innerHTML = places.map((place) => makeDestinationCard(place)).join("");
  });
}

function renderFavorites() {
  const savedPlaces = destinations.filter((place) => favorites.includes(place.id));
  favoriteList.innerHTML = savedPlaces.length
    ? savedPlaces.map((place) => makeDestinationCard(place, { favoritePage: true })).join("")
    : `<div class="empty">\uc544\uc9c1 \uc800\uc7a5\ud55c \uc5ec\ud589\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub9c8\uc74c\uc5d0 \ub4dc\ub294 \uc5ec\ud589\uc9c0\ub97c \uc990\uaca8\ucc3e\uae30\uc5d0 \ucd94\uac00\ud574\ubcf4\uc138\uc694.</div>`;
  updateFavoriteCount();
}
