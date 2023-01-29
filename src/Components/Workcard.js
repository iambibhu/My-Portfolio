import "./WorkcardStyle.css";

import React from 'react';
// import { NavLink } from "react-router-dom";

const Workcard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="project-img" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        {/* <NavLink to={props.source} className="btn">Source</NavLink> */}
                        <a href={props.view} className="btn" target="_blank" rel="noreferrer noopener">View</a>
                        <a href={props.source} className="btn" target="_blank" rel="noreferrer noopener" >Source</a>
                    </div>
                </div>
            </div>
  )
}

export default Workcard