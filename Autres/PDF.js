document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("pdfModal");
    const modalPDF = document.getElementById("modalPDF");
    const closeBtn = document.querySelector(".close");

    // Cible tous les éléments de la liste "realisation-item" pour attacher un gestionnaire d'événements
    const items = document.querySelectorAll('.realisation-item');

    items.forEach(item => {
        // Ajout d'un gestionnaire d'événement pour chaque élément
        item.addEventListener('click', function() {
            const pdfPath = item.getAttribute('data-pdf'); // Récupère le chemin du PDF depuis l'attribut data-pdf
            openPDFModal(pdfPath); // Ouvre la modale avec le chemin du PDF
        });
    });

    // Fonction pour ouvrir la modale avec le PDF
    function openPDFModal(pdfPath) {
        modalPDF.src = pdfPath; // Assigne le chemin du PDF à l'iframe
        modal.style.display = "block";  // Affiche la modale
    }

    // Ferme la modale lorsque l'on clique sur le bouton de fermeture
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";  // Cache la modale
        modalPDF.src = "";  // Vide l'iframe pour arrêter le PDF
    });

    // Ferme la modale si on clique en dehors de l'iframe
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";  // Cache la modale si l'on clique à l'extérieur
            modalPDF.src = "";  // Vide l'iframe pour arrêter le PDF
        }
    });
});
