import React from 'react'
import TopBarDesktop from './TopBarDektop'
import Blogs from './Blogs'
import ChatBot from './ChatBot'
import Footer from './Footer'
import Header from './Header'
import Reviews from './Reviews'
import Samples from './Samples'
import Services from './Services'
import Techniques from './Techniques'

const HomePage = () => {
    return (
        <div>
            <TopBarDesktop />
            <Header />
            <Services />
            <ChatBot />
            <Techniques />
            <Samples />
            {/* <CaseStudy /> */}
            <Blogs />
            <Reviews />
            <Footer />
        </div>
    )
}

export default HomePage
