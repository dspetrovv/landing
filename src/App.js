import React from 'react'
import Article from './Article'

function App() {
  const news = [
    {id: 1, img: "https://cdn.sanity.io/images/ccckgjf9/production/d325e743ab06b3d996f3e9df5ed69ea6fb74b756-3840x2160.jpg?max-h=400&max-w=400&fit=scale&auto=format", photo: '', heading: "Here's some text blah blah blah", tag: "tag1", date: "August 9, 2021 •"},
    {id: 2, img: "https://www.csgowallpapers.com/assets/images/original_compressed/mossawi_42907774553_20180125152221_733984732956.png", photo: '', heading: "Here's some text blah blah blah", tag: "tag2", date: "August 9, 2021 •"},
    {id: 3, img: "https://i.pinimg.com/originals/95/a5/39/95a539b62ef9df0eed8c8b4f9821b3a5.jpg", photo: '', heading: "Here's some text blah blah blah", tag: "tag3", date: "August 9, 2021 •"},
    {id: 4, img: "https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", photo: '', heading: "Here's some text blah blah blah", tag: "tag4", date: "August 9, 2021 •"},
    {id: 5, img: "https://cdn.sanity.io/images/ccckgjf9/production/d325e743ab06b3d996f3e9df5ed69ea6fb74b756-3840x2160.jpg?max-h=400&max-w=400&fit=scale&auto=format", photo: '', heading: "Here's some text blah blah blah", tag: "tag3", date: "August 9, 2021 •"},
  ];

  return (
    <div className="news-card-block">
      {news.map(article =>
        <Article key={article.id}
          heading={article.heading}
          tag={article.tag}
          date={article.date}
          img={article.img}
        />
        )}
    </div>
  );
}

export default App;
