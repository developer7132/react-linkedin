import React, { useReducer } from "react";
// import { LeftSidebar } from "../../components/LeftSidebar";
// import { Activity } from "../../components/Activity";
import { useHistory } from "react-router-dom";

import { Invitation } from '../../components/MyNetwork/MainCol'
import { LeftCol } from '../../components/MyNetwork'

import "./MyNetworkPage.scss";

export const MyNetworkPage = () => {
  const history = useHistory()
  function handleClick() {
    history.push("/notifications");
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <LeftCol />
        </div>
        <div className="col-md-8">
          <Invitation />
        </div>
      </div>
    </div>
  );
};
