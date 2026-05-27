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
    updateHomeFavoriteButtons();
  }
  if (trainButton) selectTrain(trainButton.dataset.train);
  if (hotelButton) {
    const isDetailHotel = Boolean(hotelButton.closest("#detailView"));
    selectHotel(hotelButton.dataset.hotel);
    if (isDetailHotel) alert("선택하신 숙소가 장바구니에 담겼습니다.");
  }
});

document.querySelector("#transportType").addEventListener("input", () => {
  updatePassengerOptions();
  renderTrainOptions();
});

["#departureStation", "#arrivalStation", "#trainDate", "#passengerCount"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", renderTrainOptions);
});

["#hotelDestination", "#checkinDate", "#nightCount", "#hotelSort"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", renderHotels);
});

document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const id = document.querySelector("#loginEmail").value.trim();
  const password = document.querySelector("#loginPassword").value.trim();

  if (!id || !password) {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
    return;
  }

  alert("로그인되었습니다.");
});

document.querySelector("#signupForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = document.querySelector("#signupEmail");
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("이메일 형식이 올바르지 않습니다.");
    emailInput.focus();
    return;
  }

  alert("회원가입이 완료되었습니다.");
});

document.querySelector("#payerPhone").addEventListener("input", (event) => {
  const numbers = event.target.value.replace(/[^0-9]/g, "").slice(0, 11);

  if (numbers.length <= 3) {
    event.target.value = numbers;
  } else if (numbers.length <= 7) {
    event.target.value = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    event.target.value = `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  }
});

document.querySelector("#paymentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector("#paymentMessage");
  const total = (booking.train?.total || 0) + (booking.hotel?.total || 0);

  if (!total) {
    message.textContent = "장바구니에 담을 이동수단이나 숙소를 먼저 선택해주세요.";
    return;
  }

  const payer = document.querySelector("#payerName").value.trim();
  const method = document.querySelector("#paymentMethod").value;
  message.textContent = `${payer}님의 ${method} 주문이 완료되었습니다. 총 금액은 ${formatWon(total)}입니다.`;
});

