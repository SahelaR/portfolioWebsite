import React from "react";
import CSS from "../SocialMedia/SocialMedia.module.css";


export default class SocialMedia extends React.Component {
    render() {
        return (
                <div className={CSS.contactList}>
                    <p className={CSS.subtitle}>connect.</p>
               
               
                <div class="section" />
                    <a href="https://www.facebook.com/UsmanManiDar" target="_blank"><img class="fb" src="https://goo.gl/I5LtpV" alt="Facebook" width="48px" height="48px" /></a>

                        <a href="https://twitter.com/UsmanManiDar" target="_blank"><img class="twitter" src="https://goo.gl/iph3IL" alt="Twitter" width="48px" height="48px" /></a>

                            <a href="#" target="_blank"><img class="insta" src="https://goo.gl/PDgUIa" alt="Instagram" width="48px" height="48px" /></a>

                                <a href="#" target="_blank"><img class="pin" src="https://goo.gl/0eCZlG" alt="Pinterest" width="48px" height="48px" /></a>

                                    <a href="#" target="_blank"><img class="google" src="https://goo.gl/SLSMhg" alt="Google +" width="48px" height="48px" /></a>


                </div>

            
        );
    }
}
