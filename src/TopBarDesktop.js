import React from 'react'
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
    return (
        <div>
            <div className="splash_page_container">
                <div className="logo" id="splashpage_logo"></div>
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-close">X</div>
                <div className="sidebar-menu-inner">
                    <a href="#anchor-top">
                        <div className="sidebar-logo">
                            <img src="img/logo/logo_desktop_with_name.svg" alt="image" />
                        </div>
                    </a>
                    <a href="#anchor-services"><div className="sidebar-button">Services</div></a>
                    <a href="#anchor-about"><div className="sidebar-button">About</div></a>
                    <a href="#anchor-chatbot"><div className="sidebar-button">Chatbot</div></a>
                    <a href="#anchor-techniques"><div className="sidebar-button">Techniques</div></a>
                    <a href="#anchor-samples"><div className="sidebar-button">Samples</div></a>
                    <a href="#anchor-reviews"><div className="sidebar-button">Reviews</div></a>
                    <div className="sidebar-button sidebar-contact">Contact</div>
                    <a href="#anchor-casestudy"><div className="sidebar-button sidebar-inactive">Case Studies ▾ </div></a>
                    {/* <Link to="/casestudy" ><div className="sidebar-sub-button">Ausbeds chatbot</div></Link> */}
                    {/* <a href="case-studies/ausbeds-a-conversational-user-interface.html">
                        
                    </a> */}
                    <a href="case-studies/rebranding-blaze-research.html"><div className="sidebar-sub-button">Blaze rebrand</div></a>
                    <a href="#anchor-casestudy"><div className="sidebar-sub-button">COMING IN 2020: StartScale platform</div></a>
                    <a href="#anchor-blog"><div className="sidebar-button sidebar-inactive">Blogs ▾</div></a>
                    <Link to="/ux-writing"><div className="sidebar-sub-button">UX writing & FBI negotiation tactics</div></Link>
                    <Link href="/evaluation"><div className="sidebar-sub-button">What is digital copywriting?</div></Link>
                    <Link to="/screenwriter"><div className="sidebar-sub-button">Screenwriting evolution</div></Link>
                    <Link to="/psychology"><div className="sidebar-sub-button">Psychology copy hacks</div></Link>
                    <div className="sidebar-social">
                        <a href="https://www.stage32.com/profile/647803/about"> <div className="sidebar-icon"><i className="fas fa-film"></i></div> </a>
                        <a href="https://www.facebook.com/peter.popias"> <div className="sidebar-icon"><i className="fab fa-facebook-square"></i></div> </a>
                        <a href="https://www.linkedin.com/in/cortex-copywriter/"> <div className="sidebar-icon"><i className="fab fa-linkedin"></i></div> </a>
                    </div>
                </div>

            </div>

            <div className="topbar-desktop">
                <div className="topbar-sticky">
                    <div className="topbar-desktop-text">
                        <span className="rainbow-animation rainbow-char1">S</span>
                        <span className="rainbow-animation rainbow-char2">w</span>
                        <span className="rainbow-animation rainbow-char3">i</span>
                        <span className="rainbow-animation rainbow-char4">t</span>
                        <span className="rainbow-animation rainbow-char5">c</span>
                        <span className="rainbow-animation rainbow-char6">h</span>
                        <span className="space"> </span>
                        <span className="rainbow-animation rainbow-char7">e</span>
                        <span className="rainbow-animation rainbow-char8">x</span>
                        <span className="rainbow-animation rainbow-char9">p</span>
                        <span className="rainbow-animation rainbow-char10">e</span>
                        <span className="rainbow-animation rainbow-char11">r</span>
                        <span className="rainbow-animation rainbow-char12">i</span>
                        <span className="rainbow-animation rainbow-char13">e</span>
                        <span className="rainbow-animation rainbow-char14">n</span>
                        <span className="rainbow-animation rainbow-char15">c</span>
                        <span className="rainbow-animation rainbow-char16">e</span>
                        <span className="rainbow-animation rainbow-char17">▾</span>
                    </div>
                    <div className="topbar-hamburger">☰</div>
                    <div className="topbar-logo"><img src="img/logo/logo_mobile.svg" alt="image" /></div>
                </div>

                <div className="topbar-desktop-characters-outer-container">
                    <div className="topbar-desktop-characters-container">

                        <div className="topbar-desktop-character" data-character='community'>
                            <div className="topbar-desktop-character-anim">
                                <div id="character_community" className="topbar-desktop-character-anim-persona character_community"></div>
                            </div>
                            <div className="topbar-desktop-character-text">Community</div>
                        </div>

                        <div className="topbar-desktop-character" data-character='corporate'>
                            <div className="topbar-desktop-character-anim">
                                <div id="character_corporate" className="topbar-desktop-character-anim-persona character_corporate"></div>
                            </div>
                            <div className="topbar-desktop-character-text">Corporate</div>
                        </div>

                        <div className="topbar-desktop-character" data-character='technology'>
                            <div className="topbar-desktop-character-anim">
                                <div id="character_technology" className="topbar-desktop-character-anim-persona character_technology"></div>
                            </div>
                            <div className="topbar-desktop-character-text">Technology</div>
                        </div>

                        <div className="topbar-desktop-character" data-character='luxury'>
                            <div className="topbar-desktop-character-anim">
                                <div id="character_luxury" className="topbar-desktop-character-anim-persona character_luxury"></div>
                            </div>
                            <div className="topbar-desktop-character-text">Luxury</div>
                        </div>

                        <div className="topbar-desktop-character" data-character='entertainment'>
                            <div className="topbar-desktop-character-anim">
                                <div id="character_entertainment" className="topbar-desktop-character-anim-persona character_entertainment"></div>
                            </div>
                            <div className="topbar-desktop-character-text">Entertainment</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu
