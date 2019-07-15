import React from "react";
import CSS from "../ContactMe/ContactMe.module.css";
import Form from "../Form"
import SocialMedia from "../SocialMedia";


export default class ContactMe extends React.Component {
render() {
        return (
            <div className={CSS.mainContainer}>
                <h3 className={CSS.contact}>contact.</h3>
                <div className={CSS.divider}>
                    <Form />
                    <SocialMedia />
                </div>
                </div>
        );
    }
}
