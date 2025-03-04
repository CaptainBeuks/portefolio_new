// script.js

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    // Cible les boutons de la section organigramme pour afficher l'image
    document.querySelectorAll('.organigramme-section .card-button').forEach(button => {
        button.addEventListener('click', function () {
            // Vérifie sur quel bouton tu as cliqué et assigne l'image appropriée
            let imageSrc = '';

            if (this.textContent === "Organigramme IT Bouygues") {
                imageSrc = "../IMG/organigrame bouygues.png ";
            } else if (this.textContent === "Organigramme Colas DS") {
                imageSrc = "../IMG/organigramme CDS.png";
            } else if (this.textContent === "Equipes DSI") {
                imageSrc = "../IMG/Equipe DSI.png";
            }

            // Assigne l'image et ouvre la modale
            modalImage.src = imageSrc;
            modal.style.display = "block";  // Affiche la modale
        });
    });

    // Ajoute le comportement modal aux images des missions
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation(); // Empêche la propagation du clic à la carte parente
            modalImage.src = this.src;
            modal.style.display = "block";
        });
    });

    // Ferme la modale lorsque l'on clique sur le bouton de fermeture
    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";  // Cache la modale
    });

    // Ferme la modale si on clique en dehors de l'image
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";  // Cache la modale si l'on clique à l'extérieur
        }
    });

    // Gestion des cartes de mission
    document.querySelectorAll('.mission-header').forEach(header => {
        header.addEventListener('click', function() {
            const card = this.closest('.mission-card');
            
            // Ferme toutes les autres cartes
            document.querySelectorAll('.mission-card').forEach(c => {
                if (c !== card) {
                    c.classList.remove('active');
                }
            });

            // Bascule la classe active sur la carte cliquée
            card.classList.toggle('active');
        });
    });
});
