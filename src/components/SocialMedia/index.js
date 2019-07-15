import React from "react";
import CSS from "../SocialMedia/SocialMedia.module.css";
import { SocialIcon } from "react-social-icons";

export default class SocialMedia extends React.Component {
    render() {
        return (
                <ul className={CSS.contactList}>
                    <p>i am social.</p>
                    <br />
                    <li><SocialIcon url="https://twitter.com/sxhelar" bgColor="#331832" /> </li>
                    <li><SocialIcon url="https://medium.com/@sahelarani1" bgColor="#331832" /></li>
                    <li><SocialIcon url="https://www.linkedin.com/in/sahelarani/" bgColor="#331832" /></li>
                    <li><SocialIcon url="https://github.com/SahelaR" bgColor="#331832" /></li>
                    <br />
                    <p>drop me a message.</p>

                </ul>
            
        );
    }
}
