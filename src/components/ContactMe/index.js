import React from "react";
import CSS from "../ContactMe/ContactMe.module.css";
import { SocialIcon } from "react-social-icons";

export default class ContactMe extends React.Component {
    state = {
        name: "",
        email: "",
        message: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div className={CSS.mainContainer}>
                   
                   
                    <form className={CSS.form}>
                        <input
                            name="name"
                            placeholder="name"
                            className={CSS.name}
                            type="text"
                            value={this.state.name}
                            onChange={e => this.change(e)}
                        />

                        <input
                            name="email"
                            placeholder="email"
                            className={CSS.email}
                            value={this.state.email}
                            onChange={e => this.change(e)}
                        />
                        <br />
                        <input
                            placeholder="message"
                            name="message"
                            className={CSS.message}
                            value={this.state.message}
                            onChange={e => this.change(e)}
                        />

                        <br />
                        <button className={CSS.button} onClick={() => this.onSubmit()}>Send</button>
                         </form>
                          <br />


                <ul className={CSS.contactList}>
                    <li><SocialIcon url="https://twitter.com/sxhelar" bgColor="#331832" /> </li>
                    <li><SocialIcon url="https://medium.com/@sahelarani1" bgColor="#331832" /></li>
                    <li><SocialIcon url="https://www.linkedin.com/in/sahelarani/" bgColor="#331832"/></li>
                    <li><SocialIcon url="https://github.com/SahelaR" bgColor="#331832" /></li>
                </ul>
                <br />
                </div>
        );
    }
}
