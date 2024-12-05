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