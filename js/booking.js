// [1. 금액을 원화(₩) 형식 문자열로 변환하는 함수]
function formatWon(price) {
  return `${price.toLocaleString("ko-KR")}원`;
}

// [2. 날짜 계산용 하루 시간 상수 (밀리초 단위)]
const DAY_MS = 1000 * 60 * 60 * 24;

// [3. Date 객체를 YYYY-MM-DD 글자 형식으로 바꾸는 함수]
function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// [4. 날짜 글자(YYYY-MM-DD)를 계산 가능한 Date 객체로 바꾸는 함수]
function parseDateInput(value) {
  if (!value) return null;

  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

// [5. 지정한 날짜의 '다음날' 글자를 구해주는 함수]
function getNextDateValue(value) {
  const date = parseDateInput(value);
  if (!date) return "";

  date.setDate(date.getDate() + 1);
  return formatDateInput(date);
}

// [6. 체크인과 체크아웃 날짜로 '몇 박'인지 계산하는 함수]
function calculateNightCount(checkinValue, checkoutValue) {
  const checkin = parseDateInput(checkinValue);
  const checkout = parseDateInput(checkoutValue);

  if (!checkin || !checkout) return 1;
  return Math.max(1, Math.round((checkout - checkin) / DAY_MS));
}

// [7. 체크인 변경 시 체크아웃 날짜 제한 및 숙박 일수를 화면에 갱신하는 함수]
function updateHotelDateState() {
  const checkinInput = document.querySelector("#checkinDate");
  const checkoutInput = document.querySelector("#checkoutDate");
  const nightInput = document.querySelector("#nightCount");
  if (!checkinInput || !checkoutInput || !nightInput) return;

  const nextDate = getNextDateValue(checkinInput.value);
  if (nextDate) checkoutInput.min = nextDate;

  if (!checkoutInput.value || (nextDate && checkoutInput.value < nextDate)) {
    checkoutInput.value = nextDate;
  }

  nightInput.value = `${calculateNightCount(checkinInput.value, checkoutInput.value)}박`;
}

// [8. 날짜 클릭 시 브라우저 내장 달력 창을 열어주는 함수]
function openDatePicker(input) {
  input.focus();

  if (typeof input.showPicker === "function") {
    try {
      input.showPicker();
    } catch (error) {
    }
  }
}

// [9. 숙소 검색창의 여행지(목적지) 목록을 데이터 기반으로 채워넣는 함수]
function populateHotelDestinations() {
  const select = document.querySelector("#hotelDestination");
  if (!select || typeof destinations === "undefined") return;

  select.innerHTML = [
    `<option value="">전체</option>`,
    ...destinations.map((destination) => (
      `<option value="${destination.name}">${destination.name}</option>`
    ))
  ].join("");
}

// [10. 대중교통 선택용 기차역 데이터 배열]
const stationOptions = [
  "서울역",
  "강릉역",
  "부산역",
  "전주역",
  "여수엑스포역",
  "속초역",
  "양양역",
  "가평역",
  "대전역",
  "동대구역",
  "광주송정역"
];

// [11. 대중교통 선택용 공항 데이터 배열]
const airportOptions = ["김포공항", "인천공항", "제주공항"];

// [12. select 태그 내부에 option 목록을 일괄 삽입하고 이전 선택을 유지하는 함수]
function setSelectOptions(select, options, preferredValue) {
  select.innerHTML = options
    .map((option) => `<option>${option}</option>`)
    .join("");

  if (preferredValue && options.includes(preferredValue)) {
    select.value = preferredValue;
  }
}

// [13. 교통수단(기차/항공) 변경에 따라 출발지/도착지 선택지를 교체하는 함수]
function updateTransportPlaceOptions() {
  const transportType = document.querySelector("#transportType").value;
  const departure = document.querySelector("#departureStation");
  const arrival = document.querySelector("#arrivalStation");
  const options = transportType === "flight" ? airportOptions : stationOptions;
  const currentDeparture = departure.value;
  const currentArrival = arrival.value;

  setSelectOptions(departure, options, currentDeparture);
  setSelectOptions(arrival, options, currentArrival);

  if (departure.value === arrival.value && options.length > 1) {
    arrival.value = options[1];
  }
}

// [14. 현재 교통 검색창에 입력된 값들을 하나의 객체로 모아주는 함수]
function getTrainSearchInfo() {
  return {
    transportType: document.querySelector("#transportType").value,
    departure: document.querySelector("#departureStation").value,
    arrival: document.querySelector("#arrivalStation").value,
    date: document.querySelector("#trainDate").value || "날짜 미정",
    passengers: Number(document.querySelector("#passengerCount").value)
  };
}

// [15. 교통 종류에 따라 인원수 단위를 '명' 또는 '대'로 바꿔주는 함수]
function updatePassengerOptions() {
  const transportType = document.querySelector("#transportType").value;
  const label = document.querySelector("#passengerLabel");
  const select = document.querySelector("#passengerCount");
  const unit = transportType === "car" ? "대" : "명";

  label.firstChild.textContent = transportType === "car" ? "차량 수" : "인원";
  select.innerHTML = [1, 2, 3, 4]
    .map((count) => `<option value="${count}">${count}${unit}</option>`)
    .join("");
}

// [16. 선택된 조건에 맞는 교통 상품 카드를 화면에 그려주는 함수]
function renderTrainOptions() {
  const list = document.querySelector("#trainOptions");
  if (!list) return;

  const search = getTrainSearchInfo();
  const filteredProducts = trainProducts.filter((train) => train.category === search.transportType);

  list.innerHTML = filteredProducts.map((train) => {
    const total = train.price * search.passengers;
    const selectedClass = booking.trains.some((item) => item.id === train.id) ? "selected" : "";

    return `
      <article class="option-card ${selectedClass}">
        <h3>${train.type} ${train.time}</h3>
        <p>${search.departure} → ${search.arrival}</p>
        <p>${search.date} · ${search.passengers}${search.transportType === "car" ? "대" : "명"} · ${train.duration}</p>
        <strong class="price">${formatWon(total)}</strong>
        <button class="select-button" type="button" data-train="${train.id}">선택하기</button>
      </article>
    `;
  }).join("");
}

// [17. 특정 교통편을 선택했을 때 장바구니(booking.trains)에 담고 처리하는 함수]
function selectTrain(id) {
  const train = trainProducts.find((item) => item.id === id);
  if (!train) return false;

  const search = getTrainSearchInfo();
  const selectedTrain = {
    ...train,
    departure: search.departure,
    arrival: search.arrival,
    date: search.date,
    passengers: search.passengers,
    total: train.price * search.passengers
  };
  
  const duplicateIndex = booking.trains.findIndex((item) => (
    item.id === selectedTrain.id &&
    item.departure === selectedTrain.departure &&
    item.arrival === selectedTrain.arrival &&
    item.date === selectedTrain.date
  ));

  if (duplicateIndex >= 0) {
    booking.trains[duplicateIndex] = selectedTrain;
  } else if (booking.trains.length < 2) {
    booking.trains.push(selectedTrain);
  } else {
    alert("이동수단은 최대 2개까지 장바구니에 담을 수 있습니다.");
    return false;
  }

  updateBookingSummary();
  renderTrainOptions();
  return true;
}

// [18. 현재 숙소 필터 입력창들의 값(지역, 날짜, 정렬 등)을 모아주는 함수]
function getHotelFilters() {
  updateHotelDateState();

  return {
    destination: document.querySelector("#hotelDestination").value,
    checkin: document.querySelector("#checkinDate").value || "체크인 미정",
    checkout: document.querySelector("#checkoutDate").value || "체크아웃 미정",
    nights: parseInt(document.querySelector("#nightCount").value, 10) || 1,
    sort: document.querySelector("#hotelSort").value
  };
}

// [19. 필터 조건 및 정렬 기준에 맞춰 숙소 목록 카드를 화면에 그려주는 함수]
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
          <div class="hotel-actions">
            <button class="select-button" type="button" data-hotel="${hotel.id}">이 숙소 선택</button>
            <button class="location-button" type="button" data-hotel-detail="${hotel.id}">상세 보기</button>
          </div>
        </article>
      `;
    }).join("")
    : `<div class="empty">조건에 맞는 숙소가 없습니다.</div>`;
}

// [20. 특정 숙소를 선택했을 때 장바구니(booking.hotel)에 저장하는 함수]
function selectHotel(id) {
  const hotel = hotels.find((item) => item.id === id);
  if (!hotel) return;

  const filters = getHotelFilters();
  booking.hotel = {
    ...hotel,
    checkin: filters.checkin,
    checkout: filters.checkout,
    nights: filters.nights,
    total: hotel.price * filters.nights
  };
  updateBookingSummary();
  renderHotels();
}

// [21. 숙소가 담긴 상태에서 날짜가 바뀌면 가격과 기간을 재계산해주는 함수]
function refreshSelectedHotelBooking() {
  if (!booking.hotel) return;

  const filters = getHotelFilters();
  booking.hotel.checkin = filters.checkin;
  booking.hotel.checkout = filters.checkout;
  booking.hotel.nights = filters.nights;
  booking.hotel.total = booking.hotel.price * filters.nights;
  updateBookingSummary();
}

// [22. 숙소 검색 조건이 변경되었을 때 연쇄적인 화면 갱신을 통합 제어하는 함수]
function handleHotelFilterChange() {
  updateHotelDateState();
  refreshSelectedHotelBooking();
  renderHotels();
}

// [23. 장바구니에 담긴 내역을 모아 우측 영수증과 총 결제 금액을 그려주는 함수]
function renderPaymentSummary() {
  const summary = document.querySelector("#bookingSummary");
  const totalPrice = document.querySelector("#totalPrice");
  const checkoutSummary = document.querySelector("#checkoutSummary");
  const checkoutTotalPrice = document.querySelector("#checkoutTotalPrice");
  if (!summary || !totalPrice) return;

  const items = [];
  let total = 0;

  if (booking.trains.length) {
    booking.trains.forEach((train, index) => {
      total += train.total;
      items.push(`
        <div class="summary-item">
          <strong>이동수단 예약 ${index + 1}</strong>
          <p>${train.type} ${train.time}</p>
          <p>${train.departure} → ${train.arrival}</p>
          <p>${train.date} · ${train.passengers}${train.category === "car" ? "대" : "명"}</p>
          <p>${formatWon(train.total)}</p>
        </div>
      `);
    });
  }

  if (booking.hotel) {
    total += booking.hotel.total;
    items.push(`
      <div class="summary-item">
        <strong>숙소 예약</strong>
        <p>${booking.hotel.name}</p>
        <p>${booking.hotel.destination} · ${booking.hotel.checkin} ~ ${booking.hotel.checkout} · ${booking.hotel.nights}박</p>
        <p>${formatWon(booking.hotel.total)}</p>
      </div>
    `);
  }

  summary.innerHTML = items.length
    ? items.join("")
    : `<div class="summary-item"><strong>선택된 예약 없음</strong><p>이동수단 또는 숙소를 선택하면 이곳에 표시됩니다.</p></div>`;
  
  if (checkoutSummary) checkoutSummary.innerHTML = summary.innerHTML;
  totalPrice.textContent = formatWon(total);
  if (checkoutTotalPrice) checkoutTotalPrice.textContent = formatWon(total);
}

// [24. 특정 지역의 추천 숙소 목록을 평점순/가격순으로 정렬해서 가져오는 함수]
function getRecommendedHotels(destination) {
  return hotels
    .filter((hotel) => hotel.destination === destination)
    .sort((a, b) => b.rating - a.rating || a.price - b.price);
}

// [25. 숙소 정보를 이용해 네이버 지도 검색 링크 URL을 만들어주는 함수]
function getHotelMapSearchUrl(hotel) {
  return `https://map.naver.com/p/search/${encodeURIComponent(`${hotel.destination} ${hotel.name}`)}`;
}

// [26. 여행지 상세 페이지 하단에 들어갈 추천 숙소 미니 카드의 HTML 구조를 만드는 함수]
function makeDetailHotelCard(hotel) {
  const selectedClass = booking.hotel && booking.hotel.id === hotel.id ? "selected" : "";

  return `
    <article class="detail-hotel-card ${selectedClass}">
      <img src="${hotel.image}" alt="${hotel.name} 이미지">
      <div>
        <h3>${hotel.name}</h3>
        <p>${hotel.destination} · ${hotel.type}</p>
        <p class="rating">평점 ${hotel.rating}</p>
        <p>${hotel.description}</p>
        <strong class="price">${formatWon(hotel.price)} / 1박</strong>
        <div class="hotel-actions">
          <button class="select-button" type="button" data-hotel="${hotel.id}">이 숙소 선택</button>
          <button class="location-button" type="button" data-hotel-detail="${hotel.id}">상세 보기</button>
        </div>
      </div>
    </article>
  `;
}

// [27. 특정 숙소의 상세 정보창을 구성하고 네이버 지도(iframe)를 띄워주는 함수]
function renderHotelDetail(id) {
  const hotel = hotels.find((item) => item.id === id);
  if (!hotel) return;

  const mapUrl = getHotelMapSearchUrl(hotel);
  const serviceList = hotel.services
    .map((service) => `<li>${service}</li>`)
    .join("");

  document.querySelector("#detailContent").innerHTML = `
    <div class="detail-hero hotel-detail">
      <img src="${hotel.image}" alt="${hotel.name} 이미지">
      <div class="detail-main">
        <div class="detail-title-row">
          <div>
            <p class="eyebrow">Hotel Detail</p>
            <h1>${hotel.name}</h1>
            <p class="detail-intro">${hotel.description}</p>
          </div>
        </div>

        <section class="info-box hotel-info-box">
          <h3>숙소 정보</h3>
          <p>${hotel.destination} · ${hotel.type} · 평점 ${hotel.rating} · ${formatWon(hotel.price)} / 1박</p>
        </section>

        <section class="hotel-map-section">
          <h3>숙소 위치</h3>
          <iframe src="${mapUrl}" title="${hotel.name} 네이버 지도"></iframe>
          <p class="map-link-text">
            <a href="${mapUrl}" target="_blank" rel="noopener">위치 자세히 보기</a>
          </p>
        </section>

        <section class="hotel-service-section">
          <h3>숙소 서비스</h3>
          <ul>
            ${serviceList}
          </ul>
        </section>
      </div>
    </div>
  `;

  showView("detail");
}