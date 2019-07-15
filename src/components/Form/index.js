import React from "react";
import CSS from "../Form/Form.module.css";


export default class ContactMe extends React.Component {
    render() {
        return (
            <form>
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
                    <textarea
                        placeholder="message"
                        name="message"
                        rows="10"
                        className={CSS.message}
                        value={this.state.message}
                        onChange={e => this.change(e)}
                    />

                    <br />
                    <button className={CSS.button} onClick={() => this.onSubmit()}>Send</button>
                </form>

        );
    }
}
