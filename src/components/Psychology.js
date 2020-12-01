import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import working from './working'

const Psychology = () => {
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
                {/* ******** BLOG 2 ********  */}
                <div className="row row1">
                    <div className="row-inner">
                        <div className="blog-container">
                            <div className="blog-heading">
                                <h1>Top 3 Ways Psychology-based Copywriting Satisfies User Needs</h1>
                            </div>
                            <p>Before I started copywriting and UX writing, I specialized in <em>perceptual psychology/visual neuroscience</em> and researched in the field of Transcranial Magnetic Stimulation. </p>
                            <p>After years of academic writing – rigid repetitive reports – I moved on to more creative writing including screenwriting.</p>
                            <p>My deep understanding of the brain/human behavior – especially <em>visual perception, decision-making, and behavioral motivation</em> – helps me craft psychology-based copywriting that enhances the power of copy to connect with, guide, and convert customers.</p>
                            <h3 id="perceptual">Gestalt Theory of Visual Perception for Effective Content Grouping </h3>
                            <p>Gestalt is a German word for shape or form. My previous visual psychology research required a deep understanding of Gestalt theory – laws that determine how objects are perceived. </p>
                            <p>The visual presentation of copy in <em>headlines, subheaders, body copy, call-to-action elements, and microcopy</em> has a great influence on legibility and <Link to="/evaluation">user experience (UX)</Link>. Therefore, it is crucial to organize copy content in the best way for users’ perception.</p>
                            <p>Knowledge of Gestalt principles such as <em>closure, continuity, connectedness, proximity, and similarity </em>helps me structure copy so users can quickly scan without making a significant effort to distinguish important information.</p>
                            <p>By understanding the psychology of website and app users, I can craft copywriting and UX writing that is clear, direct, and prevents misinterpretation.</p>
                            <div className="blog-image-row">
                                <img className="max-height-400 gestalt-img" src="/blog/blog-img/similarity.jpg" />
                                <p><em>Application of Gestalt theory</em></p>
                            </div>
                            <h3>Satisfaction Guaranteed with Maslow’s Hierarchy of Needs</h3>
                            <p>People buy solutions. They have a desire or problem and buy products that fulfil their need. </p>
                            <p>However, there are some products, such as virtual reality gaming, that <em>no one actually needs</em>. That's why I use <em>Maslow's hierarchy of needs</em> – an influential motivational theory – to help my copywriting target subconscious desires and appeal to people’s needs, hopes, and dreams. </p>
                            <p>Abraham Maslow’s motivational theory consists of a hierarchy of human needs that include:</p>
                            <ul>
                                <li>Physiological</li>
                                <li>Safety</li>
                                <li>Social</li>
                                <li>Esteem </li>
                                <li>Cognitive</li>
                                <li>Aesthetic </li>
                                <li>Self-actualization</li>
                                <li>Transcendence </li>
                            </ul>
                            <p>Let’s do a <em>quick exercise</em> and apply these motivational drivers to a non-essential item – <em>virtual reality (VR) gaming </em>– and try to craft copy that convinces prospective customers VR will fulfil one or more of their basic needs.</p>
                            <h4>Physiological</h4>
                            <p className="text-for-h4">We shouldn’t be marketing to people who desperately need food and water. We should be helping them. Let’s move on to the next need.</p>
                            <h4>Safety</h4>
                            <p className="text-for-h4">A potential customer driven by safety and security needs might be enticed to buy VR if they’re convinced a virtual environment – boxing ring or battlefield – allows them to experience fighting/violence <em>"in the comfort of your own home, without getting hurt".</em></p>
                            <h4>Social</h4>
                            <p className="text-for-h4">Targeting social needs could work by claiming: <em>“hang out with your friends in VR and enjoy a local game and/or online multiplayer”.</em></p>
                            <h4>Esteem</h4>
                            <p className="text-for-h4">Those in the self-esteem level of Maslow’s hierarchy may feel that possessing the latest or <em>“world’s first VR technology”</em> will bring them accolades from their peers.</p>
                            <h4>Cognitive</h4>
                            <p className="text-for-h4">VR gaming that allows you to go anywhere and <em>“puts the whole world within your reach”</em> would trigger customers’ cognitive needs such as learning and discovering.</p>
                            <h4>Aesthetic </h4>
                            <p className="text-for-h4">Aesthetic needs – the desire for attractive surroundings – can be addressed with claims like <em>“VR high-quality immersive visuals look and feel like magic, unlike anything you’ve ever seen”.</em></p>
                            <h4>Self-actualization</h4>
                            <p className="text-for-h4">People at this level have accomplished everything they need to – they want to solve hard problems – be creative and abstract. VR gaming could target self-actualization needs by focusing on developer tools and platforms that can <em>“sculpt an artistic vision and build custom virtual worlds".</em></p>
                            <h4>Transcendence</h4>
                            <p className="text-for-h4">This dimension of motivation is characterized by feelings of awe and ecstasy. VR can appeal to transcendence motivation by claiming to be the <em>“only way possible to experience time travel, space travel or stepping inside your favorite movie”.</em></p>
                            <div className="blog-image-row">
                                <img src="/blog/blog-img/VR.jpg" />
                                <p><em>Does VR satisfy any of your basic needs?</em></p>
                            </div>
                            <h3>Think Fast! Emotions and Feelgood Chemicals in Decision-making </h3>
                            <p>My favorite topics in psychology are decision-making and cognitive biases. According to Nobel Prize winner Daniel Kahneman, we have a two Systems of thinking – System 1 (Thinking Fast) and System 2 (Thinking Slow).</p>
                            <p>System 1 is <em>emotional, intuitive, stereotypic and unconscious </em>– a gut reaction way of thinking.</p>
                            <p>System 2 is <em>analytical, slow, logical and conscious </em>– the critical thinking way of making decisions.</p>
                            <p>We consider ourselves to be rational human beings and most of us identify with System 2 thinking. However, Kahneman’s research demonstrated that we spend most of our time in System 1 which forms ‘first impressions’, feelings, and is the reason why we jump to conclusions.</p>
                            <p>Importantly, System 1 is used to comprehend simple sentences like web copy and text on a billboard. Therefore, I know my copywriting and UX writing should target System 1 – emotions – and bypass the rational, thinking system (prefrontal cortex). </p>
                            <div className="blog-image-row">
                                <img className="behaviour-img" src="/blog/blog-img/Kahneman.jpg" />
                                <p><em>Behavior is ruled primarily by our emotions</em></p>
                            </div>
                            <p>Emotions are driven by neurochemicals. As a copywriter, it’s important not to press emotional buttons too hard. For example, I’m careful not to use linguistic threats – <em>pushy sales language</em> – which activates a primitive brain area called the amygdala <em>(fight or flight center)</em> that releases chemicals <em>(cortisol)</em> making you want to run. </p>
                            <p>My digital copy aims to stimulate the release of feelgood chemicals <em>(oxytocin, dopamine)</em> with <em>clear, positive, conversational language </em>that makes people want to engage, buy something or interact.</p>
                            <p>I have found it’s most effective to engage with a target audience – be on their side, speak to them respectfully in everyday language used with family and friends. This generates <em>feelings of safety and builds trust.</em></p>
                            <p>An important step in my copywriting process is listening intently with genuine interest to a target audience so that my writing will reflect their <em>language, attitudes, and concerns</em>. This creates excitement and builds bonds of loyalty, support, and a personal connection.</p>
                            <p><strong><a href="../index-2.html#techniques">Here are interactive examples</a> of fundamental psychology-based copywriting techniques. If you'd like me to apply advanced techniques such as <em>textural adjectives</em> and <Link Link to="/ux-writing">FBI hostage negotiation tactics</Link> on your project, just <a href="#contact">shoot me an email.</a></strong></p>
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

export default Psychology
