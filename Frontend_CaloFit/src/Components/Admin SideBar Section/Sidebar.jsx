import React from 'react';
import "./sidebar.css"
// import logo from '../../Assects/calofit.png'
import { BsSpeedometer } from 'react-icons/bs';
import { BsPatchQuestion } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { MdFoodBank } from 'react-icons/md'
import { FiActivity } from 'react-icons/fi'
const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src="https://cronometer.com/blog/wp-content/uploads/2019/04/Cronometer_Logomark_Mandarin.png" alt="" />
        <h2>CaloFit</h2>
      </div>
      <div className='menuDiv'>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <a href="/admin" className='menuLink flex'>
              <BsSpeedometer className="icon" />
              <span className='smallText'>
                Dash board
              </span>
            </a>
          </li>
          <li className='listItem'>
            <a href="/admin/users" className='menuLink flex'>
              <FaUsers className="icon" />
              <span className='smallText'>
                Users
              </span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <MdFoodBank className="icon" />
              <span className='smallText'>
                Foods
              </span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <FiActivity className="icon" />
              <span className='smallText'>
                Exercises
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div className='settingsDiv'>
        <h3 className='divTitle'>
          Settings
        </h3>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <BsSpeedometer className="icon" />
              <span className='smallText'>
                Dash board
              </span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <BsSpeedometer className="icon" />
              <span className='smallText'>
                Dash board
              </span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <BsSpeedometer className="icon" />
              <span className='smallText'>
                Dash board
              </span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <BsSpeedometer className="icon" />
              <span className='smallText'>
                Dash board
              </span>
            </a>
          </li>
        </ul>
      </div> */}
      <div className="sideBarCard">
        <BsPatchQuestion className='icon'/>
        <div className="cardContent">
          <div className="circle1">

          </div>
          <div className="circle2">

          </div>
          <h3>Help Center</h3>
          <p>Having troble in CaloFit, Please contact us from for more questions.</p>
          <button className='btn'>Go to Help Center</button>
        </div>
      </div>
    </div >
  );
}

export default Sidebar;
