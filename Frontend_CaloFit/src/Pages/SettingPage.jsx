import React from "react";
import "./settings.css";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

import styled from "styled-components";
function AccountSettings() {
  return (
    <DIV>
      <div className="midBody">
        <h2 className="heading">
          Account Settings <QuestionOutlineIcon />
        </h2>
        <div className="firstCart">
          <h3>Login</h3>
          <form action="">
            <p className="lableOfinput">Name</p>
            <input type="text" name="" id="" />{" "}
            <button className="btn">UPDATE</button>
            <p className="lableOfinput">Email</p>
            <input type="text" name="" id="" />{" "}
            <button className="btn">UPDATE</button>
            <p className="lableOfinput">Password</p>
            <input type="text" name="" id="" />{" "}
            <button className="btn">UPDATE</button>
            <div className="twofactor">
              <p className="FORBOLD">
                Two-Factor Authentication <QuestionOutlineIcon />
              </p>
            </div>
            <p className="poftext">
              Cronometer Supports Two-Factor Authentication with the Google
              Authenticator app. If you would like to enable two factor
              authentication on this account, please download this app from the
              app store.
            </p>
            <div className="twofactor">
              <p>Log out of Cronometer</p>
              <button className="LOGOUTbTN">LOG OUT</button>
            </div>
          </form>
        </div>
        <div className="firstCart second">
          <h2 className="heading">Subscription</h2>
          <h2 className="heading">Account Type Free w/ Ads</h2>
        </div>
        <div className="firstCart second">
          <h2 className="heading">Notifications</h2>
          <div className="thiredDiv">
            <p>Email me a reminder if I forget to enter diary details by</p>
            <select name="" id="">
              <option value="">6:00 PM</option>
            </select>
            <button className="LOGOUTbTN">LOG OUT</button>
          </div>
        </div>
        <div className="firstCart second">
          <h2 className="heading">Privacy</h2>
          <div className="twofactor">
            <p>Log out of Cronometer</p>
            <button className="LOGOUTbTN">LOG OUT</button>
          </div>
          <div className="twofactor">
            <p>
              Send me personalized in-app ads. (You will receive less relevant,
              non-personalized ads if you opt out)
            </p>
            <button className="LOGOUTbTN">LOGOUT</button>
          </div>
        </div>
        <div className="firstCart second">
          <h2 className="heading">Account Data</h2>
          <div className="twofactor">
            <p>Export Data</p>
            <button className="LOGOUTbTN">EXPORT DATA</button>
          </div>
          <div className="twofactor">
            <p>Export all of your diary data to .csv files</p>
          </div>
          <div className="twofactor">
            <p>Bulk Delete</p>
            <button className="LOGOUTbTN">BULK DELETE</button>
          </div>
          <div className="twofactor">
            <p>Selectively delete your diary data.</p>
          </div>
          <div className="twofactor">
            <p>Delete Account</p>
            <button className="LOGOUTbTN">DELETE</button>
          </div>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  padding: 0;
  margin: 0;
  font-family: sans-serif;

  background-color: #fffcf6;

  .midBody {
    width: 95%;
    margin: auto;
    padding-bottom: 25px;
  }

  .heading {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .firstCart {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 25px;
    background-color: white;
    border-radius: 8px;
    margin-top: 25px;
  }

  .poftext {
    width: 400px;
    margin-top: 25px;
    line-height: 25px;
  }

  .twofactor {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    width: 490px;
    margin-top: 25px;
  }

  .lableOfinput {
    margin-top: 25px;
  }

  input {
    height: 40px;
    width: 400px;
    outline: none;
  }

  .btn {
    border: none;
    background-color: transparent;
    color: #80005a;
    font-weight: bold;
    margin-left: 20px;
  }

  .LOGOUTbTN {
    border: none;
    background-color: transparent;
    color: green;
    font-weight: bold;
  }

  .FORBOLD {
    font-weight: bold;
  }

  .thiredDiv {
    display: flex;
    gap: 35px;
    font-size: medium;
    font-weight: bold;
  }

  select {
    width: 120px;
    height: 40px;
    border-radius: 3px;
    font-size: large;
    padding: 5px;
  }
`;

export default AccountSettings;
