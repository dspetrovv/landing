import React, { Fragment } from 'react'
import './index.css'
import { Header } from './Header'
import { News } from './News'
import { Join } from './Join'
import { Shop } from './Shop'
import { Footer } from './Footer'

function App() {
  
  return (
    <Fragment>
      <Header />
      <News />
      <Join />
      <Shop />
      <Footer />
    </Fragment>
  );
}

export default App;
