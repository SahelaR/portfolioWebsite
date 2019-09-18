import React from "react";
import CSS from "../SocialMedia/SocialMedia.module.css";
import Linkedin from "../Images/linkedin.svg"
import Twitter from "../Images/twitter.svg"

export default class SocialMedia extends React.Component {
    render() {
        return (
                <div className={CSS.contactList}>
                    <p className={CSS.subtitle}>connect.</p>
               
               
                <div class="section" />
                <a href="https://www.linkedin.com/in/sahelarani/"><img class="fb" src={Linkedin} alt="Facebook" width="48px" height="48px" /></a>

                <a href="https://twitter.com/sxhelar" ><img class="twitter" src={Twitter} alt="Twitter" width="48px" height="48px" /></a>

                </div>

            
        );
    }
}
