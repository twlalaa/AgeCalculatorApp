"use strict";

const dayEl = document.getElementById("day");

const monthEl = document.getElementById("month");

const yearEl = document.getElementById("year");

const submitBtn = document.querySelector(".submit-btn");

const yearHTML = document.querySelector(".output-year");

const monthHTML = document.querySelector(".output-month");

const dayHTML = document.querySelector(".output-day");

const dayError = document.querySelector(".error-day");

const monthError = document.querySelector(".error-month");

const yearError = document.querySelector(".error-year");

const calc = () => {
  const today = new Date();

  const userDate = new Date(yearEl.value, monthEl.value - 1, dayEl.value);

  const secDiff = (today - userDate) / 1000;

  const yearDiff = Math.trunc(secDiff / 60 / 60 / 24 / 365);

  const monthDiff = Math.trunc(((secDiff / 60 / 60 / 24) % 365) / 30);

  const dayDiff = Math.trunc(((secDiff / 60 / 60 / 24) % 365) % 30);

  yearHTML.textContent = yearDiff;
  monthHTML.textContent = monthDiff;
  dayHTML.textContent = dayDiff;
};

const randomm = (x) => {
  return x == 2023
    ? Math.trunc(Math.random() * (x - 1900) + 1) + 1900
    : Math.trunc(Math.random() * x + 1);
};

submitBtn.addEventListener("click", () => {
  if (
    dayEl.value.trim() >= 1 &&
    dayEl.value.trim() <= 31 &&
    yearEl.value.trim() >= 1900 &&
    yearEl.value.trim() <= 2023 &&
    monthEl.value.trim() <= 12 &&
    monthEl.value.trim() >= 1
  ) {
    dayError.textContent = "";
    yearError.textContent = "";
    monthError.textContent = "";

    yearHTML.innerHTML = "0";
    const updateCounter = (x) => {
      if (x < 10) {
        yearHTML.innerHTML = `${randomm(2023)}`;
        monthHTML.innerHTML = `${randomm(12)}`;
        dayHTML.innerHTML = `${randomm(31)}`;
        if (x == 9) {
          calc();
        }
        setTimeout(() => updateCounter(x + 1), 30);
      }
    };

    updateCounter(0);
  } else {
    if (
      !dayEl.value.trim() ||
      dayEl.value.trim() < 1 ||
      dayEl.value.trim() > 31
    ) {
      dayError.textContent = "Enter a valid day!";
    } else {
      dayError.textContent = "";
    }
    if (
      !monthEl.value.trim() ||
      monthEl.value.trim() > 12 ||
      monthEl.value.trim() < 1
    ) {
      monthError.textContent = "Enter a valid month!";
    } else {
      monthError.textContent = "";
    }
    if (
      !yearEl.value.trim() ||
      yearEl.value.trim() < 1900 ||
      yearEl.value.trim() > 2023
    ) {
      yearError.textContent = "Enter a valid year!";
    } else {
      yearError.textContent = "";
    }
  }
});
