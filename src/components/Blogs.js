import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <div>
            {/* <!-- BLOG --> */}
            <div id="anchor-blog" className="row row2 blogs">
                <div className="row-inner blog-inner">

                    <div className="blog-heading">
                        <h3 className="heading-block-background">Blogs</h3>
                    </div>
                    <div className="blog-container" id="articles">



                        <Link to="/evaluation">
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
                        </Link>





                        {/* <!-- BLOG --> */}
                        <Link to="/screenwriter">

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
                        </Link>

                        {/* <!-- BLOG --> */}
                        <Link to="/psychology">

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
                        </Link>

                        {/* <!-- BLOG --> */}
                        <Link to="/ux-writing">

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
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
