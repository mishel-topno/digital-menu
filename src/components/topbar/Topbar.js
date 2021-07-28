import React from 'react'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
           <div className="topbarWrapper">
               <div className="logo" >
                  <img src="./img/logo1.png" alt="" width="150px" height="80px"/> 
               </div>
               <div className="menu">
                  <img src="./img/menu1.png" alt="" width="250px" height="110px"/>
               </div>
            </div>
        </div>
    )
}
