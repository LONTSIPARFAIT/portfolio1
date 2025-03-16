const articles = [
    {
        title: "Titre de l'article 1",
        content: "Contenu de l'article 1..."
    },
    {
        title: "Titre de l'article 2",
        content: "Contenu de l'article 2..."
    }
];

const articlesContainer = document.getElementById('articles');

articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');
    articleElement.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.content}</p>
    `;
    articlesContainer.appendChild(articleElement);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    // Affichez un message de confirmation dans la console (ou faites quelque chose avec ces données)
    console.log(`Nom: ${name}, Email: ${email}, Message: ${message}`);

    // Réinitialiser le formulaire
    event.target.reset();

    // Afficher un message de confirmation à l'utilisateur
    alert('Merci de votre message, ' + name + '! Je vous répondrai bientôt.');
});