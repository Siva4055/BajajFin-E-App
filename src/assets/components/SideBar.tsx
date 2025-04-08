import React from 'react'
import '../../css/sidebar.css'

export default function SideBar() {
  return (
    <div>
       <div className="side-menu">
        <div className="brand-name">
            <h1 style={{font:'-moz-initial',color : 'white'}}>Bajaj Finserv</h1>
        </div>
        <ul>
            <li className="brand-name">
                <a href='/home' >
                <div className="brand-name"style={{color:'white'}} ><span>Home</span></div>
                </a>
              </li>
              <li className="brand-name">
                <a href='/dashb' >
                <div className="brand-name" style={{color:'white'}} ><span>DashBoard</span></div>
                </a>
              </li>
              <li className="brand-name">
                <a href='/loans' >
                <div className="brand-name" style={{color:'white'}}><span>Loans</span></div>
                </a>
              </li>
              <li className="brand-name" >
                <a href='/invest' >
                <div className="brand-name" style={{color:'white'}}><span>Investments</span></div>
                </a>
              </li>
              <li className="brand-name">
                <a href='/pro' >
                <div className="brand-name" style={{color:'white'}} ><span>Profile</span></div>
                </a>
              </li>
              <li className="brand-name">
                <a href='/help' >
                <div className="brand-name" style={{color:'white'}} ><span>Help</span></div>
                </a>
              </li>
              <li className="brand-name">
                <a href='/settings' >
                <div className="brand-name" style={{color:'white'}}><span>Settings</span></div>
                </a>
              </li>
            
          
        </ul>
    </div>
    </div>
  )
}
