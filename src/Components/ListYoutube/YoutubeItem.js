import React from 'react';

function YoutubeItem(props) {
  
    return (
      <div className="youtube-item">
        <div className="youtube-image">
          <img
            src={props.image}
            alt=""
          />
        </div>
        <div className="youtube-footer">
          <img src={props.img} alt="" className="youtube-avatar" />
          <div className="youtube-info">
            <h3 className="youtube-title">{props.title}</h3>
            <h4 className="youtube-author">{props.author}</h4>
          </div>
        </div>
      </div>
    );
  }

export default YoutubeItem;