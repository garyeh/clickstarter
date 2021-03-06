import React from 'react';
import { Route, Link } from 'react-router-dom';

const TitleBox = ({ detail }) => {
  const username = (detail.creator) ? detail.creator.username : "";
  return (<div className="titlebox">
      <div>
        <p>By<span>{` ${username}`}</span></p>
        <a href={detail.url} alt={detail.title} target="_blank" rel="noopener">
          <button>Visit website</button>
        </a>
      </div>
      <div>
        <p>{detail.title}</p>
        <p id="descriptionText">{detail.description}</p>
      </div>
    </div>
  );
};

export default TitleBox;
