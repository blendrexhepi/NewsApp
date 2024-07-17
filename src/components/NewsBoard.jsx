import React,{useEffect, useState} from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {
  const [articles,setArticle] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
    fetch(url).then(res => res.json()).then(data => setArticle(data.articles));


  },[category])

  return (
    <div>
      <h2>Latest <span class="badge text-bg-danger">News</span></h2>
      {articles.map((article,index) => (
       <NewsItem key={index} title={article.title} src={article.urlToImage} description={article.decription} url={article.url}/> 
      ))}
    </div>
  )
}

export default NewsBoard