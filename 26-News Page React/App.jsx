import { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedKeyword, setSelectedKeyword] = useState("memecoins");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.setAttribute("data-theme", darkMode ? "light" : "dark");
  };

  const keywords = [
    "memecoins",
    "bitcoin",
    "cryptomarket",
    "cryptocurrency",
    "blockchain",
    "ethereum",
    "defi",
    "nft"
  ];

  const fetchArticles = async (keyword) => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=039fb5e942b04fd48e1d7df42207bd29`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      const filteredArticles = data.articles.filter((article) =>
        !(
          article.title === "[Removed]" ||
          article.description === "[Removed]" ||
          article.source?.name === "[Removed]" ||
          article.content === "[Removed]"
        )
      );
      setArticles(filteredArticles);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching articles:", err);
    }
  };

  useEffect(() => {
    fetchArticles(selectedKeyword);
  }, [selectedKeyword]);

  return (
    <>
      <header className="header">
        <h1>News Articles</h1>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Keywords Selection */}
      <div className="keywords">
        {keywords.map((keyword) => (
          <button
            key={keyword}
            className="keyword-button"
            onClick={() => setSelectedKeyword(keyword)}
          >
            {keyword}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="articles-page">
        {error ? (
          <p className="error-message">Failed to load articles: {error}</p>
        ) : (
          articles.map((article, index) => (
            <article key={index} className="article">
              <img
                src={article.urlToImage || "https://via.placeholder.com/300"}
                alt={article.title}
                className="article-image"
              />
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-description">{article.description}</p>
                <div className="article-meta">
                  <span className="article-source">{article.source?.name}</span>
                  <span className="article-author">
                    {article.author || "Unknown Author"}
                  </span>
                  <span className="article-date">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-link"
              >
                Read more
              </a>
            </article>
          ))
        )}
      </div>
    </>
  );
}

export default App;
