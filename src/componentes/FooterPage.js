import React from 'react'

const FooterPage = () =>{
    return(
    <>
        <div className="footer">
            <div className="footer-contant">
                <div className="logo">
                    <p>copy All Right </p>
                </div>
                <div className="footer-section">
                    <a href="">
                        <i className="fab fa-twitter icon" />
                    </a>
                    {/* <a href="">
                        <i className="fab fa-instagram icon" />
                    </a> */}
                    <a href="">
                        <i className="fab fa-github icon" />
                    </a>
                    <a href="">
                        <i className="fab fa-linkedin icon" />
                    </a>
                    <a href="">
                        <i className=" icon" />
                    </a>
                </div>
            </div>
        </div>
    </>
    )
}
export default FooterPage