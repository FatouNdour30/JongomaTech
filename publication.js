// Fonction pour afficher les publications
function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.getElementById('postsContainer');

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p class="text-muted">Aucune publication trouvée.</p>';
    } else {
        postsContainer.innerHTML = ''; // Réinitialiser le conteneur avant d'afficher les nouvelles publications
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post-card', 'bg-light', 'rounded-4', 'p-4', 'mb-4', 'shadow-lg');
            postElement.innerHTML = `
                <div class="post-content">
                    <p>${post.content}</p>
                    <small class="text-muted">${new Date(post.date).toLocaleString()}</small>
                </div>
                <div class="post-visibility">
                    <span class="badge bg-secondary">${post.visibility}</span>
                </div>
                <button class="delete-btn btn btn-danger btn-sm mt-2">Supprimer</button>
            `;
            postsContainer.appendChild(postElement);

            // Ajouter l'événement pour supprimer la publication
            const deleteButton = postElement.querySelector('.delete-btn');
            deleteButton.addEventListener('click', function() {
                deletePost(index);
            });
        });
    }
}

// Fonction pour supprimer une publication
function deletePost(postIndex) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Supprimer la publication en utilisant l'index
    posts.splice(postIndex, 1);

    // Sauvegarder les publications mises à jour dans le localStorage
    localStorage.setItem('posts', JSON.stringify(posts));

    // Réafficher les publications après suppression
    displayPosts();
}

// Gérer la publication d'un message
document.addEventListener('DOMContentLoaded', function() {
    const publishButton = document.querySelector('.publish-btn');
    const postContent = document.getElementById('postContent');
    const visibilitySelect = document.getElementById('visibility');

    if (publishButton) {
        publishButton.addEventListener('click', function(event) {
            event.preventDefault();

            const content = postContent.value.trim();
            const visibility = visibilitySelect.value;

            // Vérifier que le contenu n'est pas vide
            if (content === '') {
                alert('Veuillez entrer un contenu pour votre publication.');
                return;
            }

            // Créer la publication
            const newPost = {
                content: content,
                visibility: visibility,
                date: new Date().toISOString()
            };

            // Récupérer les publications existantes et ajouter la nouvelle
            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push(newPost);

            // Sauvegarder les publications mises à jour
            localStorage.setItem('posts', JSON.stringify(posts));

            alert('Votre publication a été ajoutée !');

            // Réinitialiser le formulaire et rediriger
            postContent.value = '';
            window.location.href = 'publication.html'; // Rediriger vers la page des publications
        });
    }

    // Afficher les publications dès le chargement de la page
    displayPosts();
});






// Fonction pour changer l'image de profil (démonstration)
document.getElementById("changeImageBtn").addEventListener("click", function() {
    const newImageUrl = prompt("Entrez l'URL de votre nouvelle image de profil :");
    
    if (newImageUrl) {
        document.querySelector(".profile-img").src = newImageUrl;
    } else {
        alert("Aucune image sélectionnée !");
    }
});







