import React from 'react'
import "./NewsItem.css"


function NewsItem(props){
    // let {title,description,imgUrl,publishedAt,newsUrl}=props
    return (
      <div>
<div className="content-wrapper">
  <div className="news-card">
    <a href={props.newsUrl} className="news-card__card-link">/</a>
    <img src={!props.imgUrl?"../favicon.jpg":props.imgUrl} className="card-img-top" alt="..."/>
    <div className="news-card__text-wrapper">
      <h2 className="news-card__title">{props.title}</h2>
      <div className="news-card__post-date">{props.publishedAt}</div>
      <div className="news-card__details-wrapper">
        <p className="news-card__excerpt">{props.description}</p>
        <a href={props.newsUrl} className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  
      </div>
      </div>
    )
}

export default NewsItem