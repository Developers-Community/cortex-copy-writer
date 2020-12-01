import React from 'react'

const ChatBot = () => {
    return (
        <div>
            {/* *********************** ChatBot *************************** */}
            <div id="anchor-about" className="row row2 about-container about-container-bg">
                <div className="row-inner">
                    <div className="about-container-column">
                        <div className="about-container-avatar">
                            <div className="about-image" id="about_animation">
                            </div>
                            <div className="about-image-name"><strong>Nathan Mudaliar</strong>, the Cortex Copywriter</div>
                        </div>
                    </div>

                    <div className="about-container-column">
                        <div className="about-text">
                            <h3 className="heading-block-background">About</h3>
                            <p>My copywriting and UX writing draws on abilities developed in the psychological sciences. </p>
                            <p>Expertise in visual perception, behavioral motivation and decision-making allows me to engineer words that convert customers and guide users.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="anchor-chatbot" className="row row2 chatbot-bg">
                <div className="row-inner chatbot-inner">
                    <div className="chatbot-title">
                        <h3 className="heading-block-background">Select avatars to switch chatbot voice & tone</h3>
                    </div>
                    <div className="chat-application" id="chat-application">
                        <div className="style-swap_outer">
                            <div className="chatbot-info mobile-only">Swipe and select </div>
                            <div className="style-swap">
                                <div className="button-container">
                                    <div className="button-style" data-swapstyle="community">
                                        <div className="chat-avatar">
                                            <div id="character_community2" className="topbar-desktop-character-anim-persona character_community"></div>
                                        </div>
                                        <p>Community</p>
                                    </div>


                                    <div className="button-style " data-swapstyle="corporate">
                                        <div className="chat-avatar">
                                            <div id="character_corporate2" className="topbar-desktop-character-anim-persona character_corporate"></div>
                                        </div>
                                        <p className='style-swap_active'>Corporate</p>
                                    </div>


                                    <div className="button-style" data-swapstyle="technology">
                                        <div className="chat-avatar">
                                            <div id="character_technology2" className="topbar-desktop-character-anim-persona character_technology"></div>
                                        </div>
                                        <p>Technology</p>
                                    </div>


                                    <div className="button-style" data-swapstyle="luxury">
                                        <div className="chat-avatar">
                                            <div id="character_luxury2" className="topbar-desktop-character-anim-persona character_luxury"></div>
                                        </div>
                                        <p>Luxury</p>
                                    </div>


                                    <div className="button-style" data-swapstyle="entertainment">
                                        <div className="chat-avatar">
                                            <div id="character_entertainment2" className="topbar-desktop-character-anim-persona character_entertainment"></div>
                                        </div>
                                        <p>Entertainment</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="chat_container">
                            <div className="chatbot_restart">Restart <i className="fas fa-undo"></i></div>
                        </div>
                        <div className="reply_container"></div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default ChatBot
