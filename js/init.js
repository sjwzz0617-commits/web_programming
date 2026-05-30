function setDefaultDates() {
  // 현재 날짜와 내일, 모레, 글피 날짜를 계산하는 과정입니다.
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);
  const threeDaysLater = new Date(today);
  threeDaysLater.setDate(today.getDate() + 3);

  // 계산한 날짜들을 기차 예약일, 호텔 체크인, 호텔 체크아웃 입력창에 기본값으로 넣어줍니다.
  document.querySelector("#trainDate").value = tomorrow.toISOString().slice(0, 10);
  document.querySelector("#checkinDate").value = formatDateInput(dayAfterTomorrow);
  document.querySelector("#checkoutDate").value = formatDateInput(threeDaysLater);
  updateHotelDateState(); // 바뀐 호텔 날짜 상태를 업데이트합니다.
}

// 웹페이지가 로딩되자마자 아래 기능들을 차례대로 실행하여 화면을 초기화합니다.
populateHotelDestinations(); // 호텔 목적지 선택지 목록 채우기
setDefaultDates(); // 위에 있는 기본 날짜 설정 함수 실행
updateTransportPlaceOptions(); // 교통편 출발/도착지 선택지 업데이트
updatePassengerOptions(); // 승객 수 선택지 업데이트
renderHomeDestinations(); // 홈 화면의 추천 여행지 보여주기
renderTrainOptions(); // 기차 시간표/옵션 보여주기
renderHotels(); // 호텔 목록 보여주기
renderPaymentSummary(); // 결제 예정 금액 합계 보여주기
updateFavoriteCount(); // 찜한(즐겨찾기) 개수 업데이트
updateHomeFavoriteButtons(); // 홈 화면의 즐겨찾기 버튼 상태 업데이트