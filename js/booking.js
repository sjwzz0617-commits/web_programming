function formatWon(price) {
  return `${price.toLocaleString("ko-KR")}원`;
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
    const selectedClass = booking.train && booking.train.id === train.id ? "selected" : "";

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
  updateBookingSummary();
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
  updateBookingSummary();
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
        <strong>이동수단 예약</strong>
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
    : `<div class="summary-item"><strong>선택된 예약 없음</strong><p>이동수단 또는 숙소를 선택하면 이곳에 표시됩니다.</p></div>`;
  totalPrice.textContent = formatWon(total);
}

function getRecommendedHotels(destination) {
  return hotels
    .filter((hotel) => hotel.destination === destination)
    .sort((a, b) => b.rating - a.rating || a.price - b.price);
}

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
        <button class="select-button" type="button" data-hotel="${hotel.id}">이 숙소 선택</button>
      </div>
    </article>
  `;
}

