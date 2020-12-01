import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import working from './working'

const UxWriting = () => {
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
                        <a href="UX-writing-and-FBI-negotiation.html"><div className="sidebar-sub-button">UX writing &amp; FBI negotiation tactics</div></a>
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
                {/* ******** BLOG FBI ********  */}
                <div className="row row1">
                    <div className="row-inner">
                        <div className="blog-container">
                            <div className="blog-heading">
                                <h1>Enhance your UX Writing with FBI Negotiation Tactics</h1>
                            </div>
                            <p>What do FBI hostage negotiators and UX writers have in common? They both guide human behavior by using techniques in psychology and empathy – understanding another person’s situation, motives, feelings, and point of view. </p>
                            <p>UX writers are involved in negotiations all the time. How do we get users to complete a form or subscribe to a newsletter? While this is not the high stakes world of international kidnapping, FBI negotiating tactics can help you in business, family life, and even UX writing.</p>
                            <p>Chris Voss, founder and CEO of The Black Swan Group and author of <em>Never Split the Difference</em>, is a former FBI lead international kidnapping negotiator. During his 20 years at the FBI, Voss resolved kidnappings involving mercenaries, drug dealers, and terrorists using a system he helped design – tactical empathy. </p>
                            <h3>Create Trust with Tactical Empathy</h3>
                            <p>The question of why the FBI’s techniques worked drew Voss to Harvard University. Voss discovered that his tactical empathy system can be explained by research in psychology, neuroscience, and behavioral economics. </p>
                            <p>Tactical empathy takes emotional intelligence and intuition to the next level. It’s understanding the feelings and mindset of another person so you can identify what drives those feelings and influence them. </p>
                            <p>Let’s explore tactical empathy and look at examples of how to apply it in UX writing.</p>
                            <h3>Establish Rapport with a Mirror </h3>
                            <p>The FBI hostage negotiation skill of mirroring is almost like a Jedi mind trick. Mirroring is when you repeat exactly the last 3 words of what someone has just said. But when you get good at mirroring, you can pick one to three words from anywhere in the conversation. </p>
                            <p>We fear what is different and find comfort in similarity. When you mirror someone, they feel comforted, they’re encouraged to empathize and bond with you. </p>
                            <p>A study by psychologist Richard Wiseman showed that waiters who used mirroring received a 70% larger average tip than waiters who used positive reinforcement (saying "sure", "no problem", or "great" in response to each order). </p>
                            <p>Check out the <em>‘Switch experience’</em> button on the <a href="../index-2.html#">homepage</a> of this website to see examples of mirroring. The switch button lets you change the web copy, chatbot dialogue, techniques examples, and more to mirror the exact words, voice, and tone used by different groups of people (Technology, Corporate, Luxury, Community, Entertainment). </p>
                            <div className="blog-image-row">
                                <img className="gestalt-img" src="/blog/blog-img/mirror.jpg" alt="Mirroring people’s words in web copy" />
                                <p><em>Mirroring people’s words in web copy and chatbot dialogue </em></p>
                            </div>
                            <p>Here's how Nike used mirroring to create one of my favorite pieces of copy. Have you ever used the word “tomorrow” to put things off?</p>
                            <p>Tomorrow I’ll go to the gym. </p>
                            <p>Tomorrow I’ll start writing that book. </p>
                            <p>Tomorrow I’ll quit my job and start my own business. </p>
                            <p>Nike took the word “tomorrow” and reflected it back to us in an advertisement that motivates people to stop procrastinating – go out and get fit today. </p>
                            <div className="blog-image-row">
                                <img className="logo-img" src="/blog/blog-img/nike.jpg" alt="Mirroring in Nike ad" />
                                <p><em>Oh, the guilt! </em></p>
                            </div>
                            <h3>Put a Label on it </h3>
                            <p>The first step to labeling is simply being aware of another person’s emotional state. Once you spot an emotion, turn it into words. Labels can be phrased as statements or questions that usually begin with the following phrases: </p>
                            <ul>
                                <li>“It <em>seems</em> like…”</li>
                                <li>“It <em>looks</em> like…”</li>
                                <li>“It <em>sounds</em> like…”</li>
                            </ul>
                            <p>Phrases like <em>“It sounds like you're afraid of…”</em> and <em>“It looks like you’re concerned about…”</em> help diffuse negative emotions. </p>
                            <p>Labels can reinforce positive perceptions and dynamics. The golden rule is to understand that you’re dealing with a human who wants to be appreciated.</p>
                            <p>Here’s a Goibibo error message that uses labeling and a conversational tone to help guide users. </p>
                            <div className="blog-image-row">
                                <img className="logo-img" src="/blog/blog-img/goibibo.jpg" alt="Google's label is clear, concise, useful, and conversational" />
                                <p><em>Goibibo's label is clear, concise, and conversational </em></p>
                            </div>
                            <h3>Summarize the Situation </h3>
                            <p>Summary is the combination of labels and paraphrasing. Paraphrase is taking what someone says and putting it in your own words (whereas mirroring doesn’t change the person's words). This proves to the other person that you really do understand them and aren't merely parroting their concerns. </p>
                            <p>You simply summarize both the known facts and content (paraphrasing) about a situation, and how the other person feels about them (labeling). </p>
                            <p>An example of summary is Spotify’s Wrapped feature. At the end of each year, Spotify calculates how much time you spent listening to music and which songs and artists you streamed the most. </p>
                            <p>The Wrapped feature summarizes users’ top songs, hours listened, top artists, and much more in all sorts of fun infographics. </p>
                            <p>People love to be listened to. It’s no surprise people share their Wrapped findings on social media even if they’re not particularly proud of which songs they listened to most throughout the year. </p>
                            <div className="blog-image-row">
                                <img className="logo-img" src="/blog/blog-img/spotify.jpg" alt="Spotify Wrapped summarizes your great taste in music" />
                                <p><em>Spotify summarizes your great taste in music with paraphrase and labels </em></p>
                            </div>
                            <h3>The 2 Magic Words that Transform any Negotiation </h3>
                            <p>Chris Voss analyzed transcripts from his team’s successful hostage negotiations and made an important discovery. The turning point in negotiations usually occurred after the team listened to the captor’s words, summarized the words back to the captor, and got the captor to say, “That’s right.” </p>
                            <p>This supports the writings of American psychologist Carl Rogers. His teachings on empathy guided people to summarize their counterpart’s thoughts and feelings so fully and completely that there is only one possible response – “That’s right”.</p>
                            <p>These two words signal that your negotiating partner feels acknowledged. A chemical change takes place in their brain causing a subtle epiphany – they’ve heard the complete and indisputable truth. They are willing to listen, and they may not even be aware of releasing their resistance to you. </p>
                            <p>If you can get someone to trust that you understand where they are coming from, you have a much greater chance of getting what you want. </p>
                            <p>Let's take a look at how Fibery gets users to a “That’s right” epiphany. Fibery’s landing page has a button ('I don’t get it, explain differently') that lets you switch the web copy voice and tone. One of the voices sounds like a self-deprecating developer riddled with anxiety. This unique and hilarious voice makes users feel heard and acknowledged.</p>
                            <p>Here is one developer’s comment in response to the tagline – Try. Suffer. Quit. – on the fibery.io/anxiety web page: <em>“That's my career in 3 words”</em>. This comment is very close to “That’s right”. </p>
                            <p>Fibery’s landing page went viral on Twitter: <em>“As if someone opened a window and let out the thick stale rank of bullshit we’ve all gotten used to”</em>. Fibery’s brutal honesty and deep understanding of their target audience helps them get what they want – more people signing up to their platform. </p>
                            <div className="blog-image-row">
                                <img className="gestalt-img" src="/blog/blog-img/fibery.jpg" alt="Fibery's brutally honest landing page" />
                                <p><em>If only all landing pages were this honest</em></p>
                            </div>
                            <h3>Master “no” </h3>
                            <p>According to Voss, “yes” is a horrible word because it scares people. We’re so used to being trapped by “yes” that we get nervous and wonder what we committed to. Allowing people to say “no” makes them feel relaxed and protected. </p>
                            <p>“No” respects people’s autonomy and gives them the illusion of control. Simply change your 'yes-oriented' questions – <em>“Is it ok if we sit in the reserved section?”</em> to 'no-oriented' questions – <em>“Would it be horrible if we sat in this section?”</em></p>
                            <p>Most 'no-oriented' questions begin with: </p>
                            <ul>
                                <li>“Is it ridiculous...?”</li>
                                <li>“Do you disagree…?”</li>
                                <li>“Is it a bad idea...?”</li>
                                <li>“Are you against…?”</li>
                                <li>“Am I out of line...?”</li>
                            </ul>
                            <p><em>“Have you given up on this project?”</em> is the highest converting email subject line used by Voss’s clients. It triggers the safety of “no” and boosts it with loss aversion (people will take greater risks to avoid losses than to achieve gains). </p>
                            <p>Here’s a notification from Headspace meditation &amp; sleep app which uses a 'yes-oriented' question. It raises a lot of questions like: <em>"How long is a few minutes?"</em> and <em>"If I have a few minutes, do I want to spend it on this app?"</em></p>
                            <div className="blog-image-row">
                                <img className="gestalt-img" src="/blog/blog-img/headspace.jpg" alt="Yes-oriented question in Headspace app notification" />
                                <p><em>A flat-out “yes” can be a scary thing to say</em></p>
                            </div>
                            <p>Here I have rephrased the notification as a 'no-oriented' question to help users relax and focus better on the message. It opens a path forward, increasing the chances you will continue using the app.</p>
                            <div className="blog-image-row">
                                <img className="gestalt-img" src="/blog/blog-img/headspace-no.jpg" alt="No-oriented question" />
                                <p><em>“No” is the start of the negotiation, not the end of it </em></p>
                            </div>
                            <h3>Bending Reality </h3>
                            <p>Voss teaches the art of bending people’s reality with neuroscience. He has a variety of tools for framing a negotiation in a way that your counterpart will unconsciously accept the limits you place on the discussion. </p>
                            <p>For example, when you smile at someone, they’ll smile back as a reflex. Conversations seem to flow when you radiate warmth and acceptance. You can use your voice to reach into someone’s brain and flip an emotional switch – distrusting to trusting, or nervous to calm. </p>
                            <p>This also works in digital interfaces when you’re not actually facing someone. You can write copy with a conversational tone – the same used with family and friends – to stimulate the release of feelgood chemicals (oxytocin, dopamine).</p>
                            <p>Here's some microcopy from Slack that speaks to users respectfully, in a humble and honest way that generates feelings of safety and builds trust. </p>
                            <div className="blog-image-row">
                                <img className="logo-img" src="/blog/blog-img/slack.jpg" alt="Slack error message speaks to users in a humble tone" />
                                <p><em>Slack makes you feel calm when something goes wrong </em></p>
                            </div>
                            <p>Numbers have psychological significance. In terms of negotiation, numbers ending in 0 feel like temporary placeholders or guesses. But less rounded numbers (e.g. $72,589) feel like a figure that you came to as a result of thoughtful calculation. </p>
                            <p>Here’s an example of how Visme uses odd numbers to create a feeling of legitimacy.</p>
                            <div className="blog-image-row">
                                <img src="/blog/blog-img/visme.png" alt="Visme's odd numbers feel legitimate" />
                                <p><em>Odd numbers feel serious and permanent </em></p>
                            </div>
                            <p>You can put someone in a generous mood by making them an offer, then after they reject it, give them an unrelated surprise gift. Unexpected gestures are effective because they introduce a dynamic called reciprocity; we pay back what we receive from others. </p>
                            <p>Here is ClickUp’s welcome email offering users a surprise – ‘warm chocolate cookies’ (a link in the email that takes you to a delicious cookie recipe) – which makes users want to repay the gift by exploring ClickUp further.</p>
                            <div className="blog-image-row">
                                <img className="gestalt-img" src="/blog/blog-img/clickup.jpg" alt="ClickUp welcome email offering warm cookies" />
                                <p><em>People feel obliged to repay debts of kindness </em></p>
                            </div>
                            <h3>Create Breakthroughs by Revealing Black Swans</h3>
                            <p>In any negotiation, success is determined by how well you listen, not how well you speak. According to Voss, there’s the visible negotiation and the secret negotiation space under the surface where the ‘Black Swans’ live. </p>
                            <p>Black Swans are pieces of information, subtle truths, that when discovered, shift a negotiation in your favor. </p>
                            <p>Access to this hidden space comes through understanding people’s worldview, their ‘religion’ – the authority that determines what is fair to them – the market, experts, society, or God. </p>
                            <p>Once you understand your counterpart’s worldview, you can build influence. </p>
                            <p>In March 2003, Voss led the negotiation with Dwight Watson, a farmer whose bomb threat brought Washington, D.C. to a standstill. Rather than engage Watson in logical arguments and force him to surrender, Voss attempted to unearth Watson's worldview.</p>
                            <p>An FBI agent on Voss’s team listened intently to subtle references that Watson made, the agent told Voss: </p>
                            <p><em>“Watson is a devout Christian”. Tell him tomorrow is the Dawn of the Third Day. That’s the day Christians believe Jesus Christ left his tomb and ascended to Heaven. If Christ came out on the Dawn of the Third Day, why not Watson?”</em> </p>
                            <p>By combining the subtext of Watson’s words with knowledge of his worldview, the FBI made Watson feel heard. In their next conversation, Watson said <em>“I’ll come out”</em>. He did, ending a forty-eight-hour standoff.</p>
                            <p>Voss teaches his clients that engaging someone face-to-face is the best way to discover Black Swans. But in today's era of personalized marketing, companies can use data mining techniques to gain a holistic understanding of their customers’ worldview and fill databases with Black Swans. </p>
                            <p>Here’s a piece of microcopy that shows how deeply Best Buy listens to and understands their customers. Somehow, Best Buy knows whether you celebrate Hanukkah (Dec. 22-30), Christmas (Dec. 25), or Kwanzaa (Dec. 26-Jan. 1). If you don't observe Christmas, you can feel alienated when online stores say 'Arrives by Christmas'. That's why people appreciate Best Buy's 'Get it by Hanukkah’ microcopy. </p>
                            <div className="blog-image-row">
                                <img className="gestalt-img" src="/blog/blog-img/bestbuyhanukkah.jpg" alt="Get it by Hanukkah microcopy" />
                                <p><em>Best Buy knows which holiday you observe </em></p>
                            </div>
                            <p> Best Buy positions themselves within the worldview customers use to make decisions. Their Black Swan microcopy shows respect for customers’ beliefs; this helps Best Buy increase conversions and sales. </p>
                            <p><strong>It looks like you want help enhancing your writing with FBI negotiation tactics. Would it be horrible if you <a href="#contact">messaged </a>me now? (See what I did there? A label and a 'no-oriented' question!).</strong></p>
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

export default UxWriting
