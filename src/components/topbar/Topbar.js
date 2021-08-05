import React from 'react'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
           <div className="topbarWrapper">
               <div className="logo" >
                  <img src="./img/logo1.png" alt="" width="130px" height="70px"/> 
               </div>
               <div className="menu">
                  <img src="./img/menu1.png" alt="" width="180px" height="110px"/>
               </div>
            </div>
        </div>
    )
}
