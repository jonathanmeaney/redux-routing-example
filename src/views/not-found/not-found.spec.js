import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  let iframeStyle = {
    width: '100%',
    height: '0',
    paddingBottom: '57%',
    position: 'relative'
  };

  return (
    <div>
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to homepage </Link>
      <div style={iframeStyle}>
        <iframe src="https://giphy.com/embed/2pStpN7VJiOMU" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" className="giphy-embed" allowFullScreen />
      </div><p><a href="https://giphy.com/gifs/2pStpN7VJiOMU">via GIPHY</a></p>
    </div>
  );
};

export default NotFound;
