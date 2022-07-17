import React from 'react'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./resource', false, /\.(PNG|png|jpe?g|svg)$/));
export default function Sidebar() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="./styles_insta.css" />
  <section className="main">
    <div id="accounts" style={{ position: "fixed", right: "20%", top: "10%" }}>
      <div className="user">
        <img
          src={images['teriteri.png']}
          alt=""
          className="avatar"
          style={{ height: 60, width: 60 }}
        />
        <div className="username">
          <h5>username</h5>
          <h5 className="name">Name</h5>
        </div>
        <p className="switch">Switch</p>
      </div>
      <div className="user" style={{ marginBottom: "7.5%", marginTop: "7.5%" }}>
        <h5 style={{ color: "#aeaeae" }}>Suggestion For You</h5>
        <h5 className="switch" style={{ color: "black" }}>
          See all
        </h5>
      </div>
      <div className="user">
        <img src={images['aichan.png']} alt="" className="avatar" />
        <div className="username">
          <h5>username</h5>
          <h5 className="name">Name</h5>
        </div>
        <p className="switch">Follow</p>
      </div>
      <div className="user">
        <img src={images['goku.png']} alt="" className="avatar" />
        <div className="username">
          <h5>username</h5>
          <h5 className="name">Name</h5>
        </div>
        <p className="switch">Follow</p>
      </div>
      <div className="user">
        <img src={images['da wae.PNG']} alt="" className="avatar" />
        <div className="username">
          <h5>username</h5>
          <h5 className="name">Name</h5>
        </div>
        <p className="switch">Follow</p>
      </div>
      <div className="user">
        <img src={images['watermark.png']} alt="" className="avatar" />
        <div className="username">
          <h5>username</h5>
          <h5 className="name">Name</h5>
        </div>
        <p className="switch">Follow</p>
      </div>
      <div className="user">
        <img
          src={images['Captain_Hyperion.jpg']}
          alt=""
          className="avatar"
        />
        <div className="username">
          <h5>username</h5>
          <h5 className="name">Name</h5>
        </div>
        <p className="switch">Follow</p>
      </div>
    </div>
  </section>
</>

  )
}
