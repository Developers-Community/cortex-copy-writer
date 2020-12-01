import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>





            <div className="main">


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

export default Footer
