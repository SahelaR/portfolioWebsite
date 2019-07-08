import React from 'react'
import CSS from "../ContactMe/ContactMe.module.css"

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
                <h2>drop me a message</h2>
            <br></br>
                <div className={CSS.container}>
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

                        <button className={CSS.button} onClick={() => this.onSubmit()}>
                            Send
            </button>
                    </form>
                </div>
                </div>

                  
            
               
        )
    }
}
