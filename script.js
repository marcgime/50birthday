// --- Countdown Timer ---
const targetDate = new Date('May 15, 2026 20:30:00').getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "¡EL EVENTO HA COMENZADO!";
    }
}, 1000);

// --- Carousel Logic ---
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('#nextBtn');
const prevButton = document.querySelector('#prevBtn');

let currentSlideIndex = 0;

function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(-' + (slideWidth * currentSlideIndex) + 'px)';
}

nextButton.addEventListener('click', () => {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    updateSlidePosition();
});

// Auto-advance carousel
setInterval(() => {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    updateSlidePosition();
}, 5000);

// --- Add to Calendar ---
const addToCalendarBtn = document.getElementById('addToCalendar');
const calendarOptions = document.getElementById('calendarOptions');

addToCalendarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    calendarOptions.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    calendarOptions.classList.add('hidden');
});

// Generate Calendar Links
const eventTitle = "Fiesta 50 Cumpleaños";
const eventLocation = "Restaurante El Mirador, Barcelona";
const eventDetails = "Celebración del 50 aniversario. ¡No faltes!";
const startDate = "20260515T203000Z"; // Format: YYYYMMDDTHHMMSSZ (UTC)
const endDate = "20260516T020000Z";

// Google Calendar Link
const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;
document.getElementById('googleCalendar').href = googleUrl;

// ICS File Link (Apple/Outlook)
// For a static site, we can generate a data URI for the ICS file
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
document.getElementById('appleCalendar').href = icsUrl;
document.getElementById('appleCalendar').download = "evento-50-cumpleaños.ics";
