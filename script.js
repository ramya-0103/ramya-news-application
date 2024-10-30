const apiKey = '44c74f8c495e47bf9d596e0dd46c5604';
const newsContainer = document.getElementById('news-container');

async function fetchNews() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const data = await response.json();
    
    if (data.status === "ok") {
        displayNews(data.articles);
    } else {
        newsContainer.innerHTML = `<p>Error fetching news: ${data.message}</p>`;
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = articles.map(article => `
        <div class="news-item">
            ${article.urlToImage ? `<img src="${article.urlToImage}" alt="News image">` : ''}
            <div>
                <h2>${article.title}</h2>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        </div>
    `).join('');
}

fetchNews();
