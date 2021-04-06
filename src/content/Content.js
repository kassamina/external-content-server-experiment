import React from "react";
import firebase from "firebase";

class Content extends React.Component {
  componentDidMount() {
    if (this.props.location.state && this.props.location.state.contentItem) {
      const contentItem  = this.props.location.state.contentItem
      console.log('mount - contentItem', contentItem);
      this.setState({
        contentItem: contentItem
      });
    } else {
      const contentId = this.props.match.params.contentId
      console.log('mount - contentId', contentId);
      const db = firebase.firestore();
      db.collection("content")
        .doc(contentId)
        .get()
        .then((doc) => {
          const contentItem = doc.data();
          contentItem.id = doc.id;
          this.setState({
            contentItem: contentItem
          });
        });
    }
  }

  componentDidUpdate() {
    if (this.props.location.state && this.props.location.state.contentItem) {
      const contentItem  = this.props.location.state.contentItem
      console.log('mount - contentItem', contentItem);
      if (contentItem.id !== this.state.contentItem.id) {
        this.setState({
          contentItem: contentItem
        });
      }
    } else {
      const contentId = this.props.match.params.contentId
      console.log('mount - contentId', contentId);

      const db = firebase.firestore();
      db.collection("content")
        .doc(contentId)
        .get()
        .then((doc) => {
          const contentItem = doc.data();
          contentItem.id = doc.id;
          if (contentItem.id !== this.state.contentItem.id) {
            this.setState({
              contentItem: contentItem
            });
          }
        });
    }

  }

  render() {
    console.log('render', this.state);
    return (
      <div>
        {this.state && this.state.contentItem
          ? <div dangerouslySetInnerHTML={{__html: this.state.contentItem.html}}></div>
          : 'loading'
        }
      </div>
    );
  }
}

export default Content;