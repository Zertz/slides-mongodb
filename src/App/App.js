// @flow
import React, { PureComponent } from "react";
import Reveal from "reveal.js";

import "reveal.js/css/reveal.css";
import "reveal.js/css/theme/night.css";

import Slide from "../Slide";
import Slides from "../Slides";

class App extends PureComponent {
  centerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  emojiStyle = {
    fontSize: "96px"
  };

  imageStyle = {
    height: "35vh"
  };

  componentDidMount() {
    Reveal.initialize();
  }

  render() {
    return (
      <Slides>
        <Slide>
          <span role="img" aria-label="wave" style={this.emojiStyle}>
            👋
          </span>
          <h2 className="fragment">Pier-Luc</h2>
          <h4 className="fragment">Classcraft (Meteor + React)</h4>
        </Slide>
        <Slide>
          <h3>Pssst…</h3>
          <div className="fragment">
            <h3>👩🏻‍💻 Développeuse</h3>
            <hr />
            <h3>👨🏻‍💻 Développeur</h3>
          </div>
        </Slide>
        <Slide>
          <h2>MongoDB</h2>
          <p className="fragment">NoSQL-ish</p>
          <pre className="fragment">
            <code>
              {`
{
  "hello": "world"
}

{
  "lol": "cats"
}
                `.trim()}
            </code>
          </pre>
        </Slide>
        <Slide>
          <h2>Réplication</h2>
          <p className="fragment">oplog</p>
          <img
            className="fragment"
            src="rs.svg"
            alt="rs"
            style={this.imageStyle}
          />
        </Slide>
        <Slide>
          <h2>oplog tailing</h2>
          <img
            className="fragment"
            src="sheep.jpg"
            alt="sheep"
            style={this.imageStyle}
          />
        </Slide>
        <Slide>
          <span role="img" aria-label="Avantages" style={this.emojiStyle}>
            👍
          </span>
          <h3>
            <ul>
              <li className="fragment">Compatibilité</li>
            </ul>
          </h3>
        </Slide>
        <Slide>
          <span role="img" aria-label="Inconvénients" style={this.emojiStyle}>
            👎
          </span>
          <h3>
            <ul>
              <li className="fragment">Lourd</li>
              <li className="fragment">Très lourd</li>
              <li className="fragment">Vraiment très lourd</li>
            </ul>
          </h3>
        </Slide>
        <Slide>
          <h1>Change Streams</h1>
          <blockquote>
            "access real-time data changes without the complexity and risk of
            tailing the oplog"
          </blockquote>
        </Slide>
        <Slide>
          <span role="img" aria-label="Avantages" style={this.emojiStyle}>
            👍
          </span>
          <h3>
            <ul>
              <li className="fragment">Simple</li>
              <li className="fragment">Performant</li>
              <li className="fragment">Aggrégation</li>
            </ul>
          </h3>
          <small className="fragment">…acrostiche!</small>
        </Slide>
        <Slide>
          <span role="img" aria-label="Inconvénients" style={this.emojiStyle}>
            👎
          </span>
          <h3>
            <ul>
              <li className="fragment">MongoDB 3.6</li>
              <li className="fragment">???</li>
            </ul>
          </h3>
        </Slide>
        <Slide>
          <h2>Comment ça marche?</h2>
          <ol>
            <li className="fragment">Watch</li>
            <li className="fragment">Wait</li>
            <li className="fragment">Win</li>
          </ol>
        </Slide>
        <Slide>
          <h2>Watch</h2>
          <pre className="fragment">
            <code>
              {`
const client = await MongoClient.connect(uri);

client.db(db)
  .collection("Cats")
  .watch()
  .on("change", (data) => {
    // Do stuff
  });
              `.trim()}
            </code>
          </pre>
        </Slide>
        <Slide>https://github.com/Zertz/slides-mongodb</Slide>
        <Slide>Démo</Slide>
      </Slides>
    );
  }
}

export default App;
