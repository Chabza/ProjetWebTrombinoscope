// Déclaration variable
var map = L.map("map").setView([46.68279, 2.621971], 5.5)

// Affiche carte OpenStreetMap
L.tileLayer("https://tile.openstreetmap.de/{z}/{x}/{y}.png", {
    maxZoom: 20
}).addTo(map)

// Récupération données JSON + conditions
fetch("../data/promo.json")
    .then(response => response.json())
    .then(data => {
        data.apprenants.forEach(apprenant => {
            let lat = parseFloat(apprenant.coordonnees.latitude)
            let lng = parseFloat(apprenant.coordonnees.longitude)
            if (!isNaN(lat) && !isNaN(lng)) {
                L.marker([lat, lng])
                    .bindPopup(`<strong>${apprenant.prenom} ${apprenant.nom}</strong><br>${apprenant.ville}`)
                    .addTo(map)
            }
        })
    })
