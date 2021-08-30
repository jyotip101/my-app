import React from 'react'

import SocialMedia from '../SocialMedia' 
import HomePage from '../HomePage'
import Projects from '../Projects'
import SkillsPage from '../SkillsPage'
import Work from '../Work'
import FooterPage from '../FooterPage'

function Home() {
    return(
    <>
        <SocialMedia />
        <HomePage /> 
        <Projects />
        <SkillsPage />
        <Work />
        <FooterPage />
    </>
    )
}
export default Home