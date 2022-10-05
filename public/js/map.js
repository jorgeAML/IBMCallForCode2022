//let startMap = document.getElementById('map');
var map = L.map('map').setView([14.63611, -90.61208], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
