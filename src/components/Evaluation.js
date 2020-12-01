import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import working from './working'
// import "./alt-main.css"

const Evaluation = () => {
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
                {/* <div className="fixed-topbar-hamburger">☰</div> */}
                <div className="menu">
                    <div className="topbar-hamburger">☰</div>
                </div>
                <div className="sidebar-menu">
                    <div className="sidebar-close">X</div>
                    <div className="sidebar-menu-inner">
                        <a href="../index-2.html#">
                            <div className="sidebar-logo">
                                <img src="/img/logo/logo_desktop_with_name.svg" alt="Cortex Copywriter" />
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
                {/* ******** BLOG 1 ********  */}
                <div className="row row1">
                    <div className="row-inner">
                        <div className="blog-container">
                            <div className="blog-heading">
                                <h1>What is Digital Copywriting?</h1>
                                <h2>The Evolution of Copy from Mad Men to UX Writing and Beyond</h2>
                            </div>
                            <p>I am always surprised at the different responses I receive after telling people I’m a copywriter:</p>
                            <p><em>“Ah, you can help me protect my music.” </em></p>
                            <p>No. <span className="underline">copywriting</span> is not <span className="underline">copyright </span> (legal rights).</p>
                            <p><em>“Hmm... I’ve never understood what a copywriting business does”.</em></p>
                            <p>Actually, neither did I until I saw Don Draper in the groundbreaking TV series Mad Men.</p>
                            <p> My introduction to the art of copywriting was watching Draper – a 1960’s advertising executive – penetrate people’s desires, pitch ideas and write effective copy (even while drunk!) for print ads in magazines, newspapers, posters, brochures and billboards.</p>
                            <div className="blog-image-row">
                                <img src="/blog/blog-img/DRAPER.jpg" />
                                <p><em>Don Draper pitching copy in Mad Men</em></p>
                            </div>
                            <p>However, the rise of digital content consumption has created a need for digital copywriters who focus on online content such as websites, blog and article writing, social media, emails and more.</p>
                            <p>While the medium of copywriting has evolved, a digital copywriter shares many of the same skills as 1960’s Mad Men ‘offline’ copywriters – composing words, whether written or spoken, that evoke an action from a target audience (the product is called copy).</p>
                            <h3 id="riseofux">The Rise of UX Writing </h3>
                            <p>During the last few years, a new digital trend has emerged called UX writing (also known as product copy, UI strings or microcopy). User experience (UX) writers craft all the text that guides your interaction with a product such as:</p>
                            <ul>
                                <li>Chatbots</li>
                                <li>Menu copy</li>
                                <li>Error 404s </li>
                                <li>Field labels</li>
                                <li>Empty states</li>
                                <li>Placeholders</li>
                                <li>Notifications</li>
                                <li>Calls to action</li>
                                <li>Signup forms</li>
                                <li>Tiny text in buttons</li>
                                <li>Terms and conditions </li>
                                <li>Logins &amp; password recovery</li>
                                <li>Instructions on product usage </li>
                                <li>Emails triggered by the product</li>
                            </ul>
                            <p>Therefore, copy is a visual element of design and the visual presentation of copy has a great influence on user experience. My background in <a href="top-3-ways-psychology-hacks-minds.html#perceptual">perceptual psychology/visual neuroscience </a> offers me insight into users’ visual perception and how to best use copy in educating users through a particular product experience.</p>
                            <div className="blog-image-row">
                                <img className="max-height-400" src="/blog/blog-img/UX.jpg" />
                                <p><em>UX writing in apps</em></p>
                            </div>
                            <p>While writers are commonly brought in at the end of projects, I have found that collaboration with design teams from beginning to end is more efficient and improves outcomes. For example, one of my recent projects involved participating in a 5-day design sprint to explore the problem space and generate product ideas for new visual presentation software – Speedpix.</p>
                            <p> A facilitator and lead designer supported the week-long workshop. We conducted research activities including a card sort, interviews, and observing volunteers using the product for the first time. </p>
                            <div className="blog-image-row">
                                <img src="/blog/blog-img/sprint.jpg" />
                                <p><em>Card sorting in a design sprint </em></p>
                            </div>
                            <p>The iterative design process started with a working prototype of the Speedpix product, then moved onto user flows and paper sketches. I worked with the designer and the company’s CEO to create wireframes, a taxonomy/labeling system, and microcopy for the product’s interface.</p>
                            <p>It was crucial to ensure balance between my writing and the designer’s <em>fonts, colors, illustrations, icons, buttons, shapes and animations</em> before moving onto high-fidelity visual designs.</p>
                            <p>After finalising interface design, annotated visual designs were handed back to the in-house development team. The outcome of the design sprint was a customer validated prototype which the executive team could use to push company thinking regarding product direction and strategy. </p>
                            <h3>Digital Interfaces in the Future</h3>
                            <p>As interfaces continue to evolve, I’m fascinated by how copywriting and UX writing will evolve with them. Good writing is vital whether the digital interface is <em>virtual, holographic, 360-degree video, augmented reality or a pair of smart glasses.</em></p>
                            <div className="blog-image-row">
                                <img src="/blog/blog-img/SMARTGLASS.jpg" />
                                <p><em>Crafting copy in smart glasses</em></p>
                            </div>
                            <p>For example, writing in smart glasses raises the question of how text position and presentation effects comprehension while walking.</p>
                            <p>Virtual reality presents the challenge of how to cue users – should there be a BIG TEXT SIGN or an attention-grabbing VR character?</p>
                            <p>And while many of Apple’s patented ideas never see the light of day, one patent I hope becomes a reality is ‘interactive holograms’. Apple’s system aims to let you swipe and gesture to interact with projected images that appear to hang in mid-air.</p>
                            <p>It seems like new technologies will present endless possibilities for engaging content and the art of copywriting. For example, I have even written text messages for a client who required delicate and subtle writing to influence emotion and responses regarding a sensitive subject.</p>
                            <p><strong>If you need a digital copywriter or UX writer, <a href="#contact">get in touch </a>and let’s chat about your project.</strong></p>
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

export default Evaluation
