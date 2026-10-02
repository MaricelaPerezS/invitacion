const CONFIG = {
  eventDate: "2026-11-14T16:00:00-06:00",
  whatsappNumber: "5215512345678", // México: 52 + tu número de 10 dígitos, sin +, espacios ni guiones.
  birthdayGirl: "Sofía",
  age: 3
};

const intro = document.getElementById("intro");
const openInvite = document.getElementById("openInvite");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let musicOn = false;

openInvite.addEventListener("click", async () => {
  intro.classList.add("hidden");
  document.body.style.overflow = "auto";
  try {
    await music.play();
    musicOn = true;
    musicToggle.textContent = "♫";
  } catch (error) {
    musicOn = false;
    musicToggle.textContent = "♪";
  }
});

musicToggle.addEventListener("click", async () => {
  if (musicOn) {
    music.pause();
    musicOn = false;
    musicToggle.textContent = "♪";
  } else {
    try {
      await music.play();
      musicOn = true;
      musicToggle.textContent = "♫";
    } catch (error) {
      musicOn = false;
    }
  }
});

function updateCountdown() {
  const target = new Date(CONFIG.eventDate).getTime();
  const now = Date.now();
  const diff = target - now;
  const countdown = document.getElementById("countdown");

  if (diff <= 0) {
    countdown.innerHTML = `<div class="section-heading"><span class="mini-star">✦</span><p class="kicker">¡Llegó el día!</p><h2>Nos vemos en la fiesta</h2><div class="flourish">❦</div></div>`;
    return;
  }

  const day = 86400000;
  const hour = 3600000;
  const minute = 60000;
  document.getElementById("days").textContent = String(Math.floor(diff / day)).padStart(2, "0");
  document.getElementById("hours").textContent = String(Math.floor((diff % day) / hour)).padStart(2, "0");
  document.getElementById("minutes").textContent = String(Math.floor((diff % hour) / minute)).padStart(2, "0");
  document.getElementById("seconds").textContent = String(Math.floor((diff % minute) / 1000)).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

const whatsappMessage = `Hola 😊 Confirmo nuestra asistencia al cumpleaños de ${CONFIG.birthdayGirl}. Somos ___ adultos y ___ niños. 🤠🌸`;
document.getElementById("whatsappBtn").href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.10 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
