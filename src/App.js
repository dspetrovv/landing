import React from 'react'
import Article from './Article'

function App() {
  const news = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      heading: "New wallpaper pack released",
      tag: "Shop",
      date: "August 9, 2021 •"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1572025442937-d55974d9815f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      heading: "We've moved to a new office",
      tag: "Life",
      date: "August 9, 2021 •"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1615885656388-e0dc3a53c72d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      heading: "Results of the last championship",
      tag: "Championships",
      date: "August 9, 2021 •"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1473040713884-6be5953eba5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      heading: "Video: 'Fun moments in training'",
      tag: "Video",
      date: "August 9, 2021 •"
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1543165057-6fbd4d3d3bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      heading: "New merch is already in our store!",
      tag: "Shop",
      date: "August 9, 2021 •"
    },
  ];

  return (
    <div className="news-card-block">
      {news.map(article =>
        <Article
          key={article.id}
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
