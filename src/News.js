import React, { useEffect } from 'react'
import './index.css'
import Article from './Article'
import Loader from './Loader'
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from "./Redux/actions";

export const News = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news.fetchedNews)
    
    useEffect(() => {
        dispatch(fetchNews())
    },[])
    

    return (
        <div className="news-block">
            <h1>News</h1>
            <div className="news-card-block">
                {news.map((article,index) => (
                    <div className="article-block" key={index}>{
                    article.isLoaded ? (
                        <Article
                            heading={article.heading}
                            tag={article.tag}
                            date={article.date}
                            img={article.img}
                        />) : <Loader key={index} />}
                    </div>
                ))}
            </div>
            <div style={{display: 'inline-block'}}>
                <a href='/#' className="header-button news-button">More news</a>
            </div>
        </div>
    )
}