import video from "../../images/video.mp4"
import like from "../../images/like.png"
import dislike from "../../images/dislike.png"
import share from "../../images/share.png"
import save from "../../images/save.png"
import jack from "../../images/Jack.png"
import simon from "../../images/simon.png"
import thumbnail1 from "../../images/thumbnail1.png"
import thumbnail2 from "../../images/thumbnail2.png"
import thumbnail3 from "../../images/thumbnail3.png"
import thumbnail4 from "../../images/thumbnail4.png"
import thumbnail5 from "../../images/thumbnail5.png"
import thumbnail6 from "../../images/thumbnail6.png"
import thumbnail7 from "../../images/thumbnail7.png"
import thumbnail8 from "../../images/thumbnail8.png"
import SidebarDetail from "../SideBar/SidebarDetail"
import { useOutletContext } from "react-router-dom"

const DetailPage = () => {
    const { changeSidebar } = useOutletContext();

    return (
        <>
            <SidebarDetail />
            <div className={`container play-container ${changeSidebar ? 'muted' : ''}`}>
                <div className="row">
                    <div className="play-video">
                        <video controls autoPlay>
                            <source src={video} type="video/mp4" />
                        </video>
                        <div className="tags">
                            <a href="">#coding</a>
                            <a href="">#HTML</a>
                            <a href="">#CSS</a>
                            <a href="">#Javascript</a>
                        </div>
                        <h3>
                            Cristiano Ronaldo on the beach
                        </h3>
                        <div className="play-video-info">
                            <p>
                                777 Views &bull; 2 days ago
                            </p>
                            <div>
                                <a href=""><img src={like} />111</a>
                                <a href=""><img src={dislike} />7</a>
                                <a href=""><img src={share} />Share</a>
                                <a href=""><img src={save} />Save</a>
                            </div>
                        </div>
                        <hr />
                        <div className="plublisher">
                            <img src={jack} />
                            <div>
                                <p>Real Madrid</p>
                                <span>500k subcribes</span>
                            </div>
                            <button type="button">Subcribe</button>
                        </div>
                        <div className="vid-description">
                            <p>It's a wonderful day</p>
                            <p>Subcribe to watch more video</p>
                            <hr />
                            <h4>120 Comment</h4>
                            <div className="add-commnent">
                                <img src={jack} />
                                <input type="text" placeholder="Write comment ..." />
                            </div>
                            <div className="old-comments">
                                <img src={simon} />
                                <div>
                                    <h3>Tuan Anh <span>2 days ago</span> </h3>
                                    <p>I love this video</p>
                                    <div className="acomment-action">
                                        <img src={like} />
                                        <span>222</span>
                                        <img src={dislike} />
                                        <span>3</span>
                                        <span>REPLY</span>
                                        <a href="">All replies</a>
                                    </div>
                                </div>
                            </div>
                            <div className="old-comments">
                                <img src={simon} />
                                <div>
                                    <h3>Tuan Anh <span>2 days ago</span> </h3>
                                    <p>I love this video</p>
                                    <div className="acomment-action">
                                        <img src={like} />
                                        <span>222</span>
                                        <img src={dislike} />
                                        <span>3</span>
                                        <span>REPLY</span>
                                        <a href="">All replies</a>
                                    </div>
                                </div>
                            </div>
                            <div className="old-comments">
                                <img src={simon} />
                                <div>
                                    <h3>Tuan Anh <span>2 days ago</span> </h3>
                                    <p>I love this video</p>
                                    <div className="acomment-action">
                                        <img src={like} />
                                        <span>222</span>
                                        <img src={dislike} />
                                        <span>3</span>
                                        <span>REPLY</span>
                                        <a href="">All replies</a>
                                    </div>
                                </div>
                            </div>
                            <div className="old-comments">
                                <img src={simon} />
                                <div>
                                    <h3>Tuan Anh <span>2 days ago</span> </h3>
                                    <p>I love this video</p>
                                    <div className="acomment-action">
                                        <img src={like} />
                                        <span>222</span>
                                        <img src={dislike} />
                                        <span>3</span>
                                        <span>REPLY</span>
                                        <a href="">All replies</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="right-sidebar">
                        <div className="side-video-list">
                            <a href="" className="small-thumbnail">
                                <img src={thumbnail1} />
                            </a>
                            <div className="vid-info">
                                <a href="">Lofii hiphop chiu chiu</a>
                                <p>TA channel</p>
                                <p>15k Views</p>
                            </div>
                        </div>
                        <div className="side-video-list">
                            <a href="" className="small-thumbnail">
                                <img src={thumbnail2} />
                            </a>
                            <div className="vid-info">
                                <a href="">Lofii hiphop chiu chiu</a>
                                <p>TA channel</p>
                                <p>15k Views</p>
                            </div>
                        </div>
                        <div className="side-video-list">
                            <a href="" className="small-thumbnail">
                                <img src={thumbnail3} />
                            </a>
                            <div className="vid-info">
                                <a href="">Lofii hiphop chiu chiu</a>
                                <p>TA channel</p>
                                <p>15k Views</p>
                            </div>
                        </div>
                        <div className="side-video-list">
                            <a href="" className="small-thumbnail">
                                <img src={thumbnail4} />
                            </a>
                            <div className="vid-info">
                                <a href="">Lofii hiphop chiu chiu</a>
                                <p>TA channel</p>
                                <p>15k Views</p>
                            </div>
                        </div>
                        <div className="side-video-list">
                            <a href="" className="small-thumbnail">
                                <img src={thumbnail5} />
                            </a>
                            <div className="vid-info">
                                <a href="">Lofii hiphop chiu chiu</a>
                                <p>TA channel</p>
                                <p>15k Views</p>
                            </div>
                        </div>
                        <div className="side-video-list">
                            <a href="" className="small-thumbnail">
                                <img src={thumbnail6} />
                            </a>
                            <div className="vid-info">
                                <a href="">Lofii hiphop chiu chiu</a>
                                <p>TA channel</p>
                                <p>15k Views</p>
                            </div>
                        </div>
                        <div className="side-video-list">
                            <a href="" className="small-thumbnail">
                                <img src={thumbnail7} />
                            </a>
                            <div className="vid-info">
                                <a href="">Lofii hiphop chiu chiu</a>
                                <p>TA channel</p>
                                <p>15k Views</p>
                            </div>
                        </div>
                        <div className="side-video-list">
                            <a href="" className="small-thumbnail">
                                <img src={thumbnail8} />
                            </a>
                            <div className="vid-info">
                                <a href="">Lofii hiphop chiu chiu</a>
                                <p>TA channel</p>
                                <p>15k Views</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPage;