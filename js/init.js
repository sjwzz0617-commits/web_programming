function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  document.querySelector("#trainDate").value = tomorrow.toISOString().slice(0, 10);
  document.querySelector("#checkinDate").value = dayAfterTomorrow.toISOString().slice(0, 10);
}

setDefaultDates();
updatePassengerOptions();
renderTrainOptions();
renderHotels();
renderPaymentSummary();
updateFavoriteCount();
updateHomeFavoriteButtons();
