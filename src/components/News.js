import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

async function getNews(url) {
  let response = await fetch(url);
  let news = await response.json();
  return news;
}

export default function News() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  // const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-08-13&sortBy=publishedAt&apiKey=513d7ec2d5f443f197b934ceb0252ba4&page=${page}&pageSize=21`;
      let news = await getNews(url);
      setArticles(news.articles || []); // Set articles to an empty array if news.articles is undefined
      // setTotalResults(news.totalResults || 0); // Set totalResults to 0 if news.totalResults is undefined
    };
    fetchNews();
  }, [page]);

  const handlePreviousClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="row">
        {Array.isArray(articles) && articles.map((element) => {
          return (
            <NewsItem
              key={element.url}
              imgUrl={element.urlToImage}
              title={element.title ? element.title.slice(0, 30) : ""}
              description={
                element.description ? element.description.slice(0, 50) : ""
              }
              url={element.url}
            ></NewsItem>
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={handlePreviousClick}>
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="page-link">{page}</span>
            </li>
            <li className={`page-item ${articles.length === 0 ? "disabled" : ""}`}>
              <button className="page-link" onClick={handleNextClick}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
