import React from "react";

const Project = (props) => {

  let flipped = '';
  if (props.flipped === 'yes') {
    flipped = 'project--flipped';
  }

  let color = props.color;

  return (
    <div className={`project ${flipped} project--${color}`}>
      <div className='project-image'>
        <img className="project-image__thumbnail" src={ props.image }></img>
      </div>
      <div className="project-info">
        <h2 className="project-info__name">{ props.name }</h2>
        <p className="project-info__stack"><strong>Tech stack:</strong> { props.stack }</p>
        <p className="project-info__description">{ props.description }</p>
        <p className="project-info__live"><strong>Live site:</strong> 
          <a href={ props.live } target="_blank"> { props.live }</a>
        </p>
        <p className="project-info__source"><strong>Source:</strong>
          <a href={ props.source } target="_blank"> { props.source }</a>
        </p>
      </div>
    </div>
  )
  
}

export default Project;