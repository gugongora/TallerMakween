document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([-33.02278421519157, -71.56742023631399], 11); // Centro del mapa en Madrid, España

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var apiKey = 'abb46a7e960f949ba57279dfe3ac84af'; // Reemplaza esto con tu clave API real
    var cities = ['Valparaíso', 'Santiago', 'Viña del Mar']; // Ejemplo de ciudades

    cities.forEach(function(city) {
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var temp = data.main.temp;
            var weather = data.weather[0].description;

            var marker = L.marker([lat, lon]).addTo(map);
            marker.bindPopup(`<strong>${city}</strong><br>Temp: ${temp}°C<br>${weather}`);
        })
        .catch(error => console.error('Error fetching data:', error));
    });
});
