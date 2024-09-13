import React from "react";

export default function NewsItem({ imgUrl, title, description, url }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={url}  rel="noreferrer" target="_blank" className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
