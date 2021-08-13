import React, { Fragment } from 'react'
import './index.css'

export default function Article( {heading, tag, date, img} ) {

    return (
        <Fragment>
            <a href="/#">
                <img
                    src={process.env.PUBLIC_URL + img}
                    className="article-image"
                    alt={img}
                />
            </a>
            <div className="article-heading">{heading}</div>
            <div className="article-tag">
                <a className="article-tag-btn" href="/#">{tag}</a>
            </div>
            <div className="article-date">
                {date}
            </div>
        </Fragment>
    )
}