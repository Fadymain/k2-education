import React from 'react'

const Popups = (props) => {
  return (
    <div className='popup'>
        <div className='popup-inner'>
            <button className="close-btn">close</button>
            {props.childern}
        </div>
    </div>
  )
}

export default Popups