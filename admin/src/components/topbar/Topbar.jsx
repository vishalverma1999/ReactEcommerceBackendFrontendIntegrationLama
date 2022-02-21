import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react'
import './topbar.css';

function Topbar() {
    return (
        <>
        <div className="topBarr">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">adminAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://cdn.wallpapersafari.com/60/61/MC2JnB.jpg" alt="joker" className='topAvatar' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Topbar
