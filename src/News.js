import React, { useState, useEffect } from 'react'
import './index.css'
import Article from './Article'
import Loader from './Loader'

export const News = () => {
    const [news, setNews] = useState([
        {heading: 'NewsOne'},
        {heading: 'NewsTwo'},
        {heading: 'NewsThree'},
        {heading: 'NewsFour'},
        {heading: 'NewsFive'},
    ])
      
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        fetch("https://diplomprjc.herokuapp.com/api/news")
            .then((resp) => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error(resp.statusText)
                }
            })
            .then(resp => {
                resp.forEach((_,index) => {
                    let newsDate = new Date(resp[index].date)
                    return resp[index].date = newsDate.toLocaleDateString('en-US',{year: 'numeric', month: 'long', day: 'numeric'}) + ' •'
                })
                return resp
            }).then(resp => {
                setNews(resp)
                setIsLoaded(true)
            }).catch(err => {console.log('err: ',err)})
    },[])
    

    return (
        <div className="news-block">
            <h1>News</h1>
            <div className="news-card-block">
                {news.map(article => (
                    <div className="article-block" key={article.heading}>{
                    isLoaded ? (
                        <Article
                            heading={article.heading}
                            tag={article.tag}
                            date={article.date}
                            img={article.img}
                        />) : <Loader key={article.heading} />}
                    </div>
                ))}
            </div>
            <div style={{display: 'inline-block'}}>
                <a href='/#' className="header-button news-button">More news</a>
            </div>
        </div>
    )
}