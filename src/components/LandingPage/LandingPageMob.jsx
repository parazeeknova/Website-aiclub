import React from 'react'
import './LandingPage.css'
function LandingPage() {
    return (
        <div className='landingPageWrap'>
            <div className="landingMain">
                <div className="box1row1">
                    AI CLUB
                    <img src="/PublicAssets/club_dark.webp" alt="" srcset="" />
                </div>
                <div className="mainBox1">
                    <div className="box1row2">
                        <div className="box2row1">
                            The AI Club at VIT Bhopal is a hub for innovators, creators, and dreamers. From ideathons to annual conclaves, we drive the frontier of Artificial Intelligence through learning, collaboration, and action.
                        </div>
                        <div className="box1row2side">
                            <img src="/PublicAssets/landRing.svg" alt="" />
                        </div>
                    </div>
                    <div className="box1row3">
                        <div className="box1row3side"></div>
                        <div className="box2row2col1">
                            <img src="/PublicAssets/robot.webp" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="mainBox2">
                    <div className="box1row2main">
                        <div className="vertxt">sudo rm -rf /models</div>
                        Machine Learning
                        <br />
                        Natural Language Processing
                        <br />
                        Generative AI
                        <br />
                        Computer Vision
                        <br />
                        Robotics
                    </div>
                </div>
                <div className="box1row3main">
                    Let’s talk about <span> &nbsp; AI</span>
                </div>
            </div>
            <div className="landingInfiniteScroll">
                <div class="landingFooter">
                    Hackathons / Projects / Workshops / Webinars / Sessions / Events / Competitions / Exhibitions
                </div>
            </div>
        </div>
    )
}

export default LandingPage
