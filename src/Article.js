import React, { Fragment, Suspense } from 'react'
import './index.css'
import Loader from './Loader'

export default function Article( {heading, tag, date, img} ) {

    return (
        <Fragment>
            <a href="#">
                <img
                    src={img}
                    className="article-image"
                />
            </a>
            <div className="article-heading">{heading}</div>
            <div className="article-tag">
                <a className="article-tag-btn" href="#">{tag}</a>
            </div>
            <div className="article-date">
                {date}
            </div>
        </Fragment>
    )
}