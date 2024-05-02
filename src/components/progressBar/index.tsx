import React, { useState, useEffect } from "react";

import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { CiAirportSign1 } from "react-icons/ci";
import { TbCloudDataConnection } from "react-icons/tb";
import { CiTimer } from "react-icons/ci";
import "./index.css"

const StepProgressBar = () => {
    


  return (
    <ProgressBar
      percent={(4 / 4) * 100}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      width={"75%"}
      height={15}
      className="check"
    >
      <Step transition="scale">
        {({ accomplished }) => (
           <>
         <i
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
           
          ><TbCloudDataConnection /> <h6 style={{position:"absolute", top:10}}>Disconnection</h6></i>
           
          </>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
         <>
         <i
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
           
          ><CiTimer /> <h6 style={{position:"absolute", top:10}}>Extended time</h6></i>
           
          </>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
           <>
         <i
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
           
          ><CiTimer /> <h6 style={{position:"absolute", top:10}}>Extended Time</h6></i>
           
          </>
        )}
          </Step>
          <Step transition="scale">
        {({ accomplished }) => (
            <>
         <i
            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
           
          ><CiAirportSign1 /> <h6 style={{position:"absolute", top:20, left:-90}}>Reconnection</h6></i>
           
          </>
        )}
      </Step>
    </ProgressBar>
  );
};

export default StepProgressBar;
