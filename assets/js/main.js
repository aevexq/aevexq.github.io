
/* ==============================
   Dynamic Footer Year
============================== */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* ==============================
   Dynamic Browser Tab Title
============================== */

const originalTitle = document.title;
const awayTitle = "Don't leave! Come back! 😱";

document.addEventListener("visibilitychange", () => {
  document.title = document.hidden ? awayTitle : originalTitle;
});
