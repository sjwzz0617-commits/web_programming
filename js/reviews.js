const reviewForm = document.querySelector("#reviewForm");
const reviewList = document.querySelector("#reviewList");
const reviewMessage = document.querySelector("#reviewMessage");
const clearReviewsButton = document.querySelector("#clearReviews");
const reviewDateInput = document.querySelector("#reviewDate");
let reviews = [];

function openReviewDatePicker(input) {
  input.focus();

  if (typeof input.showPicker === "function") {
    try {
      input.showPicker();
    } catch (error) {
      // Some browsers only allow showPicker from a direct pointer action.
    }
  }
}

function makeReviewItem(review) {
  const item = document.createElement("li");
  item.className = "review-card";

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

  item.querySelector("h3").textContent = review.destination;
  item.querySelector(".review-score").textContent = `만족도 ${review.rating}점`;

  const metaItems = item.querySelectorAll(".review-meta li");
  metaItems[0].textContent = `작성자: ${review.name}`;
  metaItems[1].textContent = `여행유형: ${review.travelType}`;
  metaItems[2].textContent = `여행날짜: ${review.travelDate}`;
  metaItems[3].textContent = `리뷰 작성 날짜: ${review.createdAt}`;
  item.querySelector(".review-content").textContent = review.content;

  return item;
}

function renderReviews() {
  reviewList.innerHTML = "";

  if (!reviews.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-review";
    emptyItem.textContent = "아직 등록된 리뷰가 없습니다. 첫 리뷰를 남겨보세요.";
    reviewList.appendChild(emptyItem);
    return;
  }

  reviews.forEach((review) => {
    reviewList.appendChild(makeReviewItem(review));
  });
}

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(reviewForm);
  const review = {
    destination: document.querySelector("#reviewDestination").value,
    name: document.querySelector("#reviewName").value.trim(),
    rating: formData.get("rating"),
    travelType: formData.get("travelType"),
    travelDate: reviewDateInput.value,
    content: document.querySelector("#reviewContent").value.trim(),
    createdAt: new Date().toLocaleDateString("ko-KR")
  };

  if (!review.destination || !review.name || !review.rating || !review.travelType || !review.travelDate || !review.content) {
    reviewMessage.textContent = "Please fill in every field.";
    return;
  }

  reviews = [review, ...reviews];
  reviewForm.reset();
  reviewMessage.textContent = "Review added.";
  renderReviews();
});

reviewDateInput.addEventListener("click", () => openReviewDatePicker(reviewDateInput));
reviewDateInput.addEventListener("focus", () => openReviewDatePicker(reviewDateInput));

clearReviewsButton.addEventListener("click", () => {
  if (!reviews.length) {
    reviewMessage.textContent = "There are no reviews to delete.";
    return;
  }

  reviews = [];
  reviewMessage.textContent = "All reviews were deleted.";
  renderReviews();
});

renderReviews();
