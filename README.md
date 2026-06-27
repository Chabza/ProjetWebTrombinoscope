# 🎓 ProjetWebTrombinoscope

Site web de promotion réalisé dans le cadre de la formation **Développeur Web et Web Mobile (RNCP niveau 5 / Bac+2)** à l'ENI École Informatique — Promotion **EDWM2605FT**.

---

## 🎯 Description

Application web multi-pages présentant les apprenants de la promotion sous forme de trombinoscope interactif. Elle permet de consulter la liste des apprenants, visualiser leurs localisations sur une carte de France, et personnaliser l'affichage du site via une page de préférences.

---

## 📄 Pages

| Page | Description |
|---|---|
| `index.html` | Accueil — liste des apprenants en format tableau ou cartes, avec modale de détail |
| `carte.html` | Carte interactive — marqueurs géolocalisés des apprenants |
| `informations.html` | Informations générales sur la formation |
| `preferences.html` | Paramétrage du thème (clair/sombre) et du format d'affichage |

---

## 🛠️ Technologies utilisées

- **HTML5** — structure des pages
- **CSS3** — mise en forme, responsive design, thème clair/sombre
- **JavaScript (pur)** — dynamisme, fetch, DOM, LocalStorage
- **Leaflet.js** — carte interactive open-source
- **Google Fonts** — polices Raleway & Black Ops One

---

## ✨ Fonctionnalités

- Affichage de la liste des apprenants en **tableau** ou en **cartes** (grid)
- **Modale de détail** par apprenant : avatar, nom, prénom, ville, anecdote
- Avatar par défaut si aucune image n'est renseignée
- **Carte interactive** avec marqueurs géolocalisés (Leaflet + OpenStreetMap)
- **Thème clair / sombre** persistant via LocalStorage
- **Préférences sauvegardées** entre les sessions (LocalStorage)
- Données centralisées dans un fichier JSON (`promo.json`)
- Design **responsive** (mobile, tablette, desktop)

---

## 📁 Structure du projet

```
ProjetWebTrombinoscope/
├── html/
│   ├── index.html          # Page d'accueil (trombinoscope)
│   ├── carte.html          # Carte interactive
│   ├── informations.html   # Informations de la formation
│   └── preferences.html    # Préférences utilisateur
├── styles/
│   ├── style.css           # Styles communs + thème sombre + modale
│   ├── accueil.css         # Styles du tableau
│   ├── ficheCarte.css      # Styles des cartes apprenants
│   ├── carte.css           # Styles de la page carte
│   ├── informations.css    # Styles de la page informations
│   └── preferences.css     # Styles de la page préférences
├── scripts/
│   ├── script.js           # Logique accueil : fetch, affichage, modale
│   ├── app.js              # Logique carte : Leaflet + marqueurs
│   ├── preferences.js      # Sauvegarde des préférences
│   └── theme.js            # Application du thème au chargement
├── data/
│   └── promo.json          # Données de la promotion et des apprenants
└── images/
    ├── logo.png
    ├── avatar-default.png  # Avatar affiché si aucune image renseignée
    └── avatar/             # Photos des apprenants
```

---

## 🚀 Lancer le projet

Aucune installation nécessaire. Ouvrir `html/index.html` dans un navigateur.

> ⚠️ Le `fetch` du fichier JSON nécessite un serveur local pour fonctionner correctement (les navigateurs bloquent les requêtes vers des fichiers locaux). Utiliser l'extension **Live Server** sur VS Code, ou tout autre serveur local.

---

## 🔄 Itérations réalisées

| Itération | Contenu |
|---|---|
| **1** | Structure HTML des 4 pages, formulaire de préférences, fichier JSON, affichage dynamique depuis le JSON, gestion LocalStorage |
| **2** | Carte interactive Leaflet avec marqueurs géolocalisés pour chaque apprenant |
| **3** | Modale de détail apprenant, avatar par défaut, enrichissement du JSON avec les données de la promo |

---

## 👩‍💻 Réalisé par

**Charlotte Bouazza** — apprenante en reconversion professionnelle.  
Formation : Développeur Web et Web Mobile — ENI École Informatique.  
Promotion EDWM2605FT — Mai à Octobre 2026.
