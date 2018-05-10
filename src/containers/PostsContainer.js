import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsContainer extends Component {

  createMailItem = (item) => {

    const userName = item.data.payload.headers.find(header => header.name === 'From').value;
    const mailTitle = item.data.payload.headers.find(header => header.name === 'Subject').value;
    const mailSnippet = item.data.snippet;
    const mailId = item.data.id;
    const internalDate = item.data.payload.headers.find(header => header.name === 'Date').value;
    const mailUnread = item.data.labelIds.find(label => label === 'UNREAD');

    return (
      <section className="media" key={ mailId }>
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="images/profile_mask.png" alt="userpic"/>
          </a>
        </div>
        <div className="media-body">
          <div className="userInfo clearfix">
            <span>{ userName }</span>
            <span className="rank">Pro</span>
            <div className="commentsAndTime pull-right">
              <a href="#"><i className="icon-chat"></i></a>
              <span><i className="icon-clock"></i><time className="timeago" title="2011-12-17T09:24:17Z"></time></span>
            </div>
          </div>
          <div className="itemName">
            <a href="#" className="media-heading" title="Item title">{ mailTitle }</a>
            <span 
              className="status pull-right" 
              style={ mailUnread ? { 'display': '' } : { 'display': 'none' }}>
            </span>
          </div>
          <p>{ mailSnippet }</p>
          <div className="tags">
            <button type="submit" className="btn btn-tag">
              <i className="icon-tag"></i>
            </button>
            <a href="#"  className="tag" title="tag">tag1</a>
            <a href="#"  className="tag" title="tag">tag2</a>
            <a href="#"  className="tag" title="tag">tag3</a>
          </div>
        </div>
      </section>
    );
  }

  render() {

    const mailList = this.props.mailList.map(this.createMailItem)

    return (
      <section className="postsContainer">
        {mailList}

        <div className="controlButtons">
          <a href="#" className="btn btn-default btn-prevNext">
            <i className="icon-left-open-big"></i>Previous</a>
          <a href="#" className="btn btn-default btn-prevNext">Next
            <i className="icon-right-open-big"></i></a>
        </div>

      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    mailList: state.mailListReducer,
  }
}

export default connect(mapStateToProps)(PostsContainer);