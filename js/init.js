function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);
  const threeDaysLater = new Date(today);
  threeDaysLater.setDate(today.getDate() + 3);

  document.querySelector("#trainDate").value = tomorrow.toISOString().slice(0, 10);
  document.querySelector("#checkinDate").value = formatDateInput(dayAfterTomorrow);
  document.querySelector("#checkoutDate").value = formatDateInput(threeDaysLater);
  updateHotelDateState();
}

populateHotelDestinations();
setDefaultDates();
updateTransportPlaceOptions();
updatePassengerOptions();
renderHomeDestinations();
renderTrainOptions();
renderHotels();
renderPaymentSummary();
updateFavoriteCount();
updateHomeFavoriteButtons();
