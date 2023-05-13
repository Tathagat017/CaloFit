import React from 'react';
import "./activity.css"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsBorder } from 'react-icons/bs';
const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <AiOutlineArrowRight className='icon' />
        </button>
      </div>

      <div className="secsContainer grid">
        <div style={{width:"100%"}} className="singleCustomer flex">
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Sumit_Beniwal_1_de1b29ef0f.jpg" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
            <div className="customerDetails">
              <span className="name">
              Sumit Beniwal
              </span>
              {/* <br /> */}
              <small>Activate Pro Plan</small>

            </div>
            <div className="duration">
              7 min ago
            </div>
          </div>
        </div> 
        <div style={{width:"100%"}} className="singleCustomer flex">
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Venugopal_Anant_Burli_1_c377e2c3d5.jpg" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
            <div className="customerDetails">
              <span className="name">
              Venugopal Anant Burli
              </span>
              {/* <br /> */}
              <small>Activate Pro Plan</small>

            </div>
            <div className="duration">
              30 min ago
            </div>
          </div>
        </div>  
        <div style={{width:"100%"}} className="singleCustomer flex">
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert_28b73517f6.jpg" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
            <div className="customerDetails">
              <span className="name">
                Albert Sebastian
              </span>
              {/* <br /> */}
              <small>Activate Gold Plan</small>

            </div>
            <div className="duration">
              1 day ago
            </div>
          </div>
        </div>  
        <div style={{width:"100%"}} className="singleCustomer flex">
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/venu_6e7cabff61.jpeg" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
            <div className="customerDetails">
              <span className="name">
                Venugopal Panchumarthi
              </span>
              {/* <br /> */}
              <small>Activate Pro Plan</small>

            </div>
            <div className="duration">
              2 day ago
            </div>
          </div>
        </div>     
        <div style={{width:"100%"}} className="singleCustomer flex">
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/29716560_426544924457437_9063706992698195968_n_removebg_preview_1_Pulkit_Tyagi_ae57feb392.png" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
            <div className="customerDetails">
              <span className="name">
                Pulkit Tyagi
              </span>
              {/* <br /> */}
              <small>Activate Pro Plan</small>

            </div>
            <div className="duration">
              5 day ago
            </div>
          </div>
        </div> 
        <div style={{width:"100%"}} className="singleCustomer flex">
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/image_47_a922f4522c.png" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
            <div className="customerDetails">
              <span className="name">
                Vivek Agarwal 
              </span>
              {/* <br /> */}
              <small>Activate Pro Plan</small>

            </div>
            <div className="duration">
              8 day ago
            </div>
          </div>
        </div>  
        <div style={{width:"100%"}} className="singleCustomer flex">
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert_28b73517f6.jpg" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
            <div className="customerDetails">
              <span className="name">
                Albert Sebastian
              </span>
              {/* <br /> */}
              <small>Activate Gold Plan</small>

            </div>
            <div className="duration">
              11 day ago
            </div>
          </div>
        </div>  
        <div style={{width:"100%"}} className="singleCustomer flex">
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/venu_6e7cabff61.jpeg" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
            <div className="customerDetails">
              <span className="name">
                Venugopal Panchumarthi
              </span>
              {/* <br /> */}
              <small>Activate Pro Plan</small>

            </div>
            <div className="duration">
              14 day ago
            </div>
          </div>
        </div> 
        <div style={{width:"100%"}} className="singleCustomer flex">
          <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert_28b73517f6.jpg" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
            <div className="customerDetails">
              <span className="name">
                Albert Sebastian
              </span>
              {/* <br /> */}
              <small>Activate Gold Plan</small>

            </div>
            <div className="duration">
              17 day ago
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Activity;
