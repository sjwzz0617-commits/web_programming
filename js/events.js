document.body.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const favoriteButton = event.target.closest("[data-favorite]");
  const detailButton = event.target.closest("[data-detail]");
  const removeButton = event.target.closest("[data-remove]");
  const trainButton = event.target.closest("[data-train]");
  const hotelButton = event.target.closest("[data-hotel]");
  const hotelDetailButton = event.target.closest("[data-hotel-detail]");

  if (viewButton) showView(viewButton.dataset.view);
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  if (detailButton) renderDetail(detailButton.dataset.detail);
  if (hotelDetailButton) renderHotelDetail(hotelDetailButton.dataset.hotelDetail);
  if (removeButton) {
    favorites = favorites.filter((id) => id !== removeButton.dataset.remove);
    renderFavorites();
    updateHomeFavoriteButtons();
  }
  if (trainButton && selectTrain(trainButton.dataset.train)) {
    alert("해당 이동수단을 장바구니에 추가하였습니다.");
  }
  if (hotelButton) {
    selectHotel(hotelButton.dataset.hotel);
    alert("장바구니에 추가되었습니다.");
  }
});

document.querySelector("#transportType").addEventListener("input", () => {
  updateTransportPlaceOptions();
  updatePassengerOptions();
  renderTrainOptions();
});

["#departureStation", "#arrivalStation", "#trainDate", "#passengerCount"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", renderTrainOptions);
});

const trainDateInput = document.querySelector("#trainDate");
trainDateInput.addEventListener("click", () => openDatePicker(trainDateInput));
trainDateInput.addEventListener("focus", () => openDatePicker(trainDateInput));

["#hotelDestination", "#checkinDate", "#checkoutDate", "#hotelSort"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", handleHotelFilterChange);
});

["#checkinDate", "#checkoutDate"].forEach((selector) => {
  const input = document.querySelector(selector);
  input.addEventListener("click", () => openDatePicker(input));
  input.addEventListener("focus", () => openDatePicker(input));
});

document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const id = document.querySelector("#loginEmail").value.trim();
  const password = document.querySelector("#loginPassword").value.trim();

  if (!id || !password) {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
    return;
  }

  if (password.length < 8) {
    alert("비밀번호를 다시한번 확인해주세요.");
    document.querySelector("#loginPassword").focus();
    return;
  }

  alert("로그인되었습니다.");
});

document.querySelector("#signupForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector("#signupName");
  const emailInput = document.querySelector("#signupEmail");
  const passwordInput = document.querySelector("#signupPassword");
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const namePattern = /^[가-힣]{3}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.com$/;

  if (!namePattern.test(name)) {
    alert("이름은 한글 세 글자로 입력해주세요.");
    nameInput.focus();
    return;
  }

  if (!emailPattern.test(email)) {
    alert("이메일에는 @와 .com이 포함되어야 합니다.");
    emailInput.focus();
    return;
  }

  if (password.length < 8) {
    alert("비밀번호는 8자 이상 입력해야합니다.");
    passwordInput.focus();
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
  const trainTotal = booking.trains.reduce((sum, train) => sum + train.total, 0);
  const total = trainTotal + (booking.hotel?.total || 0);

  if (!total) {
    message.textContent = "장바구니에 담을 이동수단이나 숙소를 먼저 선택해주세요.";
    return;
  }

  const payer = document.querySelector("#payerName").value.trim();
  const payerNamePattern = /^[가-힣]{3}$/;
  if (!payerNamePattern.test(payer)) {
    alert("유효한 이름이 아닙니다.");
    document.querySelector("#payerName").focus();
    return;
  }

  // select 대신 선택된 radio 버튼의 결제 수단 값을 사용합니다.
  const method = document.querySelector("input[name='payment']:checked").value;
  message.textContent = `${payer}님의 ${method} 주문이 완료되었습니다. 총 금액은 ${formatWon(total)}입니다.`;
});

document.addEventListener("DOMContentLoaded", () => {
  const bgmAudio = document.querySelector("#bgmAudio");
  const audioPlayBtn = document.querySelector("#audioPlayBtn");
  const bgmVolumeInput = document.querySelector("#bgmVolume");

  if (bgmAudio && audioPlayBtn && bgmVolumeInput) {
    bgmAudio.volume = bgmVolumeInput.value;

    audioPlayBtn.addEventListener("click", () => {
      if (bgmAudio.paused) {
        bgmAudio.play()
          .then(() => {
            audioPlayBtn.textContent = "정지";
            audioPlayBtn.style.backgroundColor = "var(--coral)";
          })
          .catch((error) => {
            console.error("자동재생 차단:", error);
          });
      } else {
        bgmAudio.pause();
        audioPlayBtn.textContent = "재생";
        audioPlayBtn.style.backgroundColor = "var(--sky)";
      }
    });

    bgmVolumeInput.addEventListener("input", (event) => {
      bgmAudio.volume = event.target.value;
    });
  }
});
