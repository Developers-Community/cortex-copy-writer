import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import working from './working'

const ScreenWriter = () => {
    useEffect(() => {
        working()
    }, [])
    return (
        <div>
            <>
                {/* ******** HEADER ********  */}
                <div className="blog-header row2">
                    <div className="blog-logo">
                        <a href="../index-2.html#"><div className="logo_animation_container" id="logo_animation" /></a>
                    </div>
                </div>
                {/* ****************** LOGO + HAMBURGER MENU ****************** */}
                <div className="fixed-topbar-hamburger">☰</div>
                <div className="menu">
                    <div className="topbar-hamburger">☰</div>
                </div>
                <div className="sidebar-menu">
                    <div className="sidebar-close">X</div>
                    <div className="sidebar-menu-inner">
                        <a href="../index-2.html#">
                            <div className="sidebar-logo">
                                <img src="../img/logo/logo_desktop_with_name.svg" alt="Cortex Copywriter" />
                            </div>
                        </a>
                        <a href="../index-2.html#anchor-services"><div className="sidebar-button">Services</div></a>
                        <a href="../index-2.html#anchor-about"><div className="sidebar-button">About</div></a>
                        <a href="../index-2.html#anchor-chatbot"><div className="sidebar-button">Chatbot</div></a>
                        <a href="../index-2.html#anchor-techniques"><div className="sidebar-button">Techniques</div></a>
                        <a href="../index-2.html#anchor-samples"><div className="sidebar-button">Samples</div></a>
                        <a href="../index-2.html#anchor-reviews"><div className="sidebar-button">Reviews</div></a>
                        <div className="sidebar-button sidebar-contact">Contact</div>
                        <a href="../index-2.html#anchor-casestudy"><div className="sidebar-button sidebar-inactive">Case Studies ▾ </div></a>
                        <a href="../case-studies/ausbeds-a-conversational-user-interface.html"><div className="sidebar-sub-button">Ausbeds chatbot</div></a>
                        <a href="../case-studies/rebranding-blaze-research.html"><div className="sidebar-sub-button">Blaze rebrand</div></a>
                        <a href="../index-2.html#anchor-casestudy"><div className="sidebar-sub-button">COMING IN 2020: StartScale platform</div></a>
                        <a href="../index-2.html#anchor-blog"><div className="sidebar-button sidebar-inactive">Blogs ▾</div></a>
                        <Link to="/ux-writing"><div className="sidebar-sub-button">UX writing &amp; FBI negotiation tactics</div></Link>
                        <Link to="/evaluation"><div className="sidebar-sub-button">What is digital copywriting?</div></Link>
                        <Link to="/screenwriter"><div className="sidebar-sub-button">Screenwriting evolution</div></Link>
                        <Link to="/psychology"><div className="sidebar-sub-button">Psychology copy hacks</div></Link>
                        <div className="sidebar-social">
                            <a href="https://www.stage32.com/profile/647803/about"> <div className="sidebar-icon"><i className="fas fa-film" /></div> </a>
                            <a href="https://www.facebook.com/peter.popias"> <div className="sidebar-icon"><i className="fab fa-facebook-square" /></div> </a>
                            <a href="https://www.linkedin.com/in/cortex-copywriter/"> <div className="sidebar-icon"><i className="fab fa-linkedin" /></div> </a>
                        </div>
                    </div>
                </div>
                {/* ******** BLOG 3 ********  */}
                <div className="row row1">
                    <div className="row-inner">
                        <div className="blog-container">
                            <div className="blog-heading">
                                <h1>Vertical Video to Virtual Vistas</h1>
                                <h2>How Will the Screenwriting Craft Evolve?</h2>
                            </div>
                            <p>As a visual thinker, composing compelling <em>spatial and verbal images</em> in screenplays is one of my favorite forms of writing.</p>
                            <p>I’m an award-winning <a href="../index-2.html#screenplays">screenwriter</a> who has successfully pitched an animated TV pilot to production companies in the USA and Australia. </p>
                            <p>With the rise of vertical video and virtual reality cinema/gaming, the art of screenwriting is set to rapidly evolve.</p>
                            <h3>Please Make Sure Your Mobile Devices Are In Their Full Upright Position </h3>
                            <p>For over a century, we’ve had a ‘horizontal’ widescreen language for cinema, TV, computers and laptops. But now billions of people around the world hold their phones vertically when capturing content. From <em>Snapchat and Instagram
            Stories to IGTV</em>, vertical video is here to stay.</p>
                            <p>Most of my screenwriting and storyboarding experience has been for the traditional widescreen format (TV and YouTube). Writing video scripts for vertical video presents both opportunities and challenges when it comes to brand
          storytelling. </p>
                            <p>For example, the vertical format requires <em>refined, closer cropped images</em>. Therefore, significant depth is lost in terms of story context compared to widescreen format. However, the vertical orientation offers <em>immediacy,
            intimacy and interactivity. </em></p>
                            <p>I enjoy figuring out how to adapt my screenwriting to these opportunities and challenges. I have to consider that vertical format is ideal for images which project towards the horizon since fast horizontal movement is difficult to capture
          on vertical video and can even cause dizziness for the audience.</p>
                            <p>Importantly, a lot of videos on phones – whether vertical or square (Facebook and Twitter) format/frames – are watched without sound. Many people watch (or start to watch) mobile videos passively in <em>mute mode</em> while in transit or
          in public spaces.</p>
                            <p>Screenwriting has to evolve and embrace this fact. A solution is <em>adding text</em> on vertical videos to help the viewer understand the video in its context with the sound off. Graphics and text provide the audience with an <em>extra
            cue</em> that helps them retain information better.</p>
                            <p>Mobile devices have flipped the script – marketing campaigns now <em>start with mobile</em> and are adapted later on to other video formats and devices. </p>
                            <p>To leverage the power of <em>all video content platforms </em>available, screenwriters have to consider framing and create shots/scenes that will look good in all formats/screen sizes.</p>
                            <div className="blog-image-row">
                                <img src="/blog/blog-img/verticalMobile.jpg" />
                                <p><em>Adding text on vertical videos overcomes mute mode and highlights key actions</em></p>
                            </div>
                            <h3>Venturing into Vast Vivid Virtual Worlds </h3>
                            <p>The language of cinema, although confined to the space of a rectangle, has allowed screenwriters, directors and actors to get as close to the human psyche as it’s possible to get.</p>
                            <p>But now with virtual reality (VR) cinema and gaming entering the mainstream, we are given 360-degree immersive environments to explore rather than perceive through a ‘window’ <em>(360-degree videos or spherical videos can be considered
            one type of VR – but this is disputed).</em></p>
                            <p>Since humans started telling stories around a fire, we’ve been used to a <em>Teller-Listener Storytelling Paradigm </em>where a storyteller projects a story received by a listener. But VR introduces a <em>Builder-Participator Storytelling
            Paradigm </em>where writers, directors and producers build environments for audiences to participate in.</p>
                            <p>Screenwriters have to rethink the way they write scripts in order to create truly captivating VR content. Rather than setting a series of events in time, VR script writing is more like world building.</p>
                            <p>For example, VR has six different planes – <em>front, back, left, right, up and down</em>. One way to experience VR through a script before shooting a frame is to color-code the script (as done by screenwriters Elia Petridis and Gary
          Tieche).</p>
                            <p>Below I have written an <em>example color-coded VR screenplay</em> based on Game of Thrones:</p>
                            <div className="blog-image-row">
                                <img src="/blog/blog-img/vr_screenplay_methods.jpg" />
                                <p><em>6 planes in VR – a multicolored script points you in the right direction</em></p>
                            </div>
                            <p>The challenge for VR writers is understanding that not every piece of content makes sense in VR. Screenwriters will have to liberate themselves from the frame – film and TV – to find the
          rules and poetics of the new VR art form. </p>
                            <p><strong>If you need a screenwriter for traditional widescreen video, vertical video or VR, <a href="#contact">contact me for a friendly chat.</a></strong></p>
                        </div>
                    </div>
                </div>
                {/* ******************* CONTACT INFO ******************* */}
                <div id="anchor-contact" className="row row1 contact-section-form">
                    <div className="row-inner contact-section-inner">
                        <div className="contact-section-container">
                            <div className="contact-section-image" />
                            <div className="contact-section-text" id="contact">
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
                {/* ******************* FOOTER ******************* */}
                <div className="row row2 footer">
                    <div className="row-inner footer-inner">
                        <div className="footer-container">
                            <p>Based in Sydney, Australia. Available worldwide.</p>
                            {/* ROW */}
                            <div className="footer-row footer-personas">
                                <div className="footer-persona" id="waving_community" />
                                <div className="footer-persona" id="waving_corporate" />
                                <div className="footer-persona" id="waving_technology" />
                                <div className="footer-persona" id="waving_luxury" />
                                <div className="footer-persona" id="waving_entertainment" />
                            </div>
                            {/* ROW */}
                            <div className="footer-row footer-icons">
                                <a href="https://www.stage32.com/profile/647803/about"> <div className="sidebar-icon"><i className="fas fa-film" /></div> </a>
                                <a href="https://www.facebook.com/peter.popias"> <div className="sidebar-icon"><i className="fab fa-facebook-square" /></div> </a>
                                <a href="https://www.linkedin.com/in/cortex-copywriter/"> <div className="sidebar-icon"><i className="fab fa-linkedin" /></div> </a>
                            </div>
                            {/* ROW */}
                            <div className="footer-row footer-info">
                                <div className="footer-year">© Cortex Copywriter <span className="footer-year-num" /> | ABN 341 1599 0520</div>
                                <div className="footer-sitedeveloper">
                                    <a href="http://www.liamkey.com/">Interaction Design + Code by Liam Key</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ******************* CONTACT FORM ******************* */}
                <div className="contact-form-icon"><i className="fas fa-envelope" /></div>
                <div className="contact-form">
                    <div className="contact-form-outercontainer">
                        <div className="contact-form-title">Enquiries</div>
                        <div className="contact-form-container">
                            {/* <form class="contact-form-enquiry" action="libraries/index_email.php"> */}
                            <form className="contact-form-enquiry">
                                <input aria-required="true" required minLength={4} className="contact-form-name" type="text" name="name" placeholder="Name:" />
                                <input aria-required="true" required minLength={4} className="contact-form-subject" type="text" name="subject" placeholder="Subject:" />
                                <input aria-required="true" required className="contact-form-email" type="email" name="email" placeholder="Email:" />
                                <textarea aria-required="true" required className="contact-form-message" name="message" placeholder="Message:" defaultValue={""} />
                            </form>
                            <div className="contact-form-submit">Push it good</div>
                        </div>
                        <div className="contact-form-close">X</div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default ScreenWriter
