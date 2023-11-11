import React from "react";
import profile from '../profile.png';


const AboutMe = () => {
    return (
        <div className='tc'>
            <h1 style={{fontFamily: "Lucida Handwriting"}} className='underline ma0 pa4'>About Me</h1>
            <article className="center br3 pa3 pa4-ns mv3 ">
                <div className="tc">
                    <img src={profile} className="br-100 h5 w5 dib"
                         alt=''/>
                    <h1 style={{fontFamily: "papyrus"}} className='underline ma0 pa4'>Athena Lynn Taylor</h1>
                    <hr className="mw3 bb bw1 b--black-10"/>
                </div>
                <p style={{fontFamily: "papyrus"}} className="lh-copy measure center f6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </article>
        </div>
    );
}

export default AboutMe;