import React from 'react'

const SocialMedia = () =>{
    return(
    <> 
    <div className="socialMedia">
        <div className="socialMedia-items">
            <p className="line"/>
            <ul>
                <li className="socialMedia-logo">
                    <i className='fab fa-twitter socialIcon'/>
                </li>
                <li className="socialMedia-logo">
                    <i className='fab fa-instagram socialIcon'/>
                </li>
                <li className="socialMedia-logo">
                    <i className='fab fa-github socialIcon'/>
                </li>
                <li className="socialMedia-logo">
                    <i className='fab fa-linkedin  socialIcon'/>
                </li>
            </ul>
            <p className="line"/>
        </div>
    </div> 
    </>
    )
}

export default SocialMedia