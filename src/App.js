import React from "react";
import Header from "./components/header";
import "./app.scss";
import Headline from "./components/headline";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!"/>
        </section>
      </div>
    );
  }
}

export default App;
