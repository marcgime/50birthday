// --- Countdown Timer ---
const targetDate = new Date('September 5, 2026 19:00:00').getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = days < 10 ? '0' + days : days;
    if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
    if (minutesEl) minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
    if (secondsEl) secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdown);
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) countdownEl.innerHTML = "¡L'ESDEVENIMENT HA COMENÇAT!";
    }
}, 1000);

// --- Carousel Logic ---
const track = document.querySelector('.carousel-track');
const slides = track ? Array.from(track.children) : [];
const nextButton = document.querySelector('#nextBtn');
const prevButton = document.querySelector('#prevBtn');

let currentSlideIndex = 0;

function updateSlidePosition() {
    if (slides.length > 0) {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(-' + (slideWidth * currentSlideIndex) + 'px)';
    }
}

if (nextButton) {
    nextButton.addEventListener('click', () => {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        updateSlidePosition();
    });
}

if (prevButton) {
    prevButton.addEventListener('click', () => {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
        updateSlidePosition();
    });
}

// Auto-advance carousel
setInterval(() => {
    if (slides.length > 0) {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        updateSlidePosition();
    }
}, 5000);

// --- Add to Calendar ---
const addToCalendarBtn = document.getElementById('addToCalendar');
const calendarOptions = document.getElementById('calendarOptions');

if (addToCalendarBtn) {
    addToCalendarBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        calendarOptions.classList.toggle('hidden');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    if (calendarOptions) {
        calendarOptions.classList.add('hidden');
    }
});

// Generate Calendar Links
const eventTitle = "Festa 50è Aniversari Jaume";
const eventLocation = "Venice Club, Terrassa, Barcelona";
const eventDetails = "Celebració del 50è aniversari d'en Jaume. No hi faltis!";
const startDate = "20260515T183000Z"; // 20:30 local (CEST is UTC+2 in May)
const endDate = "20260516T000000Z";

// Google Calendar Link
const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;
const googleCalendar = document.getElementById('googleCalendar');
if (googleCalendar) {
    googleCalendar.href = googleUrl;
}

// ICS File Link (Apple/Outlook)
const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://paginaweb50.github.io
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${eventTitle}
DESCRIPTION:${eventDetails}
LOCATION:${eventLocation}
END:VEVENT
END:VCALENDAR`;

const icsBlob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
const icsUrl = URL.createObjectURL(icsBlob);
const appleCalendar = document.getElementById('appleCalendar');
if (appleCalendar) {
    appleCalendar.href = icsUrl;
    appleCalendar.download = "esdeveniment-50-aniversari.ics";
}
