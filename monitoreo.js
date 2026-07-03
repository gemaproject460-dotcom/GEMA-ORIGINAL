// ===============================
// INICIALIZAR MAPA
// ===============================

const map = L.map("map").setView([8.537981, -80.782127], 7);

// Mapa base
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

    attribution: "&copy; OpenStreetMap"

}).addTo(map);

// Marcador inicial
L.marker([8.537981, -80.782127])
.addTo(map)
.bindPopup("<b>Panamá</b><br>Centro del país.")
.openPopup();