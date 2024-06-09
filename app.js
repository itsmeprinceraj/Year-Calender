// created by PRINCE RAJ

let monthsWrapper = document.querySelector(".months-wrapper");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let yearHeader = document.querySelector(".Current-year"); // Reference to the year header element

let date = new Date();
let currentYear = date.getFullYear();

let months = [
    "January",
    "February", 
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]; 

function getCalendar() {
    monthsWrapper.innerHTML = "";
    yearHeader.textContent = currentYear; // Update the year display

    for (let i = 0; i < months.length; i++) {
        let monthWrap = document.createElement("div");
        monthWrap.className = "month-wrapper";
        monthWrap.innerHTML = `<div class="month-header">
                    <h3 class="month">${months[i]}</h3>
                </div>
                <ul class="weeks"></ul>
                <ul class="days"></ul>`;

        monthsWrapper.insertAdjacentElement("beforeend", monthWrap);
        getWeeks(monthWrap.querySelector(".weeks"));
        getDates(monthWrap.querySelector(".days"), i);
    }
}

function getWeeks(weeksWrapper) {
    let liTag = "";
    for (let i = 0; i < days.length; i++) {
        liTag += `<li>${days[i]}</li>`;
    }
    weeksWrapper.innerHTML = liTag;
}

function getDates(daysWrapper, month) {
    // Getting the last date of this month
    let lastDateofMonth = new Date(currentYear, month + 1, 0).getDate();
    // Getting the first day of this month
    let firstDayofMonth = new Date(currentYear, month, 1).getDay();
    // Getting the last day of this month
    let lastDayofMonth = new Date(currentYear, month, lastDateofMonth).getDay();
    let liTag = "";

    // Getting all last dates of the last month with null value
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li></li>`;
    }

    // Getting all dates of the month
    for (let i = 1; i <= lastDateofMonth; i++) {
        liTag += `<li>${i}</li>`;
    }

    // Getting all first dates of the next month with the null value
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li></li>`;
    }

    daysWrapper.innerHTML = liTag;
}

getCalendar();

prevBtn.addEventListener("click", () => {
    currentYear = currentYear - 1;
    getCalendar();
});

nextBtn.addEventListener("click", () => {
    currentYear = currentYear + 1;
    getCalendar();
});
