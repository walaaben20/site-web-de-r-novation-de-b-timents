document.getElementById("avisForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Récupère les valeurs
    const nom = document.getElementById("nom").value;
    const commentaire = document.getElementById("commentaire").value;
  
    // Crée un nouvel élément de commentaire
    const commentaireDiv = document.createElement("div");
    commentaireDiv.classList.add("commentaire");
    commentaireDiv.innerHTML = `<strong>${nom}</strong>: ${commentaire}`;
  
    // Ajoute le commentaire au conteneur
    document.getElementById("commentaires").appendChild(commentaireDiv);
  
    // Réinitialise le formulaire
    document.getElementById("avisForm").reset();
  });
  