document.body.addEventListener("click", (event) => {
  // 사용자가 클릭한 요소가 특정 버튼(화면 전환, 즐겨찾기, 상세정보 등)인지 확인하고 가져옵니다.
  // .closest()는 클릭한 위치에서 가장 가까운 상위 태그를 찾는 기능입니다.
  const viewButton = event.target.closest("[data-view]");
  const favoriteButton = event.target.closest("[data-favorite]");
  const detailButton = event.target.closest("[data-detail]");
  const removeButton = event.target.closest("[data-remove]");
  const trainButton = event.target.closest("[data-train]");
  const hotelButton = event.target.closest("[data-hotel]");
  const hotelDetailButton = event.target.closest("[data-hotel-detail]");

  // 각각의 버튼이 실제로 클릭되었다면(존재한다면), 그에 맞는 함수를 실행합니다.
  if (viewButton) showView(viewButton.dataset.view); // 화면 보기 전환
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite); // 즐겨찾기 추가/해제
  if (detailButton) renderDetail(detailButton.dataset.detail); // 상세 정보 표시
  if (hotelDetailButton) renderHotelDetail(hotelDetailButton.dataset.hotelDetail); // 호텔 상세 정보 표시
  
  // 즐겨찾기 목록에서 특정 항목을 삭제하는 기능입니다.
  if (removeButton) {
    // .filter()를 이용해 삭제하려는 id만 빼고 새로운 즐겨찾기 목록을 만듭니다.
    favorites = favorites.filter((id) => id !== removeButton.dataset.remove);
    renderFavorites(); // 바뀐 목록을 화면에 다시 그려줍니다.
    updateHomeFavoriteButtons(); // 홈 화면의 버튼 상태도 업데이트합니다.
  }
  
  // 기차(이동수단) 선택 버튼을 눌렀을 때 장바구니에 추가하는 기능입니다.
  if (trainButton && selectTrain(trainButton.dataset.train)) {
    alert("해당 이동수단을 장바구니에 추가하였습니다.");
  }
  
  // 호텔 선택 버튼을 눌렀을 때 장바구니에 추가하는 기능입니다.
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