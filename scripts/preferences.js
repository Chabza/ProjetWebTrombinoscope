// Evenement clic sur bouton "Enregistrer"
document.getElementById("save").addEventListener("click", function() {
    // Récupération de la valeur du select thème
    let theme = document.getElementById("theme").value
    // Récupération du bouton radio coché
    let typeAffichage = document.querySelector('input[name="typeAffichage"]:checked').value
    // Sauvegarde thème dans le LocalStorage
    localStorage.setItem("theme", theme)
    // Sauvegarde type d'affichage dans le LocalStorage
    localStorage.setItem("typeAffichage", typeAffichage)
})

// Chargement de la page
window.onload = function() {

    // Récupération thème depuis LocalStorage
    let selectTheme = localStorage.getItem("theme") 
    // Si un thème sauvegardé, appliqué au select
    if (selectTheme !== null) {
        document.getElementById("theme").value = selectTheme
    }
        
    // Récupération type d'affichage depuis LocalStorage
    let typeAffichage = localStorage.getItem("typeAffichage")
    // Si type d'affichage sauvegardé, on coche le bon bouton radio
    if (typeAffichage !== null) {
        document.querySelector(`input[name="typeAffichage"][value="${typeAffichage}"]`).checked = true
    }
}
