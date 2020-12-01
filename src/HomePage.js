import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <div className="splash_page_container">
                <div className="logo" id="splashpage_logo"></div>
            </div>

            <script src="js/cortex2-logo-animation-homepage.js"></script>
            <script src="js/cortex2-splashpage.js"></script>

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
                    <a href="blog/UX-writing-and-FBI-negotiation.html"><div className="sidebar-sub-button">UX writing & FBI negotiation tactics</div></a>
                    <a href="blog/evolution-of-copy.html"><div className="sidebar-sub-button">What is digital copywriting?</div></a>
                    <a href="blog/how-will-screenwriting-evolve.html"><div className="sidebar-sub-button">Screenwriting evolution</div></a>
                    <a href="blog/top-3-ways-psychology-hacks-minds.html"><div className="sidebar-sub-button">Psychology copy hacks</div></a>
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



            <div className="main">

                {/* ******************* HEADER *******************  */}
                <div className="row row2 header">
                    <div className="row-inner">
                        <div id="anchor-top" className="header-container">

                            <div className="header-container-text">
                                <div className="header-container-description">
                                    <div className="header-container-title">
                                        {/* <!--      <div className="header-container-title-1">The</div> --> */}
                                        <div className="header-container-title-2">CORTEX</div>
                                        <div className="header-container-title-3">COPYWRITER</div>
                                    </div>
                                    <div className="header-container-paragraph">
                                        <p className="intro-title">Enhance your communications with psychology-based copywriting and UX writing</p>
                                    </div>
                                    <div className="header-container-cta">Send a message</div>
                                </div>
                            </div>

                            <div className="header-container-image">
                                <img src="img/intro/Intro_Front_Layer.svg" className="header-front" alt="image" />
                                <img src="img/intro/Intro_Featured_Image_Empty.svg" alt="image" />
                                <img src="img/intro/Intro_Brain.svg" className="header-brain" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="header-container-bg"></div>
                </div>

                {/* ******************* SERVICES *******************  */}
                <div id="anchor-services" className="services service-outer-1">
                    <div className="row row-service ">
                        <div className="row-inner service-section-1" id="services">
                            <div className="column column-left">
                                <div className="service-image">
                                    <img src="img/services/services-5.svg" alt="Cortex Copywriter Content Writing Services" />
                                </div>
                            </div>
                            <div className="column column-right">
                                <h1>Content Writing</h1>
                                <p>In this age of content overload, authentic connections are key for your brand to engage consumers and offer true value. By weaving your unique brand voice, values, story, identity and key messages through all your content and communications, I help your brand connect with fans to drive insights and sales. </p>
                                <div className="taglist"></div>
                            </div>
                        </div>
                    </div>


                    <div className="row row-service ">
                        <div className="row-inner service-section-2">
                            <div className="column column-left ">
                                <h1>UX Writing</h1>
                                <p>My interdisciplinary approach ensures emotional connection and human-centered solutions for brands. UX writing breathes life into a product. It’s more than logins and placeholders. My job is to make people feel the humanity behind the touchscreen. I collaborate with design teams to write more than just an interaction. We write memorable journeys. </p>
                                <div className="taglist"></div>
                            </div>
                            <div className="column column-right">
                                <div className="service-image">
                                    <img src="img/services/services-6.svg" alt="Cortex Copywriter UX Writing Services" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-service ">
                        <div className="row-inner service-section-3">
                            <div className="column column-left">
                                <div className="service-image">
                                    <img src="img/services/services-7.svg" alt="Cortex Copywriter Web Copywriting Services" />
                                </div>
                            </div>
                            <div className="column column-right">
                                <h1>Website Copywriting</h1>
                                <p>I’m on mission to help you increase website traffic and leads, reduce bounce rate and strengthen your brand. While my search engine optimized (SEO) copy will focus on satisfying Big Daddy Google, SEO will come secondary to writing for humans and making your content authoritative so it gains interactions, links and referrals.</p>
                                <div className="taglist"></div>
                            </div>
                        </div>
                    </div>
                </div>



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




                <div id="anchor-techniques" className="row row1 techniques">
                    <div className="row-inner column">

                        <div className="row-title techniques_top_title" id="techniques">
                            <h3 className="heading-block-background">Interactive Techniques</h3>
                            <p>Allow me to demonstrate some <a href="blog/top-3-ways-psychology-hacks-minds.html">psychology-based copywriting</a> techniques I apply to optimize user experiences and boost conversion rates.</p>
                        </div>

                        <div className="techniques_advertisement">
                            <img className="techniques-logo-with-name" src="img/logo/logo_desktop_with_name.svg" alt="image" />

                            <div className="techniques_description">
                                <div className="techniques_description_slogan"> <i className="fas fa-info-circle"></i> Technique Description  </div>
                                <div className="techniques_description_title">Rhyme</div>
                                <div className="techniques_description_text">People perceive rhyming phrases as more truthful.</div>
                            </div>

                            <div className="techniques_options">
                                <div className="techniques_option_header ">Select copywriting technique ▾</div>
                                <div className="techniques_option techniques_option_activated" data-technique="rhyme">Rhyme</div>
                                <div className="techniques_option" data-technique="bizarre">Bizarre</div>
                                <div className="techniques_option" data-technique="because">Because</div>
                                <div className="techniques_option" data-technique="approach">Approach</div>
                                <div className="techniques_option" data-technique="avoid">Avoid</div>
                                <div className="techniques_option" data-technique="attack">Attack</div>
                                <div className="techniques_option" data-technique="approachattack">Approach & Attack</div>
                            </div>


                            <div className="techniques_container">
                                <div className="techniques_text">
                                    <div className="techniques_text_column left-padding">
                                        <div className="heading"></div>
                                        <div className="subheading">Technique Example</div>
                                        <div className="smallheading">Augmented Reality (AR) Glasses:</div>
                                        <div className="paragraph">At last, interactive AR experiences that feel real.</div>
                                    </div>
                                </div>
                                <div className="techniques_bg">
                                    <img src="img/techniques/svg/tech-ar.svg" alt="Cortex Copywriter Techniques" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="anchor-samples" className="row row2 samples">
                    <div className="row-inner samples-inner">

                        {/* <!--  ********************** SECTION 1 **********************  --> */}

                        <div className="sample-heading sample-heading-1">
                            <h3 className="heading-block-background">Samples</h3>
                            <h4 className="sample-title-1">Useful UX</h4>
                        </div>

                        <div className="sample-container sample-container-1">

                            {/* <!-- SAMPLE --> */}
                            <div className="sample">
                                <div className="sample-image">
                                    <img src="img/samples/chatbot.jpg" alt="image" />
                                    <div className="sample-keyword"></div>
                                </div>
                                <div className="sample-text">
                                    <div className="sample-title">Scripted Chatbot</div>
                                    <div className="sample-info">Conversation design guidelines such as <strong>chatbot personality, flowcharts, and scripts</strong> helped me convert complex mattress fitting data into simple dialogue for a scripted chatbot that <strong>guides customers</strong> in choosing the right mattress for their weight range.</div>
                                    <div className="sample-links">
                                        {/* <a href="case-studies/ausbeds-a-conversational-user-interface.html">Case study</a> */}
                                        {/* <Link to="/casestudy" ><div className="sidebar-sub-button">Case study</div></Link> */}
                                        {/* <!--  <a href="https://www.ausbeds.com.au/sienna/">Website</a> --> */}
                                    </div>
                                </div>
                            </div>

                            {/* <!-- SAMPLE
        <div className="sample">
          <div className="sample-image">
            <img src="img\samples\landing.jpg">
            <div className="sample-keyword"></div>
          </div>
          <div className="sample-text">
            <div className="sample-title">Landing Page</div>
            <div className="sample-info"><strong>UX principles</strong> including hierarchy (bolder/bigger font size), organization (bullet points), <strong>short headline</strong>, and one purpose CTA button allowed me to create a <strong>high-converting landing page</strong> for a web hosting offer.</div>
            <div className="sample-links"></div>
          </div>
        </div> --> */}


                            {/* <!-- SAMPLE --> */}
                            <div className="sample">
                                <div className="sample-image">
                                    <img src="img/samples/speedpix.jpg" alt="image" />
                                    {/* <!--   <div className="sample-keyword"></div> --> */}
                                </div>
                                <div className="sample-text">
                                    <div className="sample-title">User Onboarding</div>
                                    <div className="sample-info">Here is the first screen in an onboarding process I wrote for a SaaS product. To create a smooth introduction to the product and <strong>improve conversion rates</strong>, I used reassuring details and informative labels to <strong>clear possible uncertainties and reduce ambiguity</strong>.</div>
                                    <div className="sample-links">
                                        <a href="see-more/speedpix-onboarding.html">See more</a>
                                        {/* <!--  <a href="https://www.ausbeds.com.au/sienna/">Website</a> --> */}
                                    </div>
                                </div>
                            </div>



                            {/* <!-- SAMPLE --> */}
                            <div className="sample">
                                <div className="sample-image">
                                    <img src="img/samples/startscale.jpg" alt="image" />
                                    <div className="sample-keyword"></div>
                                </div>
                                <div className="sample-text">
                                    <div className="sample-title">Product Development</div>
                                    <div className="sample-info">As the <strong>sole UX writer</strong> on a product team building the 'Uber of marketing', I wrote and designed web copy, <strong>microcopy</strong>, notifications, forms, FAQs, sales video script, automated emails, signup page, login page, pricing page, checkout page, and more.</div>
                                    <div className="sample-links">
                                        <a href="#anchor-casestudy">Case study coming in 2020</a>
                                        {/* <!--  <a href="https://www.ausbeds.com.au/sienna/">Website</a> --> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <!--  ********************** SECTION 2 **********************  --> */}


                        <div className="sample-heading sample-heading-2">
                            <h4 className="sample-title-2">Digital Copy</h4>
                        </div>
                        <div className="sample-container sample-container-2">

                            {/* <!-- SAMPLE --> */}
                            <div className="sample">
                                <div className="sample-image">
                                    <img src="img/samples/blaze_sample.jpg" alt="image" />
                                    {/* <!--    <div className="sample-keyword"></div> --> */}
                                </div>
                                <div className="sample-text">
                                    <div className="sample-title">Rebranding Campaign</div>
                                    <div className="sample-info">I developed a new brand voice and brand identity – <strong>content style guide, design system</strong>, brand name, logo, tagline, and website – to <strong>improve communications and online presence.</strong></div>
                                    <div className="sample-links">
                                        <a href="case-studies/rebranding-blaze-research.html">Case study</a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- SAMPLE --> */}
                            <div className="sample">
                                <div className="sample-image">
                                    <img src="img/samples/tara.jpg" alt="image" />
                                    {/* <!--   <div className="sample-keyword"></div> --> */}
                                </div>
                                <div className="sample-text">
                                    <div className="sample-title">Facebook Ads</div>
                                    <div className="sample-info">I’ve lost count of how many Facebook ads I’ve written. My <strong>general strategy </strong>for writing ads with limited space is to make sure the copy focuses on a single, specific thought, and <strong>shows empathy</strong>. Check out some of my recent ads.</div>
                                    <div className="sample-links">
                                        <a href="see-more/facebook-ads.html">See more</a>
                                        {/* <!--  <a href="https://www.ausbeds.com.au/sienna/">Website</a> --> */}
                                    </div>
                                </div>
                            </div>



                            {/* <!-- SAMPLE --> */}
                            <div className="sample">
                                <div className="sample-image">
                                    <img src="img/samples/purelearning_sample.jpg" alt="image" />
                                    {/* <!--    <div className="sample-keyword"></div> --> */}
                                </div>
                                <div className="sample-text">
                                    <div className="sample-title">Explainer Video</div>
                                    <div className="sample-info">Here’s a screenshot for a video I <strong>wrote, storyboarded, and directed.</strong> The aim was to build awareness for an eLearning company. The copy – which inspired the audience to think, feel, and act – helped <strong>increase sales by 9.86%.</strong></div>
                                    <div className="sample-links">
                                        <a href="see-more/explainer-video.html">See more</a>
                                    </div>
                                </div>
                            </div>




                            {/* <!-- SAMPLE --> */}
                            <div className="sample">
                                <div className="sample-image">
                                    <img src="img/samples/adgroove_sample.jpg" alt="image" />
                                    {/* <!--    <div className="sample-keyword"></div> --> */}
                                </div>
                                <div className="sample-text">
                                    <div className="sample-title">YouTube Ad</div>
                                    <div className="sample-info">Here is Groovysaurus Rex – the company mascot in a 3D animated video advertisement which I <strong>wrote, storyboarded, and directed</strong>. The ad ran for 30 days and yielded <strong>19 conversions, with a 67% view rate.</strong></div>
                                    <div className="sample-links">
                                        <a href="see-more/youtube-ad.html">See more</a>
                                    </div>
                                </div>
                            </div>







                            {/* <!-- SAMPLE --> */}
                            <div className="sample" id="screenplays">
                                <div className="sample-image">
                                    <img src="img/samples/rayvonsnest_sample.jpg" alt="image" />
                                    {/* <!--    <div className="sample-keyword"></div> --> */}
                                </div>
                                <div className="sample-text">
                                    <div className="sample-title">Pilot Screenplay</div>
                                    <div className="sample-info">Screenwriting is one of my specialties. My <strong>award-winning, original, sci-fi, adult animated, pilot screenplay</strong> has successfully been pitched to production companies in the USA and Australia.</div>
                                    <div className="sample-links">
                                        <a href="https://www.emergingscreenwriters.com/2017-winners/">Award here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div id="anchor-casestudy" className="row row1 casestudies">
                    <div className="row-inner casestudy-inner">
                        <div className="casestudy-heading">
                            <h3 className="heading-block-background">Case Studies</h3>
                        </div>
                        <div className="casestudy-container">

                            {/* <!-- CASE STUDY --> */}
                            {/* <a href="case-studies/ausbeds-a-conversational-user-interface.html"> */}
                            {/* <Link to="/casestudy" > */}
                            <div className="casestudy">
                                <div className="casestudy-overlay">
                                    <div className="casestudy-title">
                                        <h3>Ausbeds: Scripted Chatbot</h3>
                                    </div>
                                    <div className="casestudy-author">Cortex Copywriter</div>
                                </div>
                                <div className="casestudy-logo"></div>
                                <div className="casestudy-image">
                                    <img src="img/blog_featured/blog_stock-10.jpg" alt="Cortex Copywriter Case Study: Ausbeds Chatbot" />
                                </div>
                            </div>
                            {/* </Link> */}

                            {/* <!-- CASE STUDY --> */}
                            <a href="case-studies/rebranding-blaze-research.html">
                                <div className="casestudy">
                                    <div className="casestudy-overlay">
                                        <div className="casestudy-title">
                                            <h3>Blaze Research: Rebrand</h3>
                                        </div>
                                        <div className="casestudy-author">Cortex Copywriter</div>
                                    </div>
                                    <div className="casestudy-logo"></div>
                                    <div className="casestudy-image">
                                        <img src="img/blog_featured/blog_stock-5.jpg" alt="Cortex Copywriter Case Study: Rebranding Campaign" />
                                    </div>
                                </div>
                            </a>

                            {/* <!-- CASE STUDY --> */}

                            <div className="casestudy">
                                <div className="casestudy-overlay">
                                    <div className="casestudy-title">
                                        <h3>COMING IN 2020 – StartScale: <em>'Uber of Marketing'</em></h3>
                                    </div>
                                    <div className="casestudy-author"></div>
                                </div>
                                <div className="casestudy-logo"></div>
                                <div className="casestudy-image">
                                    <img src="img/blog_featured/blog_stock-6.jpg" alt="Cortex Copywriter Case Study: Rebranding Campaign" />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div id="anchor-samples" className="row row2 samples">
                        <div className="row-inner samples-inner">

                            {/* <!--  ********************** SECTION 1 **********************  --> */}

                            <div className="sample-heading sample-heading-1">
                                <h3 className="heading-block-background">Samples</h3>
                                <h4 className="sample-title-1">Useful UX</h4>
                            </div>

                            <div className="sample-container sample-container-1">

                                {/* <!-- SAMPLE --> */}
                                <div className="sample">
                                    <div className="sample-image">
                                        <img src="img/samples/chatbot.jpg" alt="image" />
                                        <div className="sample-keyword"></div>
                                    </div>
                                    <div className="sample-text">
                                        <div className="sample-title">Scripted Chatbot</div>
                                        <div className="sample-info">Conversation design guidelines such as <strong>chatbot personality, flowcharts, and scripts</strong> helped me convert complex mattress fitting data into simple dialogue for a scripted chatbot that <strong>guides customers</strong> in choosing the right mattress for their weight range.</div>
                                        <div className="sample-links">
                                            {/* <Link to="/casestudy" ><div className="sidebar-sub-button">Case study</div></Link> */}
                                            {/* <a href="case-studies/ausbeds-a-conversational-user-interface.html">Case study</a> */}
                                            {/* <!--  <a href="https://www.ausbeds.com.au/sienna/">Website</a> --> */}
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- SAMPLE
        <div className="sample">
          <div className="sample-image">
            <img src="img\samples\landing.jpg">
            <div className="sample-keyword"></div>
          </div>
          <div className="sample-text">
            <div className="sample-title">Landing Page</div>
            <div className="sample-info"><strong>UX principles</strong> including hierarchy (bolder/bigger font size), organization (bullet points), <strong>short headline</strong>, and one purpose CTA button allowed me to create a <strong>high-converting landing page</strong> for a web hosting offer.</div>
            <div className="sample-links"></div>
          </div>
        </div> --> */}


                                {/* <!-- SAMPLE --> */}
                                <div className="sample">
                                    <div className="sample-image">
                                        <img src="img/samples/speedpix.jpg" alt="image" />
                                        {/* <!--   <div className="sample-keyword"></div> --> */}
                                    </div>
                                    <div className="sample-text">
                                        <div className="sample-title">User Onboarding</div>
                                        <div className="sample-info">Here is the first screen in an onboarding process I wrote for a SaaS product. To create a smooth introduction to the product and <strong>improve conversion rates</strong>, I used reassuring details and informative labels to <strong>clear possible uncertainties and reduce ambiguity</strong>.</div>
                                        <div className="sample-links">
                                            <a href="see-more/speedpix-onboarding.html">See more</a>
                                            {/* <!--  <a href="https://www.ausbeds.com.au/sienna/">Website</a> --> */}
                                        </div>
                                    </div>
                                </div>



                                {/* <!-- SAMPLE --> */}
                                <div className="sample">
                                    <div className="sample-image">
                                        <img src="img/samples/startscale.jpg" alt="image" />
                                        <div className="sample-keyword"></div>
                                    </div>
                                    <div className="sample-text">
                                        <div className="sample-title">Product Development</div>
                                        <div className="sample-info">As the <strong>sole UX writer</strong> on a product team building the 'Uber of marketing', I wrote and designed web copy, <strong>microcopy</strong>, notifications, forms, FAQs, sales video script, automated emails, signup page, login page, pricing page, checkout page, and more.</div>
                                        <div className="sample-links">
                                            <a href="#anchor-casestudy">Case study coming in 2020</a>
                                            {/* <!--  <a href="https://www.ausbeds.com.au/sienna/">Website</a> --> */}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <!--  ********************** SECTION 2 **********************  --> */}


                            <div className="sample-heading sample-heading-2">
                                <h4 className="sample-title-2">Digital Copy</h4>
                            </div>
                            <div className="sample-container sample-container-2">

                                {/* <!-- SAMPLE --> */}
                                <div className="sample">
                                    <div className="sample-image">
                                        <img src="img/samples/blaze_sample.jpg" alt="image" />
                                        {/* <!--    <div className="sample-keyword"></div> --> */}
                                    </div>
                                    <div className="sample-text">
                                        <div className="sample-title">Rebranding Campaign</div>
                                        <div className="sample-info">I developed a new brand voice and brand identity – <strong>content style guide, design system</strong>, brand name, logo, tagline, and website – to <strong>improve communications and online presence.</strong></div>
                                        <div className="sample-links">
                                            <a href="case-studies/rebranding-blaze-research.html">Case study</a>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- SAMPLE --> */}
                                <div className="sample">
                                    <div className="sample-image">
                                        <img src="img/samples/tara.jpg" alt="image" />
                                        {/* <!--   <div className="sample-keyword"></div> --> */}
                                    </div>
                                    <div className="sample-text">
                                        <div className="sample-title">Facebook Ads</div>
                                        <div className="sample-info">I’ve lost count of how many Facebook ads I’ve written. My <strong>general strategy </strong>for writing ads with limited space is to make sure the copy focuses on a single, specific thought, and <strong>shows empathy</strong>. Check out some of my recent ads.</div>
                                        <div className="sample-links">
                                            <a href="see-more/facebook-ads.html">See more</a>
                                            {/* <!--  <a href="https://www.ausbeds.com.au/sienna/">Website</a> --> */}
                                        </div>
                                    </div>
                                </div>



                                {/* <!-- SAMPLE --> */}
                                <div className="sample">
                                    <div className="sample-image">
                                        <img src="img/samples/purelearning_sample.jpg" alt="image" />
                                        {/* <!--    <div className="sample-keyword"></div> --> */}
                                    </div>
                                    <div className="sample-text">
                                        <div className="sample-title">Explainer Video</div>
                                        <div className="sample-info">Here’s a screenshot for a video I <strong>wrote, storyboarded, and directed.</strong> The aim was to build awareness for an eLearning company. The copy – which inspired the audience to think, feel, and act – helped <strong>increase sales by 9.86%.</strong></div>
                                        <div className="sample-links">
                                            <a href="see-more/explainer-video.html">See more</a>
                                        </div>
                                    </div>
                                </div>




                                {/* <!-- SAMPLE --> */}
                                <div className="sample">
                                    <div className="sample-image">
                                        <img src="img/samples/adgroove_sample.jpg" alt="image" />
                                        {/* <!--    <div className="sample-keyword"></div> --> */}
                                    </div>
                                    <div className="sample-text">
                                        <div className="sample-title">YouTube Ad</div>
                                        <div className="sample-info">Here is Groovysaurus Rex – the company mascot in a 3D animated video advertisement which I <strong>wrote, storyboarded, and directed</strong>. The ad ran for 30 days and yielded <strong>19 conversions, with a 67% view rate.</strong></div>
                                        <div className="sample-links">
                                            <a href="see-more/youtube-ad.html">See more</a>
                                        </div>
                                    </div>
                                </div>







                                {/* <!-- SAMPLE --> */}
                                <div className="sample" id="screenplays">
                                    <div className="sample-image">
                                        <img src="img/samples/rayvonsnest_sample.jpg" alt="image" />
                                        {/* <!--    <div className="sample-keyword"></div> --> */}
                                    </div>
                                    <div className="sample-text">
                                        <div className="sample-title">Pilot Screenplay</div>
                                        <div className="sample-info">Screenwriting is one of my specialties. My <strong>award-winning, original, sci-fi, adult animated, pilot screenplay</strong> has successfully been pitched to production companies in the USA and Australia.</div>
                                        <div className="sample-links">
                                            <a href="https://www.emergingscreenwriters.com/2017-winners/">Award here</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div id="anchor-blog" className="row row2 blogs">
                    <div className="row-inner blog-inner">

                        <div className="blog-heading">
                            <h3 className="heading-block-background">Blogs</h3>
                        </div>
                        <div className="blog-container" id="articles">

                            {/* <!-- BLOG --> */}
                            <a href="blog/evolution-of-copy.html">
                                <div className="blog">
                                    <div className="blog-overlay">
                                        <div className="blog-title">
                                            <h3>What is digital copywriting? The evolution of copy from <em>Mad Men</em> to <em>UX writing</em> and <em>beyond</em></h3>
                                        </div>
                                        <div className="blog-author">Cortex Copywriter</div>
                                    </div>
                                    <div className="blog-logo"></div>
                                    <div className="blog-image">
                                        <img src="img/blog_featured/blog_stock-1.jpg" alt="What is Digital Copywriting?" />
                                    </div>
                                </div>
                            </a>




                            {/* <!-- BLOG --> */}
                            <a href="blog/how-will-screenwriting-evolve.html">

                                <div className="blog">
                                    <div className="blog-overlay">
                                        <div className="blog-title">
                                            <h3>Vertical video to virtual vistas. How will the screenwriting craft evolve?</h3>
                                        </div>
                                        <div className="blog-author">Cortex Copywriter</div>
                                    </div>
                                    <div className="blog-logo"></div>
                                    <div className="blog-image">
                                        <img src="img/blog_featured/blog_stock-0.jpg" alt="Vertical Video to Virtual Vistas" />
                                    </div>
                                </div>
                            </a>

                            {/* <!-- BLOG --> */}
                            <a href="blog/top-3-ways-psychology-hacks-minds.html">

                                <div className="blog">
                                    <div className="blog-overlay">
                                        <div className="blog-title">
                                            <h3>Top 3 ways psychology-based copywriting satisfies user needs</h3>
                                        </div>
                                        <div className="blog-author">Cortex Copywriter</div>
                                    </div>
                                    <div className="blog-logo"></div>
                                    <div className="blog-image">
                                        <img src="img/blog_featured/blog_stock-4.jpg" alt="Psychology-based Copywriting" />
                                    </div>
                                </div>
                            </a>

                            {/* <!-- BLOG --> */}
                            <a href="blog/UX-writing-and-FBI-negotiation.html">

                                <div className="blog">
                                    <div className="blog-overlay">
                                        <div className="blog-title">
                                            <h3>Enhance your UX writing with FBI negotiation tactics</h3>
                                        </div>
                                        <div className="blog-author">Cortex Copywriter</div>
                                    </div>
                                    <div className="blog-logo"></div>
                                    <div className="blog-image">
                                        <img src="img/blog_featured/blog_stock-7.jpg" alt="UX writing and FBI Negotiation" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


                <div id="anchor-reviews" className="row row1 reviews">
                    <div className="row-inner review-inner">
                        <div className="reviews-heading">
                            <h3 className="heading-block-background">Reviews</h3>
                        </div>
                        <div className="review-container" id="reviews">
                            {/* REVIEW */}
                            <div className="review">
                                <div className="review-image">
                                    <img src="img/reviews/persona-2.svg" alt="image" />
                                    <div className="review-logo" />
                                </div>
                                <div className="review-text">
                                    <div className="review-name">Karl Van Lieshout</div>
                                    <div className="review-title">Owner &amp; Operator – Ausbeds</div>
                                    <div className="review-short">
                                        <div className="review-short-sample">"..innovative"</div>
                                        <div className="review-short-sample">"..seamless UX"</div>
                                        <div className="review-short-sample">"..more online sales"</div>
                                    </div>
                                </div>
                                <div className="review-long-container">
                                    <div className="review-long-title">Show full testimonial</div>
                                    <div className="review-long">
                                        <div className="review-long-text-container">
                                            <p>"I contacted Nathan because the innovative conversational interface and seamless user experience of his website inspired me. His perspective on my website rewrite was a huge help – Nathan gave me some great ideas that got me out of a creative slump.</p>
                                            <p>He nailed all my briefs and produced excellent content – web copy, USP, SEO, UX, CX writing, scripted chatbot, and email marketing. Thanks to Nathan, customers compliment my new website and we’re getting more online sales."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* REVIEW */}
                            <div className="review">
                                <div className="review-image">
                                    <img src="img/reviews/persona-7.svg" alt="image" />
                                    <div className="review-logo" />
                                </div>
                                <div className="review-text">
                                    <div className="review-name">Rosawin Siri</div>
                                    <div className="review-title">Digital Marketing Manager – 4mation Technologies</div>
                                    <div className="review-short">
                                        <div className="review-short-sample">"..flexible"</div>
                                        <div className="review-short-sample">"..nailed voice &amp; tone"</div>
                                        <div className="review-short-sample">"..keep on retainer"</div>
                                    </div>
                                </div>
                                <div className="review-long-container">
                                    <div className="review-long-title">Show full testimonial</div>
                                    <div className="review-long">
                                        <div className="review-long-text-container">
                                            <p>"Nathan is very easy going and flexible – we meet virtually or on-site at my office. He worked hard to understand our brand voice and write content with the correct tone, personality, and word choices.</p>
                                            <p>Nathan nailed brand voice &amp; tone after a couple of attempts and now I keep him on retainer to write a wide range of content from web copy, blogs, and social media. His writing is so effective, it evokes almost instant action from our target audience and consistently achieves business goals."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* REVIEW */}
                            <div className="review">
                                <div className="review-image">
                                    <img src="img/reviews/persona-6.svg" alt="image" />
                                    <div className="review-logo" />
                                </div>
                                <div className="review-text">
                                    <div className="review-name">Craig Erskine-Smith</div>
                                    <div className="review-title">CEO – Erskine Oral Care</div>
                                    <div className="review-short">
                                        <div className="review-short-sample">"..wonderful ideas"</div>
                                        <div className="review-short-sample">"..perfect tagline"</div>
                                        <div className="review-short-sample">"..excellent wireframes"</div>
                                    </div>
                                    <div className="review-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="review-long-container">
                                    <div className="review-long-title">Show full testimonial</div>
                                    <div className="review-long">
                                        <div className="review-long-text-container">
                                            <p>"Nathan was very helpful, he produced wonderful ideas and wrote great web copy for me. He was friendly, flexible, and participated in a design sprint with my product team.</p>
                                            <p>Nathan came up with the perfect tagline and unique value proposition for my product and we sketched out excellent wireframes that clarified my website content and functionality."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* REVIEW */}
                            <div className="review">
                                <div className="review-image">
                                    <img src="img/reviews/persona-4.svg" />
                                    <div className="review-logo" />
                                </div>
                                <div className="review-text">
                                    <div className="review-name">Liam Key</div>
                                    <div className="review-title">Creative Director – Imagination Pioneers Studios</div>
                                    <div className="review-short">
                                        <div className="review-short-sample">"..love his passion"</div>
                                        <div className="review-short-sample">"..heaps of depth"</div>
                                        <div className="review-short-sample">"..speaks to my brand"</div>
                                    </div>
                                </div>
                                <div className="review-long-container">
                                    <div className="review-long-title">Show full testimonial</div>
                                    <div className="review-long">
                                        <div className="review-long-text-container">
                                            <p>"I always enjoy working with Nathan, I love his passion to think and dream of big things. His writing craft is brilliant and has heaps of depth behind it. Nathan works closely with my design studio to deliver copy across a range of mediums – web development, motion graphics, 3D animation, and more.</p>
                                            <p>The voice and tone Nathan writes with really speaks to my brand and reinforces the value of what I do. I look forward to seeing all of the interesting ideas we have discussed come to life."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* REVIEW */}
                            <div className="review">
                                <div className="review-image">
                                    <img src="img/reviews/persona-5.svg" />
                                    <div className="review-logo" />
                                </div>
                                <div className="review-text">
                                    <div className="review-name">Eoin Mullins</div>
                                    <div className="review-title">Director – Corbel Technologies</div>
                                    <div className="review-short">
                                        <div className="review-short-sample">"..beautiful copy"</div>
                                        <div className="review-short-sample">"..psychology edge"</div>
                                        <div className="review-short-sample">"..emotional currents"</div>
                                    </div>
                                </div>
                                <div className="review-long-container">
                                    <div className="review-long-title">Show full testimonial</div>
                                    <div className="review-long">
                                        <div className="review-long-text-container">
                                            <p>"I received consistently beautiful web copy from Nathan. His background in psychology and neuroscience gives his writing an edge.</p>
                                            <p>Nathan can tune into the emotional currents of desire, need, and pleasure that pull customers to our products and services."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* REVIEW */}
                            <div className="review">
                                <div className="review-image">
                                    <img src="img/reviews/persona-3.svg" />
                                    <div className="review-logo" />
                                </div>
                                <div className="review-text">
                                    <div className="review-name">Adrian Rodriguez Soto</div>
                                    <div className="review-title">eCommerce Manager – EUX Agency</div>
                                    <div className="review-short">
                                        <div className="review-short-sample">"..superior intellect"</div>
                                        <div className="review-short-sample">"..deep psychology"</div>
                                        <div className="review-short-sample">"..doubled conversions"</div>
                                    </div>
                                </div>
                                <div className="review-long-container">
                                    <div className="review-long-title">Show full testimonial</div>
                                    <div className="review-long">
                                        <div className="review-long-text-container">
                                            <p>"Within 2 minutes of talking with Nathan, I realized I was dealing with a superior intellect. He doesn’t miss much! I was shocked by the speed, power, and precision of Nathan’s copywriting and UX writing. Nathan instinctively knows what works and what doesn’t because he has deep knowledge of consumer and behavioral psychology.</p>
                                            <p>Nathan’s fine-tuned copy nearly doubled our website’s overall conversion rate. I can’t wait to see what he does next for our business!"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* REVIEW */}
                            {/* <div className="review">
            <div className="review-image">
              <img src="img\reviews\persona-7.svg">
              <div className="review-logo"></div>
            </div>
            <div className="review-text">
              <div className="review-name">Adrian Rodriguez Soto</div>
              <div className="review-title">eCommerce Manager – EUX Agency</div>
              <div className="review-short">
                <div className="review-short-sample">"..superior intellect"</div>
                <div className="review-short-sample">"..deep psychology"</div>
                <div className="review-short-sample">"..doubled conversions"</div>
              </div>



            </div>
            <div className="review-long-container">
              <div className="review-long-title">Show full testimonial</div>
              <div className="review-long">
                <div className="review-long-text-container">
                <p>"Within 2 minutes of talking with Nathan, I realized I was dealing with a superior intellect. He doesn’t miss much! I was shocked by the speed, power, and precision of Nathan’s copywriting and UX writing. Nathan instinctively knows what works and what doesn’t because he has deep knowledge of consumer and behavioral psychology.</p>
                <p>Nathan’s fine-tuned copy nearly doubled our website’s overall conversion rate. I can’t wait to see what he does next for our business!"</p>
              </div>
              </div>
            </div>
          </div> */}
                            {/* REVIEW */}
                            {/* <div className="review">
            <div className="review-image">
              <img src="img\reviews\persona-8.svg">
              <div className="review-logo"></div>
            </div>
            <div className="review-text">
              <div className="review-name">Adrian Rodriguez Soto</div>
              <div className="review-title">eCommerce Manager – EUX Agency</div>
              <div className="review-short">
                <div className="review-short-sample">"..superior intellect"</div>
                <div className="review-short-sample">"..deep psychology"</div>
                <div className="review-short-sample">"..doubled conversions"</div>
              </div>



            </div>
            <div className="review-long-container">
              <div className="review-long-title">Show full testimonial</div>
              <div className="review-long">
                <div className="review-long-text-container">
                <p>"Within 2 minutes of talking with Nathan, I realized I was dealing with a superior intellect. He doesn’t miss much! I was shocked by the speed, power, and precision of Nathan’s copywriting and UX writing. Nathan instinctively knows what works and what doesn’t because he has deep knowledge of consumer and behavioral psychology.</p>
                <p>Nathan’s fine-tuned copy nearly doubled our website’s overall conversion rate. I can’t wait to see what he does next for our business!"</p>
              </div>
              </div>
            </div>
          </div> */}
                        </div>
                    </div>
                </div>



                <div id="anchor-contact" className="row row1 contact-section-form">
                    <div className="row-inner contact-section-inner">
                        <div className="contact-section-container">
                            <div className="contact-section-image" />
                            <div className="contact-section-text">
                                Pick my<span className="text-italic"> brain/cortex </span> and let's get <span className="text-bolder">started</span> on your project
      </div>
                            <div className="contact-social-container">
                                <div className="contact-social contact-social-email">
                                    <div className="contact-social-icon"><i className="fas fa-envelope" /></div>
                                    <div className="contact-social-title">nathan@cortexcopywriter.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row row2 footer">
                    <div className="row-inner footer-inner">
                        <div className="footer-container">
                            <p>Based in Sydney, Australia. Available worldwide.</p>

                            <div className="footer-row footer-personas">
                                <div className="footer-persona character_community" id="waving_community"></div>
                                <div className="footer-persona character_corporate" id="waving_corporate"></div>
                                <div className="footer-persona character_technology" id="waving_technology"></div>
                                <div className="footer-persona character_luxury" id="waving_luxury"></div>
                                <div className="footer-persona character_entertainment" id="waving_entertainment"></div>
                            </div>


                            <div className="footer-row footer-icons">
                                <a href="https://www.stage32.com/profile/647803/about">
                                    <div className="sidebar-icon"><i className="fas fa-film"></i></div>
                                </a>
                                <a href="https://www.facebook.com/peter.popias">
                                    <div className="sidebar-icon"><i className="fab fa-facebook-square"></i></div>
                                </a>
                                <a href="https://www.linkedin.com/in/cortex-copywriter/">
                                    <div className="sidebar-icon"><i className="fab fa-linkedin"></i></div>
                                </a>
                            </div>


                            <div className="footer-row footer-info">
                                <div className="footer-year">© Cortex Copywriter <span className='footer-year-num'></span> | ABN 341 1599 0520</div>
                                <div className="footer-sitedeveloper">
                                    <a href="http://www.liamkey.com/">Interaction Design + Code by Liam Key</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="contact-form-icon"><i class="fas fa-envelope"></i></div>

                <div class="contact-form">
                    <div class="contact-form-outercontainer">
                        <div class="contact-form-title">Enquiries</div>
                        <div class="contact-form-container">
                            <form class="contact-form-enquiry">
                                <input aria-required="true" required minlength="4" class="contact-form-name" type="text" name="name"
                                    placeholder="Name:" />
                                <input aria-required="true" required minlength="4" class="contact-form-subject" type="text" name="subject"
                                    placeholder="Subject:" />
                                <input aria-required="true" required class="contact-form-email" type="email" name="email"
                                    placeholder="Email:" />
                                <textarea aria-required="true" required class="contact-form-message" name="message"
                                    placeholder="Message:"></textarea>
                            </form>
                            <div class="contact-form-submit">Push it good</div>
                        </div>
                        <div class="contact-form-close">X</div>
                        {/* <!-- <div class="contact-form-test-success">+</div> --> */}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default HomePage
