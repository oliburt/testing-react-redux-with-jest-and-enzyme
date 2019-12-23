import React from "react";
import Header from "./components/header";
import "./app.scss";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

class App extends React.Component {


  fetch = () => {
    this.props.fetchPosts();
  }

  render() {
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    };

    const { posts } = this.props;
    return (
      <div className="App" data-test='appComponent'>
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body, id } = post;
                const configListItem = {
                  title,
                  desc: body
                };

                return <ListItem key={id} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
