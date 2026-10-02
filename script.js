const CONFIG = {
  eventDate: "2026-11-14T16:00:00-06:00",
  whatsappNumber: "5215512345678", // México: 52 + número. Reemplaza por el tuyo.
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
  try {
    await music.play();
    musicOn = true;
    musicToggle.textContent = "🔊";
  } catch (error) {
    musicOn = false;
    musicToggle.textContent = "🔇";
  }
});

musicToggle.addEventListener("click", async () => {
  if (musicOn) {
    music.pause();
    musicOn = false;
    musicToggle.textContent = "🔇";
  } else {
    try {
      await music.play();
      musicOn = true;
      musicToggle.textContent = "🔊";
    } catch (error) {
      alert("Tu navegador bloqueó la reproducción automática. Toca de nuevo para intentar reproducir la música.");
    }
  }
});

function updateCountdown() {
  const target = new Date(CONFIG.eventDate).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = `
      <p class="eyebrow">¡Llegó el día!</p>
      <h2>¡Nos vemos en la fiesta! 🤠🌸</h2>
    `;
    return;
  }

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  document.getElementById("days").textContent = String(Math.floor(diff / day)).padStart(2, "0");
  document.getElementById("hours").textContent = String(Math.floor((diff % day) / hour)).padStart(2, "0");
  document.getElementById("minutes").textContent = String(Math.floor((diff % hour) / minute)).padStart(2, "0");
  document.getElementById("seconds").textContent = String(Math.floor((diff % minute) / 1000)).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

const whatsappMessage = `Hola 😊 Confirmo nuestra asistencia al cumpleaños de ${CONFIG.birthdayGirl}. Somos ___ adultos y ___ niños. 🤠🌸`;
const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
document.getElementById("whatsappBtn").href = whatsappUrl;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
