import React from 'react'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./resource', false, /\.(PNG|png|jpe?g|svg)$/));
export default function Body() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="./styles_insta.css" />
  <section className="main">
    <div
      style={{
        position: "absolute",
        width: "auto",
        height: "auto",
        overflow: "auto",
        right: "45%",
        top: "20%"
      }}
    >
      <div className="post">
        <div className="user" style={{ overflow: "hidden" }}>
          <img
            src={images['monika.png']}
            alt=""
            className="avatar"
            style={{ height: 70, width: 70 }}
          />
          <img
            src={images['monika.png']}
            alt=""
            className="avatar"
            style={{ height: 70, width: 70 }}
          />
          <img
            src={images['monika.png']}
            alt=""
            className="avatar"
            style={{ height: 70, width: 70 }}
          />
          <img
            src={images['monika.png']}
            alt=""
            className="avatar"
            style={{ height: 70, width: 70 }}
          />
        </div>
      </div>
      <div className="post">
        <div className="user">
          <img src={images['raiden.jpg']} alt="" className="avatar" />
          <h5 className="username">username</h5>
        </div>
        <img src={images['owo.png']} alt="Post" className="post_img" />
        <div className="comment_section">
          <img src={images['heart.PNG']} alt="heart" className="option" />
          <img
            src={images['text_bubble.PNG']}
            alt="text_bubble"
            className="option"
          />
          <img src={images['forward.PNG']}alt="forward" className="option" />
          <img
            src={images['save.PNG']}
            alt="save"
            className="option"
            style={{ position: "relative", left: "57.5%" }}
          />
          <h5 style={{ marginTop: "2%", marginBottom: "2%" }}>
            10,656,290 likes
          </h5>
          <p>Description</p>
          <p style={{ fontSize: 12, color: "#AB8E9D" }}>10 HOURS AGO</p>
          <div id="comment">
            <img
              src={images['emoji.PNG']}
              alt="emoji"
              className="avatar"
              style={{ height: 30, width: 30 }}
            />
            <input type="text" />
            <p id="sendButton">Post</p>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="user">
          <img src={images['raiden.jpg']} alt="" className="avatar" />
          <h5 className="username">username</h5>
        </div>
        <img src={images['dust.png']} alt="Post" className="post_img" />
        <div className="comment_section">
          <img src={images['heart.PNG']} alt="heart" className="option" />
          <img
            src={images['text_bubble.PNG']}
            alt="text_bubble"
            className="option"
          />
          <img src={images['forward.PNG']}alt="forward" className="option" />
          <img
            src={images['save.PNG']}
            alt="save"
            className="option"
            style={{ position: "relative", left: "57.5%" }}
          />
          <h5 style={{ marginTop: "2%", marginBottom: "2%" }}>
            10,656,290 likes
          </h5>
          <p>Description</p>
          <p style={{ fontSize: 12, color: "#AB8E9D" }}>10 HOURS AGO</p>
          <div id="comment">
            <img
              src={images['emoji.PNG']}
              alt="emoji"
              className="avatar"
              style={{ height: 30, width: 30 }}
            />
            <input type="text" />
            <p id="sendButton">Post</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
