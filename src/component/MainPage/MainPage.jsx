import thumbnail1 from "../../images/thumbnail1.png"
import thumbnail2 from "../../images/thumbnail2.png"
import thumbnail3 from "../../images/thumbnail3.png"
import thumbnail4 from "../../images/thumbnail4.png"
import thumbnail5 from "../../images/thumbnail5.png"
import thumbnail6 from "../../images/thumbnail6.png"
import thumbnail7 from "../../images/thumbnail7.png"
import thumbnail8 from "../../images/thumbnail8.png"
import Ronaldo from "../../images/simon.png"
import Sidebar from "../SideBar/Sidebar"
import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from "react-router-dom"
import SmallSidebar from "../SideBar/SmallSidebar"
import SidebarDetail from "../SideBar/SidebarDetail"

const MainPage = () => {
    const { changeSidebar } = useOutletContext();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let mainContainerClass = '';
    if (windowWidth < 1400) {
        mainContainerClass = 'large-container';
    } else {
        mainContainerClass = changeSidebar ? 'large-container' : 'container';
    }


    return (
        <>
            {/* <Sidebar /> */}
            {windowWidth < 1400 ? (
                <SmallSidebar />
                // <SidebarDetail />
            ) : (
                <Sidebar />
            )}
            <div className={mainContainerClass}>
                <div className="list-tabs">
                    <div className="tab-item">
                        <a href="#">All</a>
                    </div>
                    <div className="tab-item">
                        <a href="#">Livestream</a>
                    </div>
                    <div className="tab-item">
                        <a href="#">Games</a>
                    </div>
                    <div className="tab-item">
                        <a href="#">Music</a>
                    </div>
                    <div className="tab-item">
                        <a href="#">Watched</a>
                    </div>
                    <div className="tab-item">
                        <a href="#">Nature</a>
                    </div>
                </div>
                <div className="list-container">
                    <div className="vid-list">
                        <Link to='detail'>
                            <a href="">
                                <img src={thumbnail1} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Charlie Puth - Dangerously (Lyrics)</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>
                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail2} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>
                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail3} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>
                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail4} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Imma-heartbreaker (feat. LK & Emily)</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail5} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail6} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail7} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>

                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail5} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">I love hacker</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div><div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail5} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">test layout ahiahi</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div><div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail5} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>

                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail1} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Charlie Puth - Dangerously (Lyrics)</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail2} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail3} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail4} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Imma-heartbreaker (feat. LK & Emily)</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail5} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail6} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>
                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail7} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>

                    <div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail5} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">I love hacker</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div><div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail5} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">test layout ahiahi</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div><div className="vid-list">
                        <Link to="detail">
                            <a href="">
                                <img src={thumbnail5} className="thumbnail" />
                            </a>
                            <div className="flex-div">
                                <img src={Ronaldo} />
                                <div className="vid-info">
                                    <a href="">Nhạc Dí DEADLINE Thấy nước đến cổ, hãy bật nhạc này lên và "nhảy"</a>
                                    <p>Bapday</p>
                                    <p>15k Views &bull; 2 days</p>
                                </div>
                            </div>

                        </Link>

                    </div>

                </div>
            </div>
        </>
    )
}

export default MainPage;