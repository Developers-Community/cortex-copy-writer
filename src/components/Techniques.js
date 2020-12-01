import React from 'react'
import { Link } from 'react-router-dom'

const Techniques = () => {
    return (
        <div>
            <div id="anchor-techniques" className="row row1 techniques">
                <div className="row-inner column">

                    <div className="row-title techniques_top_title" id="techniques">
                        <h3 className="heading-block-background">Interactive Techniques</h3>
                        <p>Allow me to demonstrate some <Link to="/psychology">psychology-based copywriting</Link> techniques I apply to optimize user experiences and boost conversion rates.</p>
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
        </div>
    )
}

export default Techniques
