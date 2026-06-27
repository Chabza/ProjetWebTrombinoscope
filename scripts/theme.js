document.addEventListener("DOMContentLoaded", function() {
    // Récupération thème dans localStorage
    let theme = localStorage.getItem("theme")
    if (theme === "dark") {
        document.body.classList.add("dark")
    } else {
        document.body.classList.remove("dark")
    }
    
    // Lien actif dans la nav
    let urlActuelle = window.location.pathname
    document.querySelectorAll("nav a").forEach(lien => {
        if (lien.getAttribute("href") === urlActuelle.split("/").pop()) {
            lien.classList.add("active")
        }
    })
})