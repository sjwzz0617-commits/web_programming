const views = {
  home: document.querySelector("#homeView"),
  detail: document.querySelector("#detailView"),
  favorites: document.querySelector("#favoritesView"),
  login: document.querySelector("#loginView"),
  signup: document.querySelector("#signupView"),
  train: document.querySelector("#trainView"),
  hotel: document.querySelector("#hotelView"),
  payment: document.querySelector("#paymentView"),
  checkout: document.querySelector("#checkoutView")
};

const favoriteList = document.querySelector("#favoriteList");
const favoriteCount = document.querySelector("#favoriteCount");

function updateFavoriteCount() {
  favoriteCount.textContent = favorites.length;
}

function updateHomeFavoriteButtons() {
  document.querySelectorAll("#homeView [data-favorite]").forEach((button) => {
    button.classList.toggle("saved", favorites.includes(button.dataset.favorite));
  });
}

function updateBookingSummary() {
  renderPaymentSummary();
}

function showView(viewName) {
  Object.values(views).forEach((view) => view.classList.remove("active"));
  views[viewName].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (viewName === "home") {
    document.querySelector("#tab-all").checked = true;
    renderHomeDestinations();
  }
  if (viewName === "favorites") renderFavorites();
  if (viewName === "train") renderTrainOptions();
  if (viewName === "hotel") renderHotels();
  if (viewName === "payment") renderPaymentSummary();
  if (viewName === "checkout") renderPaymentSummary();
}

