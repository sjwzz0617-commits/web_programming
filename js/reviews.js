// 화면에 있는 리뷰 폼, 리뷰 목록창, 안내 메시지창, 삭제 버튼 등을 자바스크립트로 가져옵니다.
const reviewForm = document.querySelector("#reviewForm");
const reviewList = document.querySelector("#reviewList");
const reviewMessage = document.querySelector("#reviewMessage");
const clearReviewsButton = document.querySelector("#clearReviews");
const reviewDateInput = document.querySelector("#reviewDate");
let reviews = []; // 사용자들이 작성한 리뷰들을 저장할 빈 배열(목록)입니다.

// 리뷰 날짜 입력창을 눌렀을 때 달력(날짜 선택창)이 부드럽게 열리도록 하는 기능입니다.
function openReviewDatePicker(input) {
  input.focus();

  if (typeof input.showPicker === "function") {
    try {
      input.showPicker(); // 브라우저 자체 달력 기능을 실행합니다.
    } catch (error) {
      // 보안 등의 이유로 자동 실행이 막히는 브라우저를 위한 예외 처리 영역입니다.
    }
  }
}

// 작성된 리뷰 데이터(이름, 날짜, 내용 등)를 받아와서 화면에 보여줄 HTML 태그 카드로 변환하는 함수입니다.
function makeReviewItem(review) {
  const item = document.createElement("li"); // 목록의 한 칸(li)을 만듭니다.
  item.className = "review-card"; // 스타일 적용을 위해 클래스 이름을 붙입니다.

  // 카드 내부에 들어갈 기본 구조(제목, 별점, 메타정보, 내용)를 세팅합니다.
  item.innerHTML = `
    <div class="review-card-head">
      <h3></h3>
      <span class="review-score"></span>
    </div>
    <ul class="review-meta">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <p class="review-content"></p>
  `;

  // 구조 안에 사용자가 실제 입력한 여행지, 만족도 점수를 채워넣습니다.
  item.querySelector("h3").textContent = review.destination;
  item.querySelector(".review-score").textContent = `만족도 ${review.rating}점`;

  // 작성자, 여행유형, 여행날짜, 리뷰 작성일을 순서대로 매칭하여 넣어줍니다.
  const metaItems = item.querySelectorAll(".review-meta li");
  metaItems[0].textContent = `작성자: ${review.name}`;
  metaItems[1].textContent = `여행유형: ${review.travelType}`;
  metaItems[2].textContent = `여행날짜: ${review.travelDate}`;
  metaItems[3].textContent = `리뷰 작성 날짜: ${review.createdAt}`;
  item.querySelector(".review-content").textContent = review.content; // 리뷰 본문 내용 입력

  return item; // 완성된 리뷰 카드 한 장을 반환합니다.
}

// 현재 저장된 모든 리뷰들을 화면에 싹 다시 그려주는 함수입니다.
function renderReviews() {
  reviewList.innerHTML = ""; // 기존에 화면에 떠 있던 리뷰들을 깨끗이 지웁니다.

  // 만약 등록된 리뷰가 하나도 없다면 안내 문구를 띄워줍니다.
  if (!reviews.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-review";
    emptyItem.textContent = "아직 등록된 리뷰가 없습니다. 첫 리뷰를 남겨보세요.";
    reviewList.appendChild(emptyItem);
    return;
  }

  // 리뷰가 있다면, 목록을 하나씩 돌면서 위에 만든 makeReviewItem 함수로 카드를 만들어 화면에 붙입니다.
  reviews.forEach((review) => {
    reviewList.appendChild(makeReviewItem(review));
  });
}

// 리뷰 작성 후 '등록(제출)' 버튼을 눌렀을 때 작동하는 코드입니다.
reviewForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 등록 시 페이지가 새로고침되는 것을 막아줍니다.

  const formData = new FormData(reviewForm); // 폼에 입력된 데이터들을 편리하게 한 번에 가져옵니다.
  
  // 사용자가 입력한 값들을 모아서 하나의 '리뷰 객체'로 묶어줍니다.
  const review = {
    destination: document.querySelector("#reviewDestination").value,
    name: document.querySelector("#reviewName").value.trim(),
    rating: formData.get("rating"),
    travelType: formData.get("travelType"),
    travelDate: reviewDateInput.value,
    content: document.querySelector("#reviewContent").value.trim(),
    createdAt: new Date().toLocaleDateString("ko-KR") // 오늘 날짜를 '연-월-일' 형태로 넣어줍니다.
  };

  // 모든 칸이 다 채워졌는지 검사합니다. 하나라도 비어있으면 경고 메시지를 띄우고 중단합니다.
  if (!review.destination || !review.name || !review.rating || !review.travelType || !review.travelDate || !review.content) {
    reviewMessage.textContent = "Please fill in every field.";
    return;
  }

  // 최신 리뷰가 맨 위로 올라오도록 기존 리뷰 목록 앞에 새 리뷰를 붙입니다.
  reviews = [review, ...reviews];
  reviewForm.reset(); // 작성이 끝났으니 입력창들을 깨끗하게 비워줍니다.
  reviewMessage.textContent = "Review added."; // 성공 메시지 표시
  renderReviews(); // 화면을 새로고침하여 등록된 리뷰를 보여줍니다.
});

// 리뷰 여행 날짜 창을 클릭하거나 커서를 가져다 대면 달력을 열어줍니다.
reviewDateInput.addEventListener("click", () => openReviewDatePicker(reviewDateInput));
reviewDateInput.addEventListener("focus", () => openReviewDatePicker(reviewDateInput));

// '리뷰 전체 삭제' 버튼을 눌렀을 때 실행되는 기능입니다.
clearReviewsButton.addEventListener("click", () => {
  // 지울 리뷰가 없다면 안내 메시지를 띄우고 함수를 끝냅니다.
  if (!reviews.length) {
    reviewMessage.textContent = "There are no reviews to delete.";
    return;
  }

  // 리뷰 배열을 빈 통([])으로 만들어서 모든 데이터를 지웁니다.
  reviews = [];
  reviewMessage.textContent = "All reviews were deleted."; // 삭제 완료 메시지 표시
  renderReviews(); // 지워진 상태의 깨끗한 화면을 다시 그려줍니다.
});

// 파일이 처음 실행될 때 저장된 리뷰 상태(처음엔 빈 화면)를 한 번 렌더링합니다.
renderReviews();
