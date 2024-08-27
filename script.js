// Initialize the map
var map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Add a marker
var marker = L.marker([28.6139, 77.2090]).addTo(map)
    .bindPopup('Delhi')
    .openPopup();

// Add a circle
var circle = L.circle([19.0760, 72.8777], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50000
}).addTo(map).bindPopup("Mumbai");

// Add a polygon
var polygon = L.polygon([
    [13.0827, 80.2707],
    [12.9716, 77.5946],
    [11.0168, 76.9558]
]).addTo(map).bindPopup("Chennai-Bangalore-Coimbatore Triangle");

// Add click event
map.on('click', function(e) {
    alert("You clicked the map at " + e.latlng);
});
