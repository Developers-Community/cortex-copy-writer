import React from 'react'

const Services = () => {
    return (
        <div>
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

        </div>
    )
}

export default Services
