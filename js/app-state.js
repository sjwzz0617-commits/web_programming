// =======================================================
// 📍 [화면 통제실] 버튼 누르면 새로고침 없이 화면 바꾸는 곳
// =======================================================

const views = {
  home: document.querySelector("#homeView"),         // 홈 화면 박스
  detail: document.querySelector("#detailView"),     // 상세보기 화면 박스
  favorites: document.querySelector("#favoritesView"), // 하트 찜 화면 박스
  login: document.querySelector("#loginView"),       // 로그인 화면 박스
  signup: document.querySelector("#signupView"),     // 회원가입 화면 박스
  train: document.querySelector("#trainView"),       // 기차/비행기 화면 박스
  hotel: document.querySelector("#hotelView"),       // 숙소 화면 박스
  payment: document.querySelector("#paymentView"),   // 장바구니/결제 화면 박스
  checkout: document.querySelector("#checkoutView")  // 결제완료 화면 박스
};

const favoriteList = document.querySelector("#favoriteList");
const favoriteCount = document.querySelector("#favoriteCount");

// 찜한 여행지 개수 상단 바에 실시간으로 적어주기 (예: 즐겨찾기 3)
function updateFavoriteCount() {
  favoriteCount.textContent = favorites.length;
}

// 메인 화면에서 내가 찜한 카드들만 하트에 빨간불 켜기
function updateHomeFavoriteButtons() {
  document.querySelectorAll("#homeView [data-favorite]").forEach((button) => {
    button.classList.toggle("saved", favorites.includes(button.dataset.favorite));
  });
}

// 장바구니에 담긴 내역이랑 최종 돈 계산 다시 하라고 명령하기
function updateBookingSummary() {
  renderPaymentSummary();
}

// [★가장 중요] 다른 화면 다 숨기고 "내가 누른 화면만 딱 보여주는" 함수
function showView(viewName) {
  // 1. 일단 켜져 있던 모든 화면의 active(보여짐) 마크를 싹 지워서 숨김
  Object.values(views).forEach((view) => view.classList.remove("active"));
  
  // 2. 내가 지금 가려는 화면(viewName)에만 active 마크를 딱 붙여서 띄움
  views[viewName].classList.add("active");
  
  // 3. 화면이 바뀌었으니 페이지 맨 위로 스크롤을 부드럽게 올려줌
  window.scrollTo({ top: 0, behavior: "smooth" });
  
  // 4. 이동한 화면 종류에 맞게 필요한 데이터 화면에 새로 그려주기
  if (viewName === "home") {
    document.querySelector("#tab-all").checked = true; // 홈으로 오면 '전체' 탭 선택
    renderHomeDestinations(); // 홈 여행지 카드 그리기
  }
  if (viewName === "favorites") renderFavorites(); // 찜한 목록 그리기
  if (viewName === "train") renderTrainOptions(); // 기차 리스트 그리기
  if (viewName === "hotel") renderHotels(); // 숙소 리스트 그리기
  if (viewName === "payment") renderPaymentSummary(); // 결제 영수증 그리기
}