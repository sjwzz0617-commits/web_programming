const attractionDescriptions = {
  "성산일출봉": "유네스코 세계자연유산으로 지정된 제주의 대표 명소이며, 정상에서 바라보는 일출과 바다 풍경이 유명합니다.",
  "협재해변": "맑은 에메랄드빛 바다와 비양도 풍경을 함께 볼 수 있는 제주 서쪽의 인기 해변입니다.",
  "우도": "제주 동쪽에서 배로 들어가는 섬으로 해안도로, 검멀레해변, 땅콩 아이스크림으로 잘 알려져 있습니다.",
  "안목해변": "강릉 커피거리와 맞닿아 있어 바다 산책과 카페 투어를 함께 즐기기 좋은 해변입니다.",
  "경포호": "잔잔한 호수 산책로와 벚꽃길로 유명하며 경포해변과 함께 둘러보기 좋은 강릉 명소입니다.",
  "초당순두부마을": "강릉의 대표 먹거리 골목으로 부드러운 순두부 요리와 지역 맛집을 즐길 수 있습니다.",
  "해운대": "부산을 대표하는 해변으로 넓은 백사장, 고층 빌딩 야경, 주변 맛집 접근성이 좋습니다.",
  "광안리": "광안대교 야경을 가까이 볼 수 있는 해변으로 저녁 산책과 카페, 식당 코스가 인기가 많습니다.",
  "감천문화마을": "알록달록한 집과 골목길 전망이 특징인 부산의 문화마을로 사진 찍기 좋은 명소입니다.",
  "전주한옥마을": "전통 한옥이 모여 있는 전주의 대표 관광지로 한복 체험과 길거리 음식을 함께 즐길 수 있습니다.",
  "경기전": "조선 태조 어진을 모신 역사 공간으로 전주한옥마을과 함께 둘러보기 좋은 문화유산입니다.",
  "남부시장": "전주 먹거리와 야시장 분위기를 느낄 수 있는 시장으로 한옥마을 여행 동선에 넣기 좋습니다.",
  "오동도": "동백나무와 해안 산책로가 유명한 여수의 대표 섬 관광지입니다.",
  "해상케이블카": "여수 바다와 돌산대교 일대를 공중에서 내려다볼 수 있는 인기 체험 코스입니다.",
  "낭만포차거리": "여수 밤바다 분위기와 해산물 요리를 함께 즐길 수 있는 야간 명소입니다.",
  "설악산": "속초와 인접한 국립공원으로 웅장한 산세, 단풍, 케이블카 코스가 유명합니다.",
  "속초해변": "동해 바다를 가까이 즐길 수 있는 속초 대표 해변으로 중앙시장과 함께 방문하기 좋습니다.",
  "중앙시장": "속초 먹거리 여행의 중심지로 닭강정, 오징어순대, 해산물 간식을 맛볼 수 있습니다.",
  "서피비치": "양양의 서핑 문화가 잘 드러나는 해변으로 이국적인 분위기와 해변 카페가 인기입니다.",
  "낙산사": "동해를 내려다보는 사찰로 의상대와 해수관음상 풍경이 인상적인 양양 명소입니다.",
  "하조대": "기암절벽과 정자, 해변 풍경이 어우러진 양양의 대표 해안 전망지입니다.",
  "남이섬": "나무길과 강변 산책로가 유명한 가평 대표 관광지로 계절마다 다른 풍경을 즐길 수 있습니다.",
  "아침고요수목원": "잘 가꾼 정원과 계절 축제가 있는 수목원으로 산책과 사진 촬영에 좋습니다.",
  "자라섬": "북한강변에 있는 섬으로 축제, 캠핑, 피크닉 장소로 잘 알려져 있습니다.",
  "경복궁": "조선 왕궁의 중심 공간으로 광화문, 근정전, 수문장 교대식 등을 볼 수 있는 서울 대표 고궁입니다.",
  "코엑스": "쇼핑몰, 전시관, 아쿠아리움, 별마당도서관이 모여 있는 강남의 복합 문화 공간으로 실내 데이트와 쇼핑 코스로 인기가 많습니다.",
  "남산타워": "서울 도심 전경을 한눈에 볼 수 있는 전망 명소로 야경 코스로 인기가 많습니다.",
  "성심당": "대전을 대표하는 빵집으로 튀김소보로와 다양한 베이커리 메뉴가 유명합니다.",
  "한밭수목원": "도심 속 넓은 녹지와 산책로를 갖춘 대전의 대표 휴식 공간입니다.",
  "엑스포과학공원": "대전 엑스포의 흔적과 과학 테마 공간을 볼 수 있는 가족 여행 명소입니다.",
  "김광석거리": "가수 김광석을 테마로 한 벽화와 음악 분위기를 느낄 수 있는 대구의 문화 거리입니다.",
  "서문시장": "대구의 대표 전통시장으로 야시장과 다양한 먹거리가 유명합니다.",
  "동성로": "대구의 중심 번화가로 쇼핑, 카페, 맛집을 한 번에 즐기기 좋습니다.",
  "양림동": "근대 건축물과 골목 산책 코스가 있는 광주의 역사문화 동네입니다.",
  "국립아시아문화전당": "전시, 공연, 문화 행사가 열리는 광주의 대표 복합문화공간입니다.",
  "무등산": "광주를 대표하는 산으로 등산과 전망, 계절 자연 풍경을 즐기기 좋은 명소입니다."
};

const attractionImages = {
  "성산일출봉": "photo/성산일출봉.png",
  "협재해변": "photo/협재해변.png",
  "우도": "photo/우도.png",
  "안목해변": "photo/안목해변.png",
  "경포호": "photo/경포호.png",
  "초당순두부마을": "photo/초당순두부마을.png",
  "해운대": "photo/해운대.png",
  "광안리": "photo/광안리.png",
  "감천문화마을": "photo/감천문화마을.png",
  "전주한옥마을": "photo/한옥마을.png",
  "경기전": "photo/경기전.png",
  "남부시장": "photo/남부시장.png",
  "오동도": "photo/오동도.png",
  "해상케이블카": "photo/해상케이블카.png",
  "낭만포차거리": "photo/낭만포차거리.png",
  "설악산": "photo/설악산.png",
  "속초해변": "photo/속초해변.png",
  "중앙시장": "photo/중앙시장.png",
  "서피비치": "photo/서퍼비치.png",
  "낙산사": "photo/낙산사.png",
  "하조대": "photo/하조대.png",
  "남이섬": "photo/남이섬.png",
  "아침고요수목원": "photo/아침고요수목원.png",
  "자라섬": "photo/자라섬.png",
  "경복궁": "photo/경복궁.png",
  "코엑스": "photo/코엑스.png",
  "남산타워": "photo/남산타워.png",
  "성심당": "photo/성심당.png",
  "한밭수목원": "photo/한밭수목원.png",
  "엑스포과학공원": "photo/엑스포과학공원.png",
  "김광석거리": "photo/김광석거리.png",
  "서문시장": "photo/서문시장.png",
  "동성로": "photo/동성로.png",
  "양림동": "photo/양림동.png",
  "국립아시아문화전당": "photo/아시아문화전당.png",
  "무등산": "photo/무등산.png"
};

function getAttractionDescription(place, spot) {
  return attractionDescriptions[spot] || `${place.name} 여행에서 함께 둘러보기 좋은 추천 관광지입니다.`;
}

function getNaverMapSearchUrl(place, spot) {
  return `https://map.naver.com/p/search/${encodeURIComponent(`${place.name} ${spot}`)}`;
}

function makeAttractionCard(place, spot, index) {
  const attractionId = `${place.id}-attraction-${index + 1}`;
  const mapUrl = getNaverMapSearchUrl(place, spot);
  const image = attractionImages[spot];

  return `
    <article class="detail-attraction-card">
      ${image
        ? `<img class="attraction-image" src="${image}" alt="${spot} 이미지">`
        : `<div class="attraction-image-slot">이미지 넣는 곳: ${attractionId}</div>`}
      <div class="attraction-card-body">
        <h3>${spot}</h3>
        <p>${getAttractionDescription(place, spot)}</p>
        <div class="attraction-actions">
          <a href="${mapUrl}" target="_blank" rel="noopener" data-attraction-map="${attractionId}">위치 보기</a>
        </div>
      </div>
    </article>
  `;
}

function getFoodItem(place, index) {
  const items = place.food.split(",").map((item) => item.trim()).filter(Boolean);
  return items[index] || items[0] || "지역 맛집";
}

function getTravelItinerary(place) {
  const [firstSpot, secondSpot, thirdSpot] = place.spots;

  return [
    {
      day: "1일차",
      rows: [
        ["10:00", `${place.name} 도착`, "숙소 위치와 이동 동선을 확인하고 가볍게 여행을 시작합니다.", "교통비 별도"],
        ["12:00", getFoodItem(place, 0), `${place.name} 대표 음식으로 점심 식사를 합니다.`, "10,000~20,000원"],
        ["14:00", firstSpot, getAttractionDescription(place, firstSpot), "0~15,000원"],
        ["18:00", "숙소 주변", "저녁 식사 후 산책하며 다음 날 일정을 정리합니다.", "15,000~35,000원"]
      ]
    },
    {
      day: "2일차",
      rows: [
        ["09:30", secondSpot, getAttractionDescription(place, secondSpot), "0~20,000원"],
        ["12:30", getFoodItem(place, 1), "지역 특색이 있는 메뉴로 점심을 먹습니다.", "10,000~25,000원"],
        ["15:00", thirdSpot, getAttractionDescription(place, thirdSpot), "0~20,000원"],
        ["19:00", "야경/카페 코스", `${place.food} 중 취향에 맞는 맛집이나 카페를 선택합니다.`, "15,000~35,000원"]
      ]
    },
    {
      day: "3일차",
      rows: [
        ["10:00", "여유 산책", `${place.name}의 분위기를 느낄 수 있는 가까운 산책 코스를 둘러봅니다.`, "0~10,000원"],
        ["12:00", getFoodItem(place, 2), "마지막 식사로 지역 먹거리를 즐깁니다.", "10,000~25,000원"],
        ["14:00", "기념품/시장", "간식과 기념품을 사고 이동 전 휴식합니다.", "10,000~30,000원"],
        ["16:00", "복귀", "역, 터미널, 공항으로 이동해 여행을 마무리합니다.", "교통비 별도"]
      ]
    }
  ];
}

function getDetailField(root, name) {
  return root.querySelector(`[data-field="${name}"]`);
}

function setDetailText(root, name, value) {
  const element = getDetailField(root, name);
  if (element) element.textContent = value;
}

function makeItineraryTable(place, dayPlan) {
  const table = document.querySelector("#itineraryTableTemplate").content.firstElementChild.cloneNode(true);
  const rowTemplate = document.querySelector("#itineraryRowTemplate");
  const tbody = table.querySelector("tbody");

  table.querySelector("caption").textContent = `${place.name} ${dayPlan.day} 추천 여행 코스`;
  dayPlan.rows.forEach((row) => {
    const tr = rowTemplate.content.firstElementChild.cloneNode(true);
    setDetailText(tr, "time", row[0]);
    setDetailText(tr, "place", row[1]);
    setDetailText(tr, "activity", row[2]);
    setDetailText(tr, "price", row[3]);
    tbody.appendChild(tr);
  });

  return table;
}

function getPackingItems(place) {
  return [
    "신분증/예약 확인 내역",
    "보조배터리와 충전기",
    "상비약과 개인 위생용품",
    "편한 신발",
    place.tags.includes("바다") ? "선크림과 여벌 옷" : "가벼운 겉옷",
    place.tags.includes("산") || place.tags.includes("자연") ? "물병과 작은 간식" : "휴대용 우산"
  ];
}

function makePackingChecklistItem(place, item, index) {
  const li = document.querySelector("#packingItemTemplate").content.firstElementChild.cloneNode(true);
  const input = li.querySelector("input");
  input.id = `${place.id}-packing-${index + 1}`;
  li.querySelector("span").textContent = item;

  return li;
}

function renderDetail(id) {
  const place = destinations.find((item) => item.id === id);
  if (!place) return;
  const isSaved = favorites.includes(place.id);
  const recommendedHotels = getRecommendedHotels(place.name);
  const itinerary = getTravelItinerary(place);
  const detail = document.querySelector("#detailTemplate").content.firstElementChild.cloneNode(true);
  const image = getDetailField(detail, "image");
  const favoriteButton = getDetailField(detail, "favoriteButton");
  const tags = getDetailField(detail, "tags");
  const itineraryStack = getDetailField(detail, "itinerary");
  const packingList = getDetailField(detail, "packing");
  const attractionList = getDetailField(detail, "attractions");
  const hotelList = getDetailField(detail, "hotels");

  image.src = place.image;
  image.alt = `${place.name} 풍경`;
  favoriteButton.classList.toggle("saved", isSaved);
  favoriteButton.dataset.favorite = place.id;
  favoriteButton.setAttribute("aria-label", `${place.name} 즐겨찾기`);

  setDetailText(detail, "name", place.name);
  setDetailText(detail, "intro", place.intro);
  setDetailText(detail, "course", place.course);
  setDetailText(detail, "food", place.food);
  setDetailText(detail, "transport", place.transport);
  setDetailText(detail, "location", place.location);
  setDetailText(detail, "cost", place.cost);
  setDetailText(detail, "season", place.season);
  setDetailText(detail, "tips", place.tips);

  place.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tags.appendChild(span);
  });

  itinerary.forEach((dayPlan) => {
    itineraryStack.appendChild(makeItineraryTable(place, dayPlan));
  });

  getPackingItems(place).forEach((item, index) => {
    packingList.appendChild(makePackingChecklistItem(place, item, index));
  });

  attractionList.innerHTML = place.spots.map((spot, index) => makeAttractionCard(place, spot, index)).join("");
  hotelList.innerHTML = recommendedHotels.length
    ? recommendedHotels.map((hotel) => makeDetailHotelCard(hotel)).join("")
    : `<div class="empty">아직 등록된 추천 숙소가 없습니다.</div>`;

  const detailContent = document.querySelector("#detailContent");
  detailContent.innerHTML = "";
  detailContent.appendChild(detail);

  showView("detail");
}

function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter((item) => item !== id)
    : [...favorites, id];
  updateFavoriteCount();
  updateHomeFavoriteButtons();
  renderFavorites();
  const activeDetail = document.querySelector("#detailView.active");
  if (activeDetail) renderDetail(id);
}
