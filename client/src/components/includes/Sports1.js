import React from 'react';
import {Link} from 'react-router-dom';

const Sport1= props=> {
  return (
    <>
      <div className="col-md-3">
          <div className="row">
            <div className="col-md-12">
              <Link to={props.title}>
                <img src={props.image} alt={props.title}/>
              </Link>             
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3>{props.title}</h3>            
            </div>
          </div>
      </div>
    </>
  );
}

export default Sport1;
