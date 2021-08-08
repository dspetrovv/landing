import './index.css'

export default function Article( {heading, tag, date, img} ) {

    return (
        <div className="article-block">
            <img
                src={img}
                className="article-image"
            />
            <div className="article-heading">{heading}</div>
            <div className="article-tag">
                <a className="article-tag-btn" href="#">{tag}</a>
            </div>
            <div className="article-date">
                {date}
            </div>
        </div>
    )
}