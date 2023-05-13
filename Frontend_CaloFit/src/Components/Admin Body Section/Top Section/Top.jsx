import React from 'react';
import "./top.css"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineMessage} from "react-icons/ai"
import {MdOutlineNotificationsActive} from "react-icons/md"
import {AiOutlineArrowRight} from "react-icons/ai"
import logo from '../../../Assests/iconImg.png'
import topBanner from '../../../Assests/bannervideo.mp4'
const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
      <h1>Welcome to CaloFit</h1>
      <p>
        Hello Admin, Welcome back!
      </p>
        </div>
        <div className='searchBar flex'>
      <input type="text" placeholder='search ' />
      <AiOutlineSearch className='icon'/>
        </div>

        <div className='adminDiv flex'>
        <AiOutlineMessage className="icon"/>
        <MdOutlineNotificationsActive className='icon'/>
        <div className="adminImage">
          <img src="https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg" alt="adminImg" />
        </div>
        </div>
      </div>
      <div className='cardSection flex'>
    <div className="rightCard flex"> 
    <h1>The Care And Compassion You Need</h1>
    <p>The world's fast growing industry</p>
    <div className="buttons flex">
      <button className='btn' style={{background:"white",color:"black"}} >Explore More</button>
      <button style={{background:"white",color:"black"}} className='btn transparent'>Top Sellers</button>
    </div>
    <div className="videoDiv">
    <video autoPlay loop muted>
  <source src={topBanner} type="video/mp4"></source>
</video>
    </div>
    </div>
    <div className="leftCard flex">
      <div className="main flex">
        <div className="textDiv">
          <h1>My stat</h1>
          <div className="flex">
            <span>
              Today <br /> <small>
                62 Subscription
              </small>
            </span>
            <span>
              This Month <br /> <small>
                280 Subscription
              </small>
            </span>
          </div>
          <span className="flex link">
            Go to Subscription <AiOutlineArrowRight className="icon"/>
          </span>
        </div>
        <div className="imgDiv">
          <img src={logo} alt="" />  
          {/* add photo */}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Top;
