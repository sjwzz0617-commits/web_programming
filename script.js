const destinations = [
  {
    id: "jeju",
    name: "제주도",
    image: "https://images.unsplash.com/photo-1579169825453-8d4b465d1f8b?auto=format&fit=crop&w=1200&q=80",
    tags: ["자연", "바다", "힐링", "액티비티", "국내"],
    companions: ["커플", "친구", "가족", "혼자"],
    budgets: ["보통", "여유"],
    durations: ["1박 2일", "2박 3일 이상"],
    seasons: ["봄", "여름", "가을"],
    popularity: 98,
    costValue: 3,
    cost: "약 35만~70만원",
    schedule: "2박 3일 이상",
    spots: ["성산일출봉", "협재해변", "우도"],
    reason: "바다와 오름, 카페와 액티비티를 한 번에 즐길 수 있어 취향 폭이 넓은 여행지입니다.",
    intro: "제주도는 자연 풍경, 해안 드라이브, 감성 카페, 로컬 맛집을 모두 담을 수 있는 대표 여행지입니다.",
    course: "1일차 애월 해안도로와 카페 거리, 2일차 성산일출봉과 우도, 3일차 협재해변과 동문시장",
    food: "고기국수, 흑돼지, 해물라면, 오션뷰 카페",
    transport: "렌터카 이용이 가장 편하고, 주요 관광지는 버스 이동도 가능합니다.",
    location: "제주특별자치도 전역. 공항 기준 애월, 성산, 서귀포 방향으로 코스를 나누면 이동이 편합니다.",
    season: "봄과 가을이 가장 쾌적하며 여름에는 해수욕 중심 일정이 좋습니다.",
    tips: "인기 맛집과 렌터카는 성수기 전에 미리 예약하는 편이 좋습니다."
  },
  {
    id: "gangneung",
    name: "강릉",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=1200&q=80",
    tags: ["바다", "카페", "힐링", "맛집", "국내"],
    companions: ["커플", "친구", "혼자"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["봄", "가을", "겨울"],
    popularity: 91,
    costValue: 2,
    cost: "약 12만~28만원",
    schedule: "1박 2일",
    spots: ["안목해변", "경포호", "초당순두부마을"],
    reason: "바다 산책, 카페, 맛집 동선이 짧아 짧은 일정에도 만족도가 높습니다.",
    intro: "강릉은 바다와 카페 문화가 강한 여행지로, 주말에 가볍게 떠나기 좋습니다.",
    course: "안목해변 카페 거리, 경포호 산책, 중앙시장 먹거리, 주문진 바다 코스",
    food: "초당순두부, 장칼국수, 커피, 해산물",
    transport: "KTX 강릉역 도착 후 택시나 버스로 주요 해변 이동이 쉽습니다.",
    location: "강원특별자치도 강릉시. 안목해변, 경포호, 주문진을 한 방향으로 묶으면 좋습니다.",
    season: "사계절 모두 좋지만 맑은 가을과 겨울 바다 여행이 특히 인기가 많습니다.",
    tips: "주말 안목해변은 붐비므로 오전에 이동하면 여유롭습니다."
  },
  {
    id: "busan",
    name: "부산",
    image: "https://images.unsplash.com/photo-1596618815918-61b5aa5ff10f?auto=format&fit=crop&w=1200&q=80",
    tags: ["도시", "바다", "맛집", "쇼핑", "국내"],
    companions: ["친구", "가족", "커플"],
    budgets: ["보통", "여유"],
    durations: ["1박 2일", "2박 3일 이상"],
    seasons: ["여름", "가을", "겨울"],
    popularity: 96,
    costValue: 2,
    cost: "약 20만~45만원",
    schedule: "1박 2일",
    spots: ["해운대", "광안리", "감천문화마을"],
    reason: "대중교통으로 바다, 야경, 쇼핑, 맛집을 모두 연결하기 쉬운 도시 여행지입니다.",
    intro: "부산은 바다를 품은 대도시라 활동적인 일정과 쉬는 일정을 균형 있게 짤 수 있습니다.",
    course: "해운대 산책, 센텀시티 쇼핑, 광안리 야경, 감천문화마을과 국제시장",
    food: "돼지국밥, 밀면, 어묵, 회, 씨앗호떡",
    transport: "지하철과 버스 노선이 잘 되어 있어 차 없이 여행하기 좋습니다.",
    location: "부산광역시 해운대구, 수영구, 중구 일대. 해변권과 원도심권으로 나눠 이동하면 효율적입니다.",
    season: "여름은 해수욕, 가을과 겨울은 야경과 맛집 중심 여행에 좋습니다.",
    tips: "해운대와 광안리 숙소 가격 차이가 커서 일정 동선에 맞춰 고르는 것이 좋습니다."
  },
  {
    id: "jeonju",
    name: "전주",
    image: "https://images.unsplash.com/photo-1609726494499-27d3e942456c?auto=format&fit=crop&w=1200&q=80",
    tags: ["역사/문화", "맛집", "도시", "국내"],
    companions: ["친구", "가족", "커플", "혼자"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["봄", "가을", "겨울"],
    popularity: 84,
    costValue: 1,
    cost: "약 8만~22만원",
    schedule: "당일치기 또는 1박 2일",
    spots: ["전주한옥마을", "경기전", "남부시장"],
    reason: "한옥마을과 먹거리 동선이 가까워 저예산 여행에도 알찬 코스를 만들 수 있습니다.",
    intro: "전주는 전통 분위기와 음식 여행을 함께 즐기기 좋은 국내 대표 문화 여행지입니다.",
    course: "전주한옥마을, 경기전, 객리단길 카페, 남부시장 야시장",
    food: "비빔밥, 콩나물국밥, 막걸리 골목, 길거리 간식",
    transport: "전주역 또는 고속버스터미널에서 버스와 택시로 이동할 수 있습니다.",
    location: "전북특별자치도 전주시 완산구 한옥마을 주변. 도보 이동으로 주요 명소를 둘러보기 좋습니다.",
    season: "봄과 가을 한옥마을 산책이 좋고, 겨울에도 먹거리 여행으로 적합합니다.",
    tips: "한복 대여와 유명 식당은 주말 오후 대기 시간이 길 수 있습니다."
  },
  {
    id: "yeosu",
    name: "여수",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    tags: ["바다", "야경", "힐링", "맛집", "국내"],
    companions: ["커플", "가족", "친구"],
    budgets: ["보통", "여유"],
    durations: ["1박 2일", "2박 3일 이상"],
    seasons: ["봄", "여름", "가을"],
    popularity: 88,
    costValue: 2,
    cost: "약 18만~40만원",
    schedule: "1박 2일",
    spots: ["오동도", "해상케이블카", "낭만포차거리"],
    reason: "밤바다와 야경이 강점이라 커플 여행이나 가족 휴식 여행에 잘 맞습니다.",
    intro: "여수는 잔잔한 바다 풍경과 밤바다 감성을 중심으로 여유롭게 즐기기 좋은 여행지입니다.",
    course: "오동도 산책, 해상케이블카, 돌산공원 야경, 낭만포차거리",
    food: "게장백반, 갓김치, 해물삼합, 서대회",
    transport: "KTX 여수엑스포역에서 택시와 버스로 주요 명소 이동이 가능합니다.",
    location: "전라남도 여수시 해안권. 여수엑스포역, 오동도, 돌산공원을 연결하는 코스가 대표적입니다.",
    season: "봄, 가을에 산책하기 좋고 여름 밤바다 여행도 인기가 많습니다.",
    tips: "야경 명소는 해 질 무렵부터 붐비므로 일몰 시간을 확인하고 움직이면 좋습니다."
  },
  {
    id: "sokcho",
    name: "속초",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    tags: ["산", "바다", "자연", "맛집", "국내"],
    companions: ["친구", "가족", "커플"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["가을", "겨울", "봄"],
    popularity: 86,
    costValue: 2,
    cost: "약 10만~30만원",
    schedule: "1박 2일",
    spots: ["설악산", "속초해변", "중앙시장"],
    reason: "산과 바다를 하루 안에 모두 볼 수 있어 자연 여행 만족도가 높습니다.",
    intro: "속초는 설악산과 동해 바다, 시장 먹거리를 함께 즐길 수 있는 균형 좋은 여행지입니다.",
    course: "설악산 케이블카, 속초해변, 영금정, 중앙시장 먹거리 투어",
    food: "닭강정, 오징어순대, 물회, 회국수",
    transport: "고속버스 이용 후 시내버스나 택시로 해변과 시장 이동이 편리합니다.",
    location: "강원특별자치도 속초시와 설악산 권역. 산 코스와 바다 코스를 반나절씩 나누기 좋습니다.",
    season: "가을 단풍철 설악산과 겨울 동해 바다가 특히 인상적입니다.",
    tips: "설악산 단풍철에는 교통 체증이 심해 이른 출발이 좋습니다."
  },
  {
    id: "tokyo",
    name: "도쿄",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    tags: ["해외", "도시", "맛집", "쇼핑", "역사/문화"],
    companions: ["친구", "커플", "혼자", "가족"],
    budgets: ["보통", "여유"],
    durations: ["2박 3일 이상"],
    seasons: ["봄", "가을", "겨울"],
    popularity: 95,
    costValue: 3,
    cost: "약 60만~120만원",
    schedule: "2박 3일 이상",
    spots: ["시부야", "아사쿠사", "하라주쿠"],
    reason: "쇼핑, 맛집, 전시, 도시 산책이 밀집되어 첫 해외여행으로도 계획하기 쉽습니다.",
    intro: "도쿄는 지역별 개성이 뚜렷해 쇼핑과 문화, 음식 취향에 맞춘 일정 구성이 쉽습니다.",
    course: "시부야와 하라주쿠 쇼핑, 아사쿠사 문화 산책, 긴자와 도쿄역 야경",
    food: "라멘, 스시, 돈카츠, 디저트 카페",
    transport: "지하철과 JR 노선이 촘촘해 교통패스 활용이 좋습니다.",
    location: "일본 도쿄도. 시부야, 신주쿠, 아사쿠사, 긴자를 지역별 하루 코스로 묶기 좋습니다.",
    season: "벚꽃 시즌인 봄과 선선한 가을이 가장 여행하기 좋습니다.",
    tips: "인기 식당은 예약이 필요하고, 교통카드는 미리 준비하면 편합니다."
  },
  {
    id: "danang",
    name: "다낭",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
    tags: ["해외", "바다", "힐링", "맛집", "액티비티"],
    companions: ["커플", "가족", "친구"],
    budgets: ["보통", "여유"],
    durations: ["2박 3일 이상"],
    seasons: ["봄", "여름"],
    popularity: 89,
    costValue: 3,
    cost: "약 55만~110만원",
    schedule: "2박 3일 이상",
    spots: ["미케비치", "바나힐", "호이안"],
    reason: "리조트 휴식과 근교 투어를 함께 즐기기 좋아 여유 있는 바다 여행에 적합합니다.",
    intro: "다낭은 해변 리조트, 야시장, 근교 도시 호이안까지 묶어 가기 좋은 해외 휴양지입니다.",
    course: "미케비치 휴식, 바나힐 투어, 호이안 야경, 한시장 쇼핑",
    food: "쌀국수, 반미, 해산물, 코코넛 커피",
    transport: "그랩 차량 이동이 편리하며 근교 투어는 현지 투어 예약이 효율적입니다.",
    location: "베트남 중부 다낭과 호이안 권역. 미케비치 숙소를 기준으로 근교 투어를 잡기 좋습니다.",
    season: "건기인 2월부터 8월까지가 바다 여행에 좋습니다.",
    tips: "우기에는 비가 잦으므로 실내 일정과 마사지 코스를 함께 준비하면 좋습니다."
  }
];

let selected = {};
let currentResults = [...destinations];
let favorites = JSON.parse(localStorage.getItem("tripPickFavorites") || "[]");
let currentUser = JSON.parse(localStorage.getItem("tripPickUser") || "null");
let booking = JSON.parse(localStorage.getItem("tripPickBooking") || '{"train":null,"hotel":null}');

const trainProducts = [
  { id: "ktx-morning", type: "KTX", time: "08:20", duration: "약 2시간", price: 42000 },
  { id: "ktx-afternoon", type: "KTX", time: "13:10", duration: "약 2시간 10분", price: 39800 },
  { id: "itx-evening", type: "ITX", time: "18:40", duration: "약 2시간 35분", price: 28600 }
];

const hotels = [
  {
    id: "gangneung-blue",
    destination: "강릉",
    name: "블루웨이브 호텔",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    type: "오션뷰 호텔",
    rating: 4.7,
    price: 138000,
    description: "안목해변과 가까워 카페 거리와 바다 산책을 함께 즐기기 좋습니다."
  },
  {
    id: "busan-harbor",
    destination: "부산",
    name: "하버 스테이 부산",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
    type: "도심 호텔",
    rating: 4.6,
    price: 126000,
    description: "광안리와 센텀 이동이 편해 친구 여행과 쇼핑 일정에 잘 맞습니다."
  },
  {
    id: "jeju-garden",
    destination: "제주도",
    name: "제주 가든 리조트",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
    type: "리조트",
    rating: 4.8,
    price: 182000,
    description: "정원과 수영장이 있어 가족, 커플 힐링 여행에 어울립니다."
  },
  {
    id: "yeosu-night",
    destination: "여수",
    name: "여수 밤바다 펜션",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80",
    type: "감성 펜션",
    rating: 4.5,
    price: 98000,
    description: "돌산대교 야경을 보기 좋고 낭만포차거리 이동도 편합니다."
  }
];

const views = {
  home: document.querySelector("#homeView"),
  results: document.querySelector("#resultsView"),
  detail: document.querySelector("#detailView"),
  favorites: document.querySelector("#favoritesView"),
  login: document.querySelector("#loginView"),
  train: document.querySelector("#trainView"),
  hotel: document.querySelector("#hotelView"),
  payment: document.querySelector("#paymentView")
};

const resultList = document.querySelector("#resultList");
const favoriteList = document.querySelector("#favoriteList");
const popularList = document.querySelector("#popularList");
const selectedSummary = document.querySelector("#selectedSummary");
const favoriteCount = document.querySelector("#favoriteCount");

function saveFavorites() {
  localStorage.setItem("tripPickFavorites", JSON.stringify(favorites));
  favoriteCount.textContent = favorites.length;
}

function saveUser() {
  localStorage.setItem("tripPickUser", JSON.stringify(currentUser));
  renderLoginState();
}

function saveBooking() {
  localStorage.setItem("tripPickBooking", JSON.stringify(booking));
  renderPaymentSummary();
}

function showView(viewName) {
  Object.values(views).forEach((view) => view.classList.remove("active"));
  views[viewName].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (viewName === "favorites") renderFavorites();
  if (viewName === "results") renderResults();
  if (viewName === "login") renderLoginState();
  if (viewName === "train") renderTrainOptions();
  if (viewName === "hotel") renderHotels();
  if (viewName === "payment") renderPaymentSummary();
}

function getScore(place) {
  let score = 0;
  if (selected.theme && place.tags.includes(selected.theme)) score += 4;
  if (selected.companion && place.companions.includes(selected.companion)) score += 3;
  if (selected.budget && place.budgets.includes(selected.budget)) score += 2;
  if (selected.duration && place.durations.includes(selected.duration)) score += 2;
  if (selected.season && place.seasons.includes(selected.season)) score += 2;
  if (selected.region && place.tags.includes(selected.region)) score += 3;
  return score;
}

function recommend() {
  currentResults = destinations
    .map((place) => ({ ...place, score: getScore(place) }))
    .sort((a, b) => b.score - a.score || b.popularity - a.popularity);
}

function getChoiceSummary() {
  const values = Object.values(selected).filter(Boolean);
  return values.length ? values : ["조건을 선택하면 더 정확한 추천을 받을 수 있어요"];
}

function renderSummary() {
  selectedSummary.innerHTML = getChoiceSummary()
    .map((item) => `<span>${item}</span>`)
    .join("");
}

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

function getFilteredResults() {
  const keyword = document.querySelector("#searchInput").value.trim().toLowerCase();
  const budget = document.querySelector("#budgetFilter").value;
  const theme = document.querySelector("#themeFilter").value;
  const sort = document.querySelector("#sortSelect").value;

  let list = currentResults.filter((place) => {
    const keywordMatch = !keyword || place.name.toLowerCase().includes(keyword) || place.tags.join(" ").toLowerCase().includes(keyword);
    const budgetMatch = !budget || place.budgets.includes(budget);
    const themeMatch = !theme || place.tags.includes(theme);
    return keywordMatch && budgetMatch && themeMatch;
  });

  if (sort === "popular") list = list.sort((a, b) => b.popularity - a.popularity);
  if (sort === "cost") list = list.sort((a, b) => a.costValue - b.costValue || b.popularity - a.popularity);
  if (sort === "recommend") list = list.sort((a, b) => (b.score || 0) - (a.score || 0) || b.popularity - a.popularity);

  return list;
}

function renderResults() {
  renderSummary();
  const list = getFilteredResults();
  resultList.innerHTML = list.length
    ? list.map((place) => makeCard(place)).join("")
    : `<div class="empty">조건에 맞는 여행지가 없습니다. 검색어 또는 필터를 바꿔보세요.</div>`;
  saveFavorites();
}

function renderPopular() {
  popularList.innerHTML = [...destinations]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3)
    .map((place) => makeCard(place))
    .join("");
}

function renderFavorites() {
  const savedPlaces = destinations.filter((place) => favorites.includes(place.id));
  favoriteList.innerHTML = savedPlaces.length
    ? savedPlaces.map((place) => makeCard(place, { favoritePage: true })).join("")
    : `<div class="empty">아직 저장한 여행지가 없습니다. 마음에 드는 여행지를 즐겨찾기에 추가해보세요.</div>`;
  saveFavorites();
}

function formatWon(price) {
  return `${price.toLocaleString("ko-KR")}원`;
}

function getTrainSearchInfo() {
  return {
    departure: document.querySelector("#departureStation").value,
    arrival: document.querySelector("#arrivalStation").value,
    date: document.querySelector("#trainDate").value || "날짜 미정",
    passengers: Number(document.querySelector("#passengerCount").value)
  };
}

function renderLoginState() {
  const message = document.querySelector("#loginMessage");
  if (!message) return;

  if (currentUser) {
    message.textContent = `${currentUser.email} 계정으로 로그인 중입니다.`;
    document.querySelector("#loginEmail").value = currentUser.email;
  } else {
    message.textContent = "로그인 전입니다.";
  }
}

function renderTrainOptions() {
  const list = document.querySelector("#trainOptions");
  if (!list) return;

  const search = getTrainSearchInfo();
  list.innerHTML = trainProducts.map((train) => {
    const total = train.price * search.passengers;
    const selectedClass = booking.train && booking.train.id === train.id ? "selected" : "";

    return `
      <article class="option-card ${selectedClass}">
        <h3>${train.type} ${train.time}</h3>
        <p>${search.departure} → ${search.arrival}</p>
        <p>${search.date} · ${search.passengers}명 · ${train.duration}</p>
        <strong class="price">${formatWon(total)}</strong>
        <button class="select-button" type="button" data-train="${train.id}">이 열차 선택</button>
      </article>
    `;
  }).join("");
}

function selectTrain(id) {
  const train = trainProducts.find((item) => item.id === id);
  if (!train) return;

  const search = getTrainSearchInfo();
  booking.train = {
    ...train,
    departure: search.departure,
    arrival: search.arrival,
    date: search.date,
    passengers: search.passengers,
    total: train.price * search.passengers
  };
  saveBooking();
  renderTrainOptions();
}

function getHotelFilters() {
  return {
    destination: document.querySelector("#hotelDestination").value,
    checkin: document.querySelector("#checkinDate").value || "체크인 미정",
    nights: Number(document.querySelector("#nightCount").value),
    sort: document.querySelector("#hotelSort").value
  };
}

function renderHotels() {
  const list = document.querySelector("#hotelList");
  if (!list) return;

  const filters = getHotelFilters();
  let hotelList = hotels.filter((hotel) => !filters.destination || hotel.destination === filters.destination);

  if (filters.sort === "price") hotelList = hotelList.sort((a, b) => a.price - b.price);
  if (filters.sort === "rating") hotelList = hotelList.sort((a, b) => b.rating - a.rating);
  if (filters.sort === "recommend") hotelList = hotelList.sort((a, b) => b.rating - a.rating || a.price - b.price);

  list.innerHTML = hotelList.length
    ? hotelList.map((hotel) => {
      const total = hotel.price * filters.nights;
      const selectedClass = booking.hotel && booking.hotel.id === hotel.id ? "selected" : "";

      return `
        <article class="hotel-card ${selectedClass}">
          <img src="${hotel.image}" alt="${hotel.name} 이미지">
          <h3>${hotel.name}</h3>
          <p>${hotel.destination} · ${hotel.type}</p>
          <p class="rating">평점 ${hotel.rating}</p>
          <p>${hotel.description}</p>
          <strong class="price">${formatWon(total)}</strong>
          <button class="select-button" type="button" data-hotel="${hotel.id}">이 숙소 선택</button>
        </article>
      `;
    }).join("")
    : `<div class="empty">조건에 맞는 숙소가 없습니다.</div>`;
}

function selectHotel(id) {
  const hotel = hotels.find((item) => item.id === id);
  if (!hotel) return;

  const filters = getHotelFilters();
  booking.hotel = {
    ...hotel,
    checkin: filters.checkin,
    nights: filters.nights,
    total: hotel.price * filters.nights
  };
  saveBooking();
  renderHotels();
}

function renderPaymentSummary() {
  const summary = document.querySelector("#bookingSummary");
  const totalPrice = document.querySelector("#totalPrice");
  if (!summary || !totalPrice) return;

  const items = [];
  let total = 0;

  if (booking.train) {
    total += booking.train.total;
    items.push(`
      <div class="summary-item">
        <strong>기차 예매</strong>
        <p>${booking.train.type} ${booking.train.time}</p>
        <p>${booking.train.departure} → ${booking.train.arrival}</p>
        <p>${booking.train.date} · ${booking.train.passengers}명</p>
        <p>${formatWon(booking.train.total)}</p>
      </div>
    `);
  }

  if (booking.hotel) {
    total += booking.hotel.total;
    items.push(`
      <div class="summary-item">
        <strong>숙소 예약</strong>
        <p>${booking.hotel.name}</p>
        <p>${booking.hotel.destination} · ${booking.hotel.checkin} · ${booking.hotel.nights}박</p>
        <p>${formatWon(booking.hotel.total)}</p>
      </div>
    `);
  }

  summary.innerHTML = items.length
    ? items.join("")
    : `<div class="summary-item"><strong>선택된 예약 없음</strong><p>기차 예매 또는 숙소를 선택하면 이곳에 표시됩니다.</p></div>`;
  totalPrice.textContent = formatWon(total);
}

function renderDetail(id) {
  const place = destinations.find((item) => item.id === id);
  if (!place) return;
  const isSaved = favorites.includes(place.id);

  document.querySelector("#detailContent").innerHTML = `
    <div class="detail-hero">
      <img src="${place.image}" alt="${place.name} 풍경">
      <div class="detail-main">
        <div class="detail-title-row">
          <div>
            <p class="eyebrow">Destination Detail</p>
            <h1>${place.name}</h1>
            <p class="detail-intro">${place.intro}</p>
          </div>
          <button class="favorite-button ${isSaved ? "saved" : ""}" type="button" data-favorite="${place.id}" aria-label="${place.name} 즐겨찾기">♥</button>
        </div>
        <div class="tags">${place.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="info-grid">
          <section class="info-box">
            <h3>추천 코스</h3>
            <p>${place.course}</p>
          </section>
          <section class="info-box">
            <h3>맛집/카페</h3>
            <p>${place.food}</p>
          </section>
          <section class="info-box">
            <h3>교통 정보</h3>
            <p>${place.transport}</p>
          </section>
          <section class="info-box">
            <h3>지도 또는 위치 정보</h3>
            <p>${place.location}</p>
          </section>
          <section class="info-box">
            <h3>예상 경비</h3>
            <p>${place.cost}</p>
          </section>
          <section class="info-box">
            <h3>방문하기 좋은 계절</h3>
            <p>${place.season}</p>
          </section>
          <section class="info-box">
            <h3>주의사항 또는 팁</h3>
            <p>${place.tips}</p>
          </section>
        </div>
      </div>
    </div>
  `;

  showView("detail");
}

function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter((item) => item !== id)
    : [...favorites, id];
  saveFavorites();
  renderResults();
  renderFavorites();
  const activeDetail = document.querySelector("#detailView.active");
  if (activeDetail) renderDetail(id);
}

document.querySelector("#preferenceForm").addEventListener("click", (event) => {
  const button = event.target.closest(".choice-row button");
  if (!button) return;

  const group = button.closest(".option-group");
  group.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
  button.classList.add("selected");
  selected[group.dataset.name] = button.dataset.value;
});

document.querySelector("#preferenceForm").addEventListener("submit", (event) => {
  event.preventDefault();
  recommend();
  showView("results");
});

document.querySelector("#resetChoices").addEventListener("click", () => {
  selected = {};
  document.querySelectorAll(".choice-row button").forEach((button) => button.classList.remove("selected"));
  recommend();
});

document.body.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const favoriteButton = event.target.closest("[data-favorite]");
  const detailButton = event.target.closest("[data-detail]");
  const removeButton = event.target.closest("[data-remove]");
  const trainButton = event.target.closest("[data-train]");
  const hotelButton = event.target.closest("[data-hotel]");

  if (viewButton) showView(viewButton.dataset.view);
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  if (detailButton) renderDetail(detailButton.dataset.detail);
  if (removeButton) {
    favorites = favorites.filter((id) => id !== removeButton.dataset.remove);
    renderFavorites();
    renderResults();
  }
  if (trainButton) selectTrain(trainButton.dataset.train);
  if (hotelButton) selectHotel(hotelButton.dataset.hotel);
});

["#searchInput", "#budgetFilter", "#themeFilter", "#sortSelect"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", renderResults);
});

["#departureStation", "#arrivalStation", "#trainDate", "#passengerCount"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", renderTrainOptions);
});

["#hotelDestination", "#checkinDate", "#nightCount", "#hotelSort"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", renderHotels);
});

document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#loginEmail").value.trim();
  currentUser = { email, loggedAt: new Date().toISOString() };
  saveUser();
});

document.querySelector("#logoutButton").addEventListener("click", () => {
  currentUser = null;
  localStorage.removeItem("tripPickUser");
  document.querySelector("#loginEmail").value = "";
  document.querySelector("#loginPassword").value = "";
  renderLoginState();
});

document.querySelector("#paymentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector("#paymentMessage");
  const total = (booking.train?.total || 0) + (booking.hotel?.total || 0);

  if (!total) {
    message.textContent = "결제할 기차나 숙소를 먼저 선택해주세요.";
    return;
  }

  const payer = document.querySelector("#payerName").value.trim();
  const method = document.querySelector("#paymentMethod").value;
  message.textContent = `${payer}님의 ${method} 결제가 완료되었습니다. 총 결제 금액은 ${formatWon(total)}입니다.`;
});

function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  document.querySelector("#trainDate").value = tomorrow.toISOString().slice(0, 10);
  document.querySelector("#checkinDate").value = dayAfterTomorrow.toISOString().slice(0, 10);
}

setDefaultDates();
recommend();
renderPopular();
renderResults();
renderTrainOptions();
renderHotels();
renderLoginState();
renderPaymentSummary();
saveFavorites();
