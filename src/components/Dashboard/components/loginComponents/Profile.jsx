import React from 'react'
import Navbar from '../homepage/Navbar';
import './login.scss';
function Profile() {
  let user_avtar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSVk1DiBq4Us5qCMhx3ox1UGcFLJyTlUCfg&usqp=CAU';
  const navBarToken = false;
  return (
    <>
    <Navbar visibilityToken ={navBarToken}></Navbar>
    <div className='Profilemaincontaner'>
        <div className="imgdiv">
          <img src={user_avtar} alt=" icon" />
        </div>
        <h2>Masum Reza</h2>
        <h3>Email id  : Masum.r@antino.io</h3>
    </div>
    </>
  )
}

export default Profile;