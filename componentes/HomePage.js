import React from 'react'

const HomePage = () =>{
    return(
    <>
        <div className="homePage">
            <div className="homePage-contant">
                <h1>Hi, I'm Jyoti.</h1> 
                {/* <p>I'm a webdMy name is</p>  */}
                <div className="contact-btn">
                    <button className="btn ">
                       Contact<i className="fas" /> /
                    </button>
                    <button className="btn">
                       Contact<i className="fas" /> /
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default HomePage