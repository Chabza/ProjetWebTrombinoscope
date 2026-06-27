// Récupération éléments HTML du tableau et des cartes
let listeApprenants = document.getElementById("listeApprenants") 
let listeCartes = document.getElementById("listeCartes")

// Chargement de la page
window.onload = function() { 
    
    // Récupération des données fichier JSON
    fetch("../data/promo.json") 
    .then(response => response.json())
    .then(data => {

        // Tâche 3.2 : affichage du nom de promo dans le nav
        let navPromo = document.getElementById("nomPromo")
        if (navPromo) navPromo.textContent = "Promo " + data.promo.nom

        // Pour chaque apprenant, création ligne dans tableau + carte
        data.apprenants.forEach(apprenant => {  

            // Création ligne du tableau
            let tr = document.createElement("tr")
            let tdNom = document.createElement("td")
            tdNom.innerText = apprenant.nom
            tr.appendChild(tdNom)
            
            let tdPrenom = document.createElement("td")
            tdPrenom.innerText = apprenant.prenom
            tr.appendChild(tdPrenom)
            
            let tdVille = document.createElement("td")
            tdVille.innerText = apprenant.ville
            tr.appendChild(tdVille)

            // Création cellule Détail avec bouton
            let tdDetail = document.createElement("td")
            let btnDetail = document.createElement("button")
            btnDetail.innerText = "Détail"
            // Tâche 3.1 : ouvrir la modale au clic
            btnDetail.addEventListener("click", function() {
                ouvrirModale(apprenant)
            })
            tdDetail.appendChild(btnDetail)
            tr.appendChild(tdDetail)
            listeApprenants.appendChild(tr)

            // Création de la carte
            let carte = document.createElement("div")
            carte.classList.add("carte")

            let img = document.createElement("img")
            img.src = apprenant.avatar
            // Avatar par défaut si l'image ne charge pas
            img.alt = apprenant.prenom + " " + apprenant.nom
            img.onerror = function() {
                this.src = "../images/avatar-default.png"
            }
            carte.appendChild(img)
            
            let pNom = document.createElement("p")
            pNom.innerText = apprenant.nom
            pNom.classList.add("nom")
            carte.appendChild(pNom)
            
            let pPrenom = document.createElement("p")
            pPrenom.innerText = apprenant.prenom
            pPrenom.classList.add("prenom")
            carte.appendChild(pPrenom)
            
            let pVille = document.createElement("p")
            pVille.innerText = apprenant.ville
            pVille.classList.add("ville")
            carte.appendChild(pVille)

            let pAnecdotes = document.createElement("p")
            pAnecdotes.innerText = apprenant.anecdotes
            pAnecdotes.classList.add("anecdotes")
            carte.appendChild(pAnecdotes)

            // Bouton Détail de la carte — ouvre aussi la modale
            let btnCarte = document.createElement("button")
            btnCarte.innerText = "Détail"
            btnCarte.addEventListener("click", function() {
                ouvrirModale(apprenant)
            })
            carte.appendChild(btnCarte)
            listeCartes.appendChild(carte)
        })
    })

    // Récupération type d'affichage depuis le LocalStorage
    let typeAffichage = localStorage.getItem("typeAffichage")
    if (typeAffichage !== null) {
        document.querySelector(`input[name="typeAffichage"][value="${typeAffichage}"]`).checked = true
        changerAffichage(typeAffichage)
    } else {
        changerAffichage("liste")
    }
}

// Fonction qui affiche le tableau ou les cartes selon le type d'affichage
function changerAffichage(typeAffichage) {
    if (typeAffichage === "liste") {
        document.getElementById("tableau").style.display = "block"
        document.getElementById("listeCartes").style.display = "none"
    } else {
        document.getElementById("listeCartes").style.display = "grid"
        document.getElementById("tableau").style.display = "none"
    }
}

// Evenement clic sur bouton radio "Liste"
document.getElementById("liste").addEventListener("click", function() {
    changerAffichage("liste")
})

// Evenement clic sur bouton radio "Cartes"
document.getElementById("cartes").addEventListener("click", function() {
    changerAffichage("cartes")
})

// ─── Tâche 3.1 : Modale ───────────────────────────────────────────

function ouvrirModale(apprenant) {
    // Remplissage des champs de la modale
    document.getElementById("modalNom").textContent = apprenant.nom
    document.getElementById("modalPrenom").textContent = apprenant.prenom
    document.getElementById("modalVille").textContent = apprenant.ville || "Non renseignée"
    document.getElementById("modalAnecdotes").textContent = apprenant.anecdotes || "Aucune anecdote renseignée."

    // Avatar : image de l'apprenant ou image par défaut
    let modalImg = document.getElementById("modalAvatar")
    modalImg.src = apprenant.avatar
    modalImg.alt = apprenant.prenom + " " + apprenant.nom
    modalImg.onerror = function() {
        this.src = "../images/avatar-default.png"
    }

    // Affichage de la modale
    document.getElementById("modale").style.display = "flex"
}

function fermerModale() {
    document.getElementById("modale").style.display = "none"
}

// Fermer la modale en cliquant sur la croix
document.getElementById("modalFermer").addEventListener("click", fermerModale)

// Fermer la modale en cliquant en dehors
document.getElementById("modale").addEventListener("click", function(e) {
    if (e.target === this) fermerModale()
})

// Fermer la modale avec la touche Echap (accessibilité)
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") fermerModale()
})
