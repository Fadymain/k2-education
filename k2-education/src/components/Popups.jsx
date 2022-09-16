import React from 'react';
import './popups.css';

const Popups = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <h3>My Popup</h3>
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.childern}
        </div>
    </div>
  ) : "";
}

export default Popups