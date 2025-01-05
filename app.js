// Animation de notification et chat
document.querySelector('.send-btn').addEventListener('click', function() {
    const input = document.querySelector('.chat-input');
    const message = input.value.trim();
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        document.querySelector('.message-list').appendChild(messageElement);
        input.value = '';
        messageElement.scrollIntoView({ behavior: 'smooth' });
    }
});

// Effet de notification
document.querySelector('.notification-bell').addEventListener('click', function() {
    const dropdown = document.querySelector('.notification-dropdown');
    dropdown.classList.toggle('show');
});

// Filtrage dynamique des projets par catégorie
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        filterProjects(category);
    });
});

function filterProjects(category) {
    projectItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Interaction pour les boutons de vote et de commentaire
const voteButtons = document.querySelectorAll('.vote-btn');
voteButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Merci pour votre vote!');
    });
});

const commentButtons = document.querySelectorAll('.comment-btn');
commentButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Laissez un commentaire sur ce projet!');
    });
});








// Fonction pour ouvrir le modal et afficher les détails de la technologie sélectionnée
function openTechDetails(techName) {
    let techDescription = "";

    // Selon le nom de la technologie, on affiche un contenu spécifique dans le modal
    switch (techName) {
        case 'IA':
            techDescription = `
                <h5>Intelligence Artificielle (IA)</h5>
                <p>L'intelligence artificielle (IA) permet aux machines de simuler l'intelligence humaine. Elle est utilisée dans divers secteurs comme la santé, la finance, l'éducation, etc. L'IA transforme des données en solutions pratiques pour de nombreux défis mondiaux.</p>
                <p><strong>Applications :</strong> Automatisation, Chatbots, Vision par ordinateur, Prédictions, etc.</p>
            `;
            break;
        case 'Blockchain':
            techDescription = `
                <h5>Blockchain</h5>
                <p>La blockchain est une technologie décentralisée utilisée principalement dans la finance pour les transactions sécurisées. Elle peut également être utilisée pour l'authentification de données et la traçabilité des informations.</p>
                <p><strong>Applications :</strong> Cryptomonnaies (Bitcoin, Ethereum), Smart Contracts, Supply Chain, etc.</p>
            `;
            break;
        case 'Data Science':
            techDescription = `
                <h5>Data Science</h5>
                <p>La Data Science utilise les statistiques, l'analyse des données et les algorithmes pour extraire des informations utiles. C'est une compétence clé pour la prise de décisions éclairées dans tous les secteurs.</p>
                <p><strong>Applications :</strong> Prédictions, Big Data, Apprentissage automatique, Marketing, etc.</p>
            `;
            break;
        default:
            techDescription = "<p>Détails indisponibles pour cette technologie.</p>";
    }

    // Mise à jour du contenu dans le modal
    document.getElementById('techModalContent').innerHTML = techDescription;

    // Affichage du modal
    var myModal = new bootstrap.Modal(document.getElementById('techModal'));
    myModal.show();
}




document.addEventListener("DOMContentLoaded", function() {
    // Animation de la section de contenu au scroll
    const revealElements = document.querySelectorAll('.reveal');
    const onScroll = () => {
        revealElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check for any already visible items

    // Gestion de l'aperçu du post
    const postContent = document.getElementById('postContent');
    const postPreview = document.getElementById('postPreview');
    const previewContent = document.getElementById('previewContent');

    postContent.addEventListener('input', () => {
        if (postContent.value.trim() !== "") {
            previewContent.textContent = postContent.value;
            postPreview.classList.remove('d-none');
        } else {
            postPreview.classList.add('d-none');
        }
    });

    // Gestion des modales et boutons
    const modernBtns = document.querySelectorAll('.modern-btn');
    modernBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Dynamique des boutons pour la galerie, photo/vidéo, événement
            console.log(`Bouton cliqué: ${this.innerText}`);
        });
    });
});
