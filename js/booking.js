function formatWon(price) {
  return `${price.toLocaleString("ko-KR")}원`;
}

const DAY_MS = 1000 * 60 * 60 * 24;

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDateInput(value) {
  if (!value) return null;

  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function getNextDateValue(value) {
  const date = parseDateInput(value);
  if (!date) return "";

  date.setDate(date.getDate() + 1);
  return formatDateInput(date);
}

function calculateNightCount(checkinValue, checkoutValue) {
  const checkin = parseDateInput(checkinValue);
  const checkout = parseDateInput(checkoutValue);

  if (!checkin || !checkout) return 1;
  return Math.max(1, Math.round((checkout - checkin) / DAY_MS));
}

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

function openDatePicker(input) {
  input.focus();

  if (typeof input.showPicker === "function") {
    try {
      input.showPicker();
    } catch (error) {
      // Some browsers only allow showPicker from a direct pointer action.
    }
  }
}

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

const airportOptions = ["김포공항", "인천공항", "제주공항"];

function setSelectOptions(select, options, preferredValue) {
  select.innerHTML = options
    .map((option) => `<option>${option}</option>`)
    .join("");

  if (preferredValue && options.includes(preferredValue)) {
    select.value = preferredValue;
  }
}

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

function getTrainSearchInfo() {
  return {
    transportType: document.querySelector("#transportType").value,
    departure: document.querySelector("#departureStation").value,
    arrival: document.querySelector("#arrivalStation").value,
    date: document.querySelector("#trainDate").value || "날짜 미정",
    passengers: Number(document.querySelector("#passengerCount").value)
  };
}

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
      const mapUrl = getHotelMapSearchUrl(hotel);

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
            <a class="location-button" href="${mapUrl}" target="_blank" rel="noopener">숙소 위치 보기</a>
          </div>
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
    checkout: filters.checkout,
    nights: filters.nights,
    total: hotel.price * filters.nights
  };
  updateBookingSummary();
  renderHotels();
}

function refreshSelectedHotelBooking() {
  if (!booking.hotel) return;

  const filters = getHotelFilters();
  booking.hotel.checkin = filters.checkin;
  booking.hotel.checkout = filters.checkout;
  booking.hotel.nights = filters.nights;
  booking.hotel.total = booking.hotel.price * filters.nights;
  updateBookingSummary();
}

function handleHotelFilterChange() {
  updateHotelDateState();
  refreshSelectedHotelBooking();
  renderHotels();
}

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

function getRecommendedHotels(destination) {
  return hotels
    .filter((hotel) => hotel.destination === destination)
    .sort((a, b) => b.rating - a.rating || a.price - b.price);
}

function getHotelMapSearchUrl(hotel) {
  return `https://map.naver.com/p/search/${encodeURIComponent(`${hotel.destination} ${hotel.name}`)}`;
}

function makeDetailHotelCard(hotel) {
  const selectedClass = booking.hotel && booking.hotel.id === hotel.id ? "selected" : "";
  const mapUrl = getHotelMapSearchUrl(hotel);

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
          <a class="location-button" href="${mapUrl}" target="_blank" rel="noopener">숙소 위치 보기</a>
        </div>
      </div>
    </article>
  `;
}

