import firebase from "firebase";
import {BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom";
import Home from "./home/home";
import Content from "./content/Content";
import NotFound from "./notFound/NotFound";
import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const db = firebase.firestore();
    db.collection("content")
      .orderBy("title")
      .get()
      .then((querySnapshot) => {
        const contentItems = [];
        querySnapshot.forEach((doc) => {
          const contentItem = doc.data();
          contentItem.id = doc.id;
          contentItems.push(contentItem);
        });

        this.setState({
          contentItems: contentItems
        });
      });
  }

  render() {
    return (
      <Router>
        <main>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              {this.state.contentItems &&
              this.state.contentItems.map((contentItem, index) => {
                return (
                  <li key={index}><Link to={{
                    pathname: `/content/${contentItem.id}`,
                    state: { contentItem: contentItem }
                  }}>{contentItem.title}</Link></li>
                );
              })}
            </ul>
          </nav>

          <Route
            path="/"
            exact
            component={Home}/>
          <Route
            path="/content/:contentId"
            component={Content}/>
          <Route path='/404' component={NotFound} />
          {/*<Redirect from='*' to='/404' />*/}

        </main>
      </Router>
    );
  }
}

export default Nav;