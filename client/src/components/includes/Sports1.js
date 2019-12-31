import React from 'react';

const Sport1= props=> {
  return (
    <>
      <div className="col-md-3">
          <div className="row">
            <div className="col-md-12">
              <img src={props.image} alt={props.title}/>
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
