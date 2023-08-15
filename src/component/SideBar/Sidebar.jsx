import { faHouse, faFireFlameCurved, faAngleDown, faLayerGroup, faBookmark, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JackPng from '../../images/Jack.png'
import Ronaldo from "../../images/simon.png"
import Messi from "../../images/tom.png"
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Sidebar = () => {

    const { changeSidebar } = useOutletContext();
    return (
        <>
            <div className={changeSidebar ? 'small-sidebar' : 'sidebar'}>
                <div className="shortcut-links">
                    <a href="">
                        <FontAwesomeIcon icon={faHouse} className='icon' />
                        <p>Home</p>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faFireFlameCurved} className='icon' />
                        <p>Explore</p>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faLayerGroup} className='icon' />
                        <p>Supcription</p>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faBookmark} className='icon' />
                        <p>Library</p>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faEye} className='icon' />
                        <p>History</p>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faAngleDown} className='icon' />
                        <p>Show More</p>
                    </a>
                    <hr />
                </div>

                <div className="subscribed-list">
                    <h3>SUBCRIBED</h3>
                    <a href=""><img src={JackPng} className='icon' />
                        <p>Tuan Anh Dang</p>
                    </a>
                    <a href=""><img src={Ronaldo} className='icon' />
                        <p>Cris Ronaldo</p>
                    </a>
                    <a href=""><img src={Messi} className='icon' />
                        <p>Leo Messi</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Sidebar;