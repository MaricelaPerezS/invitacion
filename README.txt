INVITACIÓN WESTERN VINTAGE — GUÍA RÁPIDA

ARCHIVOS
- index.html: textos, mapa, links y contenido.
- styles.css: colores, marcos, tipografías y animaciones.
- script.js: fecha de cuenta regresiva y WhatsApp.
- assets/: música y fotos.

1) DATOS DEL EVENTO
Abre index.html y reemplaza los datos de ejemplo: nombre, edad, fecha, hora, lugar, dirección, dress code, fecha límite de confirmación y textos.

2) CUENTA REGRESIVA + WHATSAPP
Abre script.js y cambia:
eventDate: "2026-11-14T16:00:00-06:00"
whatsappNumber: "52XXXXXXXXXX"
birthdayGirl: "Sofía"
age: 3

3) MÚSICA
Pon tu audio dentro de assets con el nombre exacto:
assets/musica.mp3
El navegador exige que el usuario toque primero la pantalla, por eso la música comienza al pulsar “Abrir invitación”.

4) MAPA
En Google Maps busca el lugar > Compartir > Insertar un mapa > copia la URL de src="..." del iframe.
En index.html reemplaza el src del iframe.
También reemplaza el href del botón “Abrir en Google Maps” por el link compartido del lugar.

5) RSVP EN GOOGLE FORMS + SHEETS
Crea un Google Form con Nombre/Familia, Asistirá, Adultos, Niños y Comentarios.
En Respuestas > Vincular con Hojas de cálculo crea la Sheet.
Luego reemplaza https://forms.google.com/ en index.html por tu enlace real.

6) FOTOS
Guarda tus fotos en assets como foto1.jpg, foto2.jpg y foto3.jpg.
Para mostrarlas, reemplaza por ejemplo:
<div class="photo-placeholder"><span>Foto 1</span></div>
por:
<img class="photo-placeholder" src="assets/foto1.jpg" alt="Sofía">

7) GITHUB PAGES
- Crea un repositorio público en GitHub.
- Sube index.html, styles.css, script.js y la carpeta assets.
- Settings > Pages > Deploy from a branch.
- Branch main / (root) > Save.
- Espera unos minutos y GitHub te dará una URL tipo:
  https://tuusuario.github.io/nombre-del-repo/

PALETA PRINCIPAL
Crema: #f5e8d0
Rosa empolvado: #b97770
Dorado antiguo: #b78a43
Café: #5d402b

Esta versión está inspirada en una estética western vintage floral: papel envejecido, rosa empolvado, oro antiguo, marcos ornamentales y tipografía serif elegante.
