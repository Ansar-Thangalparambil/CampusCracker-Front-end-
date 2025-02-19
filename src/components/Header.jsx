import React, { useState } from 'react'
import './Header.css';
import Title from './Title';
import UserPopup from './UserPopup';

function Header(pageName) {
  const [popup, setPopup] = useState(false)

  const [isPopup, setIsPopup] = useState(false)

  const token = sessionStorage.getItem("token")

  const togglePopup = () => {
    setPopup(prev => !prev)
    setIsPopup(prev => !prev)
  }

  return (
    <div className='header py-2 px-3 d-flex'>

      <div className="col-md-3 d-flex align-items-center justify-content-center">

        <div className="pagename">
          <span>{pageName.pageName}</span>
        </div>

      </div>

      <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <Title />
      </div>

      <div className="head-controls col-md-3 d-flex justify-content-around align-items-center">
        {token&&<div className={isPopup?"userfocus p-2 px-3 rounded-5 ms-auto me-2 d-flex flex-column":"user  p-2 px-3  rounded-5 ms-auto me-2 d-flex flex-column "} onClick={togglePopup}>
          <i className="fa-solid fa-user fs-4"></i>
          <i className="fa-solid fa-ellipsis-vertical fs-4"></i>
        </div>}
      </div>
      <UserPopup popup={popup} setPopup={setPopup} setIsPopup={setIsPopup} />
    </div>
  )
}

export default Header
