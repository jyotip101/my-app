import React from 'react'

import ResDowlode from '../Resume.docx'
// '.../src/Resume.docx'

const Work = () =>{
    return(
    <>
        <div className="work">
            <div className="work-section">
                <div className="work-text">
                    <h1>Have a project in mind?</h1>
                    <h1 className="line2">Let's get to work.</h1>
                </div>
                <div className="work-btn">
                    <button className="btn">
                       work<i className="fas" /> /
                    </button>
                    <button className="btn">
                      <a 
                        // href={require("../Resume.docx")} 
                        href={ResDowlode}
                        download='resume'
                        target="_blank"
                      > Resume </a>
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}
export default Work