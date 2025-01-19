document.addEventListener('DOMContentLoaded', () => {
    // Gestion du Mode Sombre
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Vérifie si le mode sombre est activé dans le localStorage et l'applique si nécessaire
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Événement pour activer/désactiver le mode sombre lorsqu'on clique sur le bouton
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Sauvegarde la préférence de l'utilisateur dans le localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Gestion des onglets (navigation entre les sections)
    const tabButtons = document.querySelectorAll('.tab-button'); // Sélection de tous les boutons d'onglets
    const tabContents = document.querySelectorAll('.tab-content'); // Sélection de toutes les sections d'onglets

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Désactive tous les boutons et sections actives
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Active l'onglet sélectionné
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // Simulateur de combat
    const simulateBtn = document.getElementById('simulate-btn'); // Bouton pour lancer la simulation
    const combatResult = document.getElementById('combat-result'); // Zone où afficher le résultat du combat

    simulateBtn.addEventListener('click', () => {
        const outcomes = [
            "Jon Snow remporte la victoire !",
            "Arya Stark gagne avec style !",
            "Tyrion Lannister déjoue son adversaire.",
            "Daenerys Targaryen triomphe avec ses dragons !",
            "Cersei Lannister manipule son chemin vers la victoire.",
            "Tormund Giantsbane prouve sa force indomptable !"
        ];
        
        // Sélection aléatoire d'un résultat de combat et affichage
        const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        combatResult.textContent = randomOutcome;
        combatResult.style.color = "#007BFF";  // Ajoute une couleur au texte du résultat
    });

    // Gestion du formulaire d'ajout de personnage
    const form = document.getElementById('ajout-personnage-form'); // Sélection du formulaire

    form.addEventListener('submit', event => {
        event.preventDefault(); // Empêche le rechargement de la page lors de la soumission

        // Récupération des valeurs du formulaire
        const nom = document.getElementById('nom').value.trim();
        const maison = document.getElementById('maison').value;

        // Vérification si le champ nom est vide
        if (nom === '') {
            alert('Veuillez entrer un nom valide.');
            return;
        }

        // Affichage du message de confirmation
        alert(`Personnage ajouté avec succès : ${nom} (${maison})`);
        
        // Réinitialisation du formulaire après soumission
        form.reset();
    });

    // Validation de l'email
    const emailInput = document.getElementById('email'); // Champ de saisie email
    const emailFeedback = document.getElementById('email-feedback'); // Message de retour pour l'utilisateur

    // Expression régulière pour valider une adresse email au format "Nom@gmail.com"
    const emailRegex = new RegExp("^([A-Z][a-z]*)@gmail.com$");

    emailInput.addEventListener('input', () => {
        if (emailRegex.test(emailInput.value)) {
            // Ajoute une classe de validation si l'email est correct
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            emailFeedback.textContent = "Adresse email valide.";
            emailFeedback.style.color = "green"; // Couleur verte si l'email est valide
        } else {
            // Ajoute une classe d'erreur si l'email est invalide
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            emailFeedback.textContent = "Veuillez entrer une adresse Gmail valide (Ex: John@gmail.com).";
            emailFeedback.style.color = "red"; // Couleur rouge si l'email est invalide
        }
    });

    // Gestion de la soumission du formulaire d'email
    document.getElementById('email-form').addEventListener('submit', (event) => {
        if (!emailRegex.test(emailInput.value)) {
            event.preventDefault(); // Empêche l'envoi si l'email est invalide
            alert("Veuillez entrer une adresse Gmail valide.");
        } else {
            alert("Inscription réussie !");
        }
    });

});
