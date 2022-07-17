import React from 'react'
import home from './resource/home.PNG'
import msg from './resource/msg.PNG'
import newpost from './resource/newpost.PNG'
import heart from './resource/heart.PNG'
import nav from './resource/nav.PNG'
import avt from './resource/teriteri_icon.png'

export default function Header() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="./styles_insta.css" />
  <section className="banner" style={{ position: "fixed", top: "0%" }}>
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png?20160616034027"
        alt="logo"
        id="logo"
      />
    </div>
    <div id="search">
      <input type="text" />
    </div>
    <img src= {home} alt="home" className="option" />
    <img src= {msg} alt="msg" className="option" />
    <img src= {newpost} alt="newpost" className="option" />
    <img src= {nav} alt="nav" className="option" />
    <img src={heart} alt="heart" className="option" />
    <img src={avt} alt="avt" className="option" />
  </section>
</>
  )
}
